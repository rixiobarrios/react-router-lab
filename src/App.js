import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Stock from './Stock';
import './App.css';
import stocksData from './data/stock-data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: stocksData
    };
  }
  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav-item">
            <span className="nav-logo">iStocks</span>
          </div>
          <div className="nav-item">
            <Link to="/stocks">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/about">About</Link>
          </div>
        </div>

        <div className="main">
          <Switch>
            <Route path="/about" component={About} />
            <Route
              exact
              path="/stocks"
              render={() => <Dashboard stocks={this.state.stocks} />}
            />
            <Route
              path="/stocks/:symbol"
              render={routerProps => (
                <Stock {...routerProps} stocks={this.state.stocks} />
              )}
            />
            <Route path="/*" render={() => <Redirect to="/stocks" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
