import React, { Component } from "react";

class MenuItem extends Component {
  increaseCartAmount() {
    console.log("yolo");
    this.setState({
      amountOfItems: this.state.amountOfItems++
    });
  }
  render() {
    return (
      <div className={"menuItem " + this.props.className}>
        <img src={this.props.img} alt="" />
        <div className="menuInfo">
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          <p>${this.props.price}</p>
          <button onClick={this.props.handler}>Add</button>
          <div id="quantity-ticker">
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
