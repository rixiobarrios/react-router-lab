import React, { Component } from "react";
import dataStocks from "./data/stock-data.json";
// import Stocks from "./stocks.css";
import { Link } from "react-router-dom";

class Stocks extends Component {
  render() {
    let dataStock = dataStocks.map(item => {
      return (
        <li key={item.symbol}>
          {item.name} <Link to={`/stocks/${item.symbol}`}>{item.symbol}</Link>;
        </li>
      );
    });

    return (
      <>
        <h1>Stocks</h1>
        <ul>{dataStock}</ul>
      </>
    );
  }
}
export default Stocks;
