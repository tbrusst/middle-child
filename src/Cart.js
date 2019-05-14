import React, { Component } from "react";
import MenuItem from "./MenuItem";
import BottomButton from "./BottomButton";

class Cart extends Component {
  render() {
    const itemClass = "cartItem";
    return (
      <div>
        <MenuItem className={itemClass} />
      </div>
    );
  }
}

export default Cart;
