import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
import stockData from "./data/stock-data.json";

ReactDOM.render(
  <Router>
    <App stockData={stockData} />
  </Router>,
  document.getElementById("root")
);
