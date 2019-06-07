import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Order from "./Order";
import Backend from "./Backend";
import Logo from "../img/mc-logo.png";
import items from "../js/items.js";
import BottomButton from "./BottomButton";
import Cart from "./Cart";

class Nav extends Component {
  state = {
    items: [],
    itemsInCart: [],
    cartShown: false
  };

  componentDidMount() {
    this.setState({ items });
  }

  // loadSigns = () => {
  //   this.setState({ items });
  //   console.log(Object.keys(this.state));
  // };

  updateItem = (key, updatedMenu) => {
    console.log(this.state.items);
    // 1. copy the current state
    const items = { ...this.state.items };
    console.log(items);
    // 2. update that state key/value
    items[key] = updatedMenu;
    // 3. set the new copy to the component state
    this.setState({ items });
  };

  deleteItem = () => {
    console.log("delete item");
  };

  increaseItemAmount = (key, updatedCart) => {
    const itemsInCart = { ...this.state.itemsInCart };
    // console.log(itemsInCart);
    itemsInCart[key] = updatedCart;

    this.setState({ itemsInCart: itemsInCart });
  };

  displayCart = () => {
    if (this.state.cartShown) {
      this.setState({ cartShown: false });
    } else if (!this.state.cartShown) {
      this.setState({ cartShown: true });
    }
  };
  render() {
    var cartClass = "hide-cart";
    if (this.state.cartShown) {
      cartClass = "display-cart";
    } else if (!this.state.cartShown) {
      cartClass = "hide-cart";
    }
    return (
      <>
        <Router>
          <React.Fragment>
            <nav>
              <img src={Logo} alt="Middle Child Logo" />
              <ul>
                <li>
                  <Link to="/Backend">Backend</Link>
                </li>
                <li>
                  <Link to="/Order">Order</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route
                path="/Order"
                render={() => (
                  <Order
                    items={this.state.items}
                    itemsInCart={this.state.itemsInCart}
                    increaseItemAmount={this.increaseItemAmount}
                  />
                )}
              />
              <Route
                path="/Backend"
                render={() => (
                  <Backend
                    items={this.state.items}
                    updateItem={this.updateItem}
                    deleteItem={this.deleteItem}
                  />
                )}
              />
            </Switch>
          </React.Fragment>
        </Router>

        <BottomButton displayCart={this.displayCart} />

        <Cart
          className={cartClass}
          displayCart={this.displayCart}
          itemsInCart={this.state.itemsInCart}
        />
      </>
    );
  }
}

export default Nav;
