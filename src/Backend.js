import React, { Component } from "react";
import BackendEntry from "./BackendEntry";
import BottomButton from "./BottomButton";

class Backend extends Component {
  render() {
    const buttonClass = "cartButton";
    return (
      <div>
        <BackendEntry />

        <BottomButton className={buttonClass} />
      </div>
    );
  }
}

export default Backend;
