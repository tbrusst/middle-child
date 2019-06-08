import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import base from "../js/base";
import items from "../js/items.js";
import Order from "./Order";
import Backend from "./Backend";
import Logo from "../img/mc-logo.png";
import BottomButton from "./BottomButton";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  // state = {
  //   items: [],
  //   itemsInCart: [],
  //   cartShown: false
  // };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsInCart: [],
      cartShown: false,
      total: 0
    };
    this.sumCartPrice = this.sumCartPrice.bind(this);
  }

  componentDidMount() {
    // this.loadSigns();

    this.ref = base.syncState("items", {
      context: this,
      state: "items"
    });
  }

  loadSigns = () => {
    this.setState({ items });
  };

  updateItem = (key, updatedMenu) => {
    // 1. copy the current state
    const items = { ...this.state.items };

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

  sumCartPrice(index, subtotal) {
    //set state of total to the subtotal state of cart
    var total = { ...this.state.total };
    // console.log(itemsInCart);
    total = this.state.total + subtotal;

    this.setState({ total });
  }
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
                  <NavLink exact to="/Backend">
                    Backend
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/">
                    Order
                  </NavLink>
                </li>
              </ul>
            </nav>

            <Switch>
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

              <Route
                path="/"
                render={() => (
                  <Order
                    items={this.state.items}
                    itemsInCart={this.state.itemsInCart}
                    increaseItemAmount={this.increaseItemAmount}
                    sumCartPrice={this.sumCartPrice}
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
          total={this.state.total}
        />

        <button onClick={this.loadSigns} />
      </>
    );
  }
}

export default Nav;
