import Product from "../Product";
import { Component } from "react";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rings } from "react-loader-spinner";

const apistatus = {
  intial: "INTIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class PrimeDeals extends Component {
  state = { ProductList: [], Apistatus: apistatus.intial };

  componentDidMount() {
    this.getPrimedeals();
  }

  getPrimedeals = async () => {
    this.setState({ Apistatus: apistatus.inProgress });
    const url = "https://apis.ccbp.in/prime-deals";
    const token = Cookies.get("jwt_token");

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      const updatedData = data.prime_deals.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({ ProductList: updatedData, Apistatus: apistatus.success });
    }
    if (response.status === 401) {
      this.setState({ Apistatus: apistatus.failure });
    }
  };

  renderPrimeDeals = () => {
    const { ProductList } = this.state;
    return (
      <div className="primeDeals">
        <h1 className="primeHeader m-5 p-2">Prime Deals</h1>
        <div className="row p-2 text-center m-5 ">
          {ProductList.map((product) => (
            <Product details={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  };
  renderFailureView = () => {
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
        alt="Register Prime"
        className="register-prime-image w-100"
      />
    );
  };

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Rings color="#0b69ff" height="50" width="50" />
    </div>
  );

  render() {
    const { Apistatus } = this.state;

    switch (Apistatus) {
      case apistatus.success:
        return this.renderPrimeDeals();
      case apistatus.failure:
        return this.renderFailureView();
      case apistatus.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  }
}

export default PrimeDeals;
