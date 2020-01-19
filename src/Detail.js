import React, { Component } from "react";
import data from "./data/stock-data.json";
import Stocks from "./Stocks";

class Detail extends Component {
  render() {
    const { symbol } = this.props.match.params;

    const currentStock = this.props.stockData.find(
      stock => stock.symbol === symbol
    );
    console.log("currnt stock ==> ", currentStock);
    return (
      <div>
        <h2>
          {currentStock.name} ({currentStock.symbol})
        </h2>
        <ul>
          <li>Current Price: {currentStock.lastPrice}</li>
          <li>Change: {currentStock.change}</li>
          <li>High: {currentStock.high}</li>
          <li>Low: {currentStock.low}</li>
        </ul>
      </div>
    );
  }
}
export default Detail;
