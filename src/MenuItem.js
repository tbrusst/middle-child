import React, { Component } from "react";
import Sandwich from "./img/sandwich.jpg";

class MenuItem extends Component {
  render() {
    return (
      <div className={"menuItem " + this.props.className}>
        <img src={Sandwich} alt="" />
        <div className="menuInfo">
          <h3>Breakfast Sandwich</h3>
          <p>
            Eggs, Cooper sharm american, arugula, Philly Bread Potato pullman
          </p>
          <p>$6.50</p>
          <button>Add</button>
        </div>
      </div>
    );
  }
}

export default MenuItem;
