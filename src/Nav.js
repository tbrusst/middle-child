import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Order from "./Order";
import Backend from "./Backend";
import Logo from "./img/mc-logo.png";

class Nav extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav>
            <img src={Logo} alt="Middle Child Logo" />
            <ul>
              <li>
                <Link to="/">Order</Link>
              </li>
              <li>
                <Link to="/Backend">Backend</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Order} />
            <Route exact path="/Backend" component={Backend} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Nav;
