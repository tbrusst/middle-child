import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Cart from "./Cart";

class BottomButton extends Component {
  render() {
    return (
      <div className={"bottomButton " + this.props.className}>
        <Router>
          <React.Fragment>
            <Link to="/Cart">Cart</Link>

            <Switch>
              <Route exact path="/Cart" component={Cart} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default BottomButton;
