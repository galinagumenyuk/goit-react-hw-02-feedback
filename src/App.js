import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
        <p>Total:</p>
        <p>Positive feedback:</p>
      </div>
    );
  }
}

export default App;
