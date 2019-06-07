import React, { Component } from "react";
import Close from "../img/close.svg";
import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    const itemClass = "cartItem";

    return (
      <div className="cart-contain" id={this.props.className}>
        <div className="cart-header">
          <img onClick={this.props.displayCart} src={Close} alt="" />
          <h1>Cart</h1>
        </div>
        {Object.keys(this.props.itemsInCart).map(key => (
          <CartItem
            key={key}
            index={key}
            itemsInCart={this.props.itemsInCart[key]}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
