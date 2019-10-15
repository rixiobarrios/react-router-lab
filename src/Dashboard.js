import React, { Component } from "react";
import listOfStocks from "./data/stock-data.json";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    let stocks = listOfStocks.map((item, index) => {
      return (
        <li key={index}>
          {item.name} <Link to={`/stocks/${item.symbol}`}>{item.symbol}</Link>
        </li>
      );
    });

    return (
      <div>
        <h2>Stocks</h2>
        <ul>{stocks}</ul>
      </div>
    );
  }
}

export default Dashboard;
