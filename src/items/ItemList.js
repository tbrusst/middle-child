import React, { Component } from "react";
import ItemData from "../content.json";

class ItemList extends Component {
  render() {
    return (
      <div>
        <h1>hello there</h1>
        {ItemData.map((itemDetail, index) => {
          return <h1>{itemDetail.id}</h1>;
        })}
      </div>
    );
  }
}

export default ItemList;
