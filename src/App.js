import React, { Component } from "react";
import "./App.css";
import About from "./About";
import Stocks from "./Stocks";
import Detail from "./Detail";
import data from "./data/stock-data.json";
import { Link, Switch, Route, Redirect, Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: data
      // SelectedStock: ""
    };
  }

  // setStock = stock => {
  //   this.setState({selectedStock: stock})
  // }

  render() {
    return (
      <div>
        <nav>
          <h1>iStocks</h1>
          <Link to="/stocks">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <Switch>
            <Route
              path="/stocks"
              exact
              render={() => {
                return <Stocks stockData={this.props.stockData} />;
              }}
            ></Route>
            <Route path="/about" component={About} exact />
            <Route
              path="/stocks/:symbol"
              exact
              render={routerProps => {
                return (
                  <Detail {...routerProps} stockData={this.state.stocks} />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
