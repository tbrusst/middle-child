import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <div className={"menuItem " + this.props.className}>
        <div className="menuInfo">
          <h3>{this.props.itemsInCart.name}</h3>
          <p>${this.props.itemsInCart.price}</p>
          <button>Add</button>
          <div id="quantity-ticker">
            <button>-</button>
            <p>{this.props.itemsInCart.quantity}</p>
            <button>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
