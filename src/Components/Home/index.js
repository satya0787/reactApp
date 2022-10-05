import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header";
import "./index.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="headContainer d-flex justify-content-between p-5 bg-dark">
        <div className="Content">
          <h1 className="Brand p-3">$M</h1>
          <p className="shop-matter p-3 text-white">
            Online shopping involves transactions or business over the internet.
            The buyer purchases the products and services required, by means of
            choosing the same over the internet. Therefore the technology is
            leading towards the digitalization concept. The normal shopping has
            been given a new face by the addition of technological aids. Offline
            or traditional ways have been advanced by making it online. It is a
            successful change in the business strategy.
            <br /> The new ideas and methods have been implemented to make it
            flourish, and provide greater revenue or economical benefits. Online
            shopping is the result of a change in business strategy therefore
            helping in competing. It is proving it to be an easier, convenient,
            and better option and therefore is the best example of the concept
            of digitalization.
          </p>
        </div>
        <div className="pic-conatiner">
          <img
            className="pic"
            alt="shoppingPic"
            src="https://images.pexels.com/photos/12563411/pexels-photo-12563411.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
