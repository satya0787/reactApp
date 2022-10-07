import Products from "../Products";
import PrimeDeals from "../Primeproducts";
import { Component } from "react";
import Header from "../Header";
class Finalproducts extends Component {
  render() {
    return (
      <div className="productContainer">
        <Header />
        <PrimeDeals />
        <Products />
      </div>
    );
  }
}

export default Finalproducts;
