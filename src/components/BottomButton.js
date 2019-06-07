import React, { Component } from "react";

class BottomButton extends Component {
  render() {
    return (
      <div onClick={this.props.displayCart} className={"bottomButton "}>
        <p>Cart</p>
      </div>
    );
  }
}

export default BottomButton;
