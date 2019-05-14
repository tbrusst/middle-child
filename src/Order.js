import React from "react";
import MenuItem from "./MenuItem";
import BottomButton from "./BottomButton";

class Order extends React.Component {
  render() {
    const buttonClass = "cartButton";
    const itemClass = "menuClass";

    return (
      <div>
        <MenuItem className={itemClass} />

        <BottomButton className={buttonClass} />
      </div>
    );
  }
}

export default Order;
