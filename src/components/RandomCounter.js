import React, { Component } from "react";

import "./RandomCounter.css";

class RCounter extends Component {
  state = {
    count: 0,
  };

  getRandomNumber = () => Math.ceil(Math.random() * 100);

  onClickCounter = () => {
    const RNumber = this.getRandomNumber();
    this.setState({ count: RNumber });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h1 className="heading">Random Number</h1>
        <p className="paragraph">
          Generate a Random Number between the range of 0 to 100
        </p>
        <div className="btn-container">
          <button className="button" onClick={this.onClickCounter}>
            Generate
          </button>
        </div>
        <p className="para">{count}</p>
      </div>
    );
  }
}

export default RCounter;
