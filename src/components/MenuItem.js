import React, { Component } from "react";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };

    this.IncrementItem = this.IncrementItem.bind(this);
  }

  IncrementItem() {
    this.setState(
      {
        quantity: this.state.quantity + 1
      },
      () => this.handleChange()
    );
  }
  // DecreaseItem = () => {
  //   this.setState({ quantity: this.state.quantity - 1 }, this.handleChange());
  //   // this.handleChange();
  // };

  handleChange = event => {
    console.log(this.state.quantity);
    //make a copy of the current menu
    const updatedCart = {
      name: this.props.details.name,
      price: this.props.details.price,
      quantity: this.state.quantity
    };

    console.log(this.state.quantity);
    this.props.increaseItemAmount(this.props.index, updatedCart);
  };

  render() {
    return (
      <div className={"menuItem " + this.props.className}>
        <img src={this.props.details.img} alt="" />
        <div className="menuInfo">
          <h3>{this.props.details.name}</h3>
          <p>{this.props.details.desc}</p>
          <p>${this.props.details.price}</p>
          <button>Add</button>
          <div id="quantity-ticker">
            <button onClick={this.DecreaseItem}>-</button>
            <p>{this.state.quantity}</p>
            <button onClick={this.IncrementItem}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
