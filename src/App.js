import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Stock from "./Stock";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/stocks">Home</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/stocks" component={Dashboard} />
            <Route
              path="/stocks/:symbol"
              render={routerProps => <Stock match={routerProps.match} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
