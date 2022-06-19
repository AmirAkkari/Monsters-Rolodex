import React, { Component } from "react";
import "./card.styles.css";
export default class Card extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          alt="monsterImage"
        />
        <h2>{monster.name}</h2>
        <p>monster.email</p>
      </div>
    );
  }
}
