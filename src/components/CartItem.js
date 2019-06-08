import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItemPrice: 0
    };
  }

  render() {
    var cartItemClass = "show";
    if (this.props.itemsInCart.quantity < 1) {
      cartItemClass = "hide";
    } else {
      cartItemClass = "show";
    }

    console.log(cartItemClass);
    return (
      <div className={"menuItem " + cartItemClass}>
        <div className="menuInfo">
          <h3>{this.props.itemsInCart.name}</h3>
          <p>${this.props.itemsInCart.price}</p>
          <p>{this.props.itemsInCart.quantity}</p>
        </div>
      </div>
    );
  }
}

export default CartItem;
