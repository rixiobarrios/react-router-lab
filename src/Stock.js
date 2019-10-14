import React, { Component } from 'react';
import axios from 'axios';

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: this.props.match.params.symbol,
      apiStock: {}
    };
  }

  componentDidMount() {
    let url =
      'https://api.iextrading.com/1.0/tops?symbols=' + this.state.selectedStock;
    axios.get(url).then(response => {
      this.setState({ apiStock: response.data[0] });
    });
  }

  render() {
    return (
      <div>
        <h2>({this.state.apiStock.symbol})</h2>
        <ul>
          <li>Last Sale Price: {this.state.apiStock.lastSalePrice}</li>
          <li>Security Type: {this.state.apiStock.securityType}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;
