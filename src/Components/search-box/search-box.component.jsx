import React, { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search Monster"
          className="search-box"
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}
