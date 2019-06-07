import React, { Component } from "react";
import BackendEntry from "./BackendEntry";
import BottomButton from "./BottomButton";

class Backend extends Component {
  render() {
    const buttonClass = "cartButton";
    return (
      <div id="backend-contain">
        {Object.keys(this.props.items).map(key => (
          <BackendEntry
            key={key}
            index={key}
            details={this.props.items[key]}
            updateItem={this.props.updateItem}
            deleteItem={this.props.deleteItem}
          />
        ))}

        <BottomButton className={buttonClass} />
      </div>
    );
  }
}

export default Backend;
