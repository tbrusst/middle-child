import React, { Component } from "react";

class BackendEntry extends Component {
  handleChange = event => {
    console.log(event.currentTarget.name, event.currentTarget.value);

    //make a copy of the current menu
    const updatedMenu = {
      ...this.props.details,
      [event.currentTarget.name]: event.currentTarget.value
    };

    console.log(updatedMenu);
    this.props.updateItem(this.props.index, updatedMenu);
  };

  render() {
    return (
      <div className="backendEntry">
        <form>
          <label className="line" htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.props.details.name}
            />
          </label>

          <label className="line" htmlFor="price">
            Price
            <input
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.props.details.price}
            />
          </label>
          <label className="line" htmlFor="desc">
            Description
            <textarea
              name="desc"
              onChange={this.handleChange}
              value={this.props.details.desc}
            />
          </label>
          <div className="bottomInputs">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={this.handleChange}
              value={this.props.details.status}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button onClick={this.deleteItem}>Remove</button>
        </form>
      </div>
    );
  }
}

export default BackendEntry;
