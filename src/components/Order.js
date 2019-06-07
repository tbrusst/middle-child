import React from "react";
import MenuItem from "./MenuItem";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      amountOfItems: 0
    };
  }

  handler() {
    this.setState({
      amountOfItems: this.state.amountOfItems + 1
    });
  }
  render() {
    return (
      <div className="order-contain">
        {Object.keys(this.props.items).map(key => (
          <MenuItem
            handler={this.handler}
            key={key}
            index={key}
            details={this.props.items[key]}
            itemsInCart={this.props.itemsInCart[key]}
            increaseItemAmount={this.props.increaseItemAmount}
          />
        ))}
      </div>
    );
  }
}

export default Order;
