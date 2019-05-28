import React from "react";
import MenuItem from "./MenuItem";
import BottomButton from "./BottomButton";
import ItemData from "../content.json";

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
    const buttonClass = "cartButton";
    const itemClass = "menuClass";

    return (
      <div className="order-contain">
        {/* <MenuItem handler={this.handler} className={itemClass} /> */}

        {ItemData.map((itemDetail, index) => {
          return (
            <MenuItem
              key={index}
              handler={this.handler}
              className={itemClass}
              id={itemDetail.id}
              title={itemDetail.name}
              desc={itemDetail.desc}
              price={itemDetail.price}
              img={itemDetail.img}
            />
          );
        })}

        <BottomButton
          amountOfItems={this.state.amountOfItems}
          className={buttonClass}
        />
      </div>
    );
  }
}

export default Order;
