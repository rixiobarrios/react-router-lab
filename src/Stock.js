import React, { Component } from "react";
import listOfStocks from "./data/stock-data.json";

class Stock extends Component {
  render() {
    // get the stock from our JSON database
    let stock = listOfStocks.find(
      item => item.symbol === this.props.match.params.symbol
    );
    return (
      <div>
        <h2>
          {stock.name} ({stock.symbol})
        </h2>
        <ul>
          <li>Current Price: {stock.lastPrice}</li>
          <li>Change: {stock.change}</li>
          <li>High: {stock.high}</li>
          <li>Low: {stock.low}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;
