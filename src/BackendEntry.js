import React, { Component } from "react";

class BackendEntry extends Component {
  render() {
    return (
      <div className="backendEntry">
        <form>
          <label className="line" htmlFor="name">
            Name
            <input type="text" name="name" value="Sandwich" />
          </label>
          <label className="line" htmlFor="price">
            Price
            <input type="text" name="price" value="Price" />
          </label>
          <label className="line" htmlFor="description">
            Description
            <textarea type="text" name="description" value="Description" />
          </label>
          <div className="bottomInputs">
            <label className="radio">
              Availability
              <div>
                <input type="radio" name="Availability" value="Available" />
                <label htmlFor="Available">Available</label>
              </div>
              <div>
                <input type="radio" name="Availability" value="Unavailable" />
                <label htmlFor="Unavailable">Unavailable</label>
              </div>
            </label>
            <label htmlFor="image">
              Image
              <input type="file" name="image" accept="image/*" />
            </label>
          </div>
        </form>

        <button>Remove</button>
      </div>
    );
  }
}

export default BackendEntry;
