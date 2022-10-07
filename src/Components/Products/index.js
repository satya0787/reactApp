import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import Product from "../Product";

class Products extends Component {
  state = { ProductList: [] };
  componentDidMount() {
    this.getAPicall();
  }
  getAPicall = async () => {
    const token = Cookies.get("jwt_token");
    const URL = "https://apis.ccbp.in/products";
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };

    const response = await fetch(URL, options);

    if (response.ok === true) {
      const fetchedData = await response.json();
      console.log(fetchedData);
      const UpdatedData = fetchedData.products.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));

      this.setState({ ProductList: UpdatedData });
    }
  };
  render() {
    const { ProductList } = this.state;
    return (
      <>
        <h1 className="header m-5 p-2">All Products</h1>
        <div className="row p-2 text-center m-5 ">
          {ProductList.map((product) => (
            <Product details={product} key={product.id} />
          ))}
        </div>
      </>
    );
  }
}

export default Products;
