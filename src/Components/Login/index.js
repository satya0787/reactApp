import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Cookies from "js-cookie";
class Login extends Component {
  state = { username: "", password: "" };

  getUserid = (event) => {
    this.setState({ username: event.target.value });
    console.log(event.target.value);
  };

  getPassword = (evnet) => {
    this.setState({ password: evnet.target.value });
    console.log(evnet.target.value);
  };

  onSumbitSuccess = (jwtToken) => {
    const { history } = this.props;

    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    history.replace("/");
  };

  getApicall = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const Userdetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(Userdetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      console.log(data.jwt_token);
      this.onSumbitSuccess(data.jwt_token);
    } else {
      console.log(data.error_msg);
    }
  };
  render() {
    const { username, password } = this.state;

    return (
      <div className="LoginConatiner ">
        {/* <div className="img-one">
          <img
            src="https://as1.ftcdn.net/v2/jpg/04/53/32/76/1000_F_453327620_flLShRCUNtqoVMK3NyfJdKI1UnQ3DxBy.jpg"
            alt="loginpic"
            className="login-image"
          />
        </div> */}
        <form className="login-input" onSubmit={this.getApicall}>
          <label htmlFor="username" className="label">
            Username
          </label>
          <br />
          <input
            type="text"
            id="username"
            className="user"
            onChange={this.getUserid}
            value={username}
          ></input>
          <br />
          <label htmlFor="password" className="label">
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            className="password"
            value={password}
            onChange={this.getPassword}
          ></input>
          <br />
          <button type="submit" className="btn btn-primary mt-1">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
