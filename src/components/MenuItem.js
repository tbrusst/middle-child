import React, { Component } from "react";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      totalPrice: 0
    };

    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
  }

  IncrementItem() {
    const priceUpdate = this.props.details.price;
    this.setState(
      {
        quantity: this.state.quantity + 1
      },
      () => this.handleChange(priceUpdate)
    );
  }

  DecreaseItem() {
    if (this.state.quantity > 1) {
      const priceUpdate = -this.props.details.price;
      this.setState(
        {
          quantity: this.state.quantity - 1
        },
        () => this.handleChange(priceUpdate)
      );
    } else if (this.state.quantity == 1) {
      const priceUpdate = -this.props.details.price;
      this.setState(
        {
          quantity: this.state.quantity - 1
        },
        () => this.handleChange(priceUpdate)
      );
    }
  }

  handleChange = (price, event) => {
    //make a copy of the current menu
    const subtotal = this.props.details.price * this.state.quantity;
    const priceUpdate = parseFloat(price);

    console.log(priceUpdate);

    const updatedCart = {
      name: this.props.details.name,
      price: this.props.details.price,
      quantity: this.state.quantity,
      cartItemTotal: subtotal
    };
    this.props.increaseItemAmount(this.props.index, updatedCart);
    this.props.sumCartPrice(this.props.index, priceUpdate);
  };

  render() {
    var menuItemClass = "available";
    if (this.props.details.status == "active") {
      menuItemClass = "available";
    } else if (this.props.details.status == "inactive") {
      menuItemClass = "unavailable";
    }
    return (
      <div className={"menuItem " + menuItemClass}>
        <img src={this.props.details.img} alt="" />
        <div className="menuInfo">
          <h3>{this.props.details.name}</h3>
          <p>{this.props.details.desc}</p>
          <p>${this.props.details.price}</p>
          {/* <button>Add</button> */}
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
