import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Component } from "react";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home";
import Products from "./Components/Products";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/not-found" component={NotFound} />
            <ProtectedRoute exact path="/products" component={Products} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
