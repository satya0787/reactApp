import "bootstrap/dist/css/bootstrap.min.css";
import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";

const Header = (props) => {
  const { history } = props;
  const onlogout = () => {
    Cookies.remove("jwt_token");
    history.replace("/login");
  };
  return (
    <ul className="nav justify-content-end bg-dark">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-link " aria-current="page">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/cart" className="nav-link " aria-current="page">
          Cart
        </Link>
      </li>
      <li className="nav-item">
        <button className="log-out btn bg-primary mt-1 p-1" onClick={onlogout}>
          Log Out
        </button>
      </li>
    </ul>
  );
};

export default withRouter(Header);
