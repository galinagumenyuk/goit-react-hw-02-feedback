import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistic from "./components/Statistics";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };

  handleIncrementNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };

  handleIncrementBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const countTotalFeedback = Object.keys(this.state).reduce(
      (acc, key) => acc + parseFloat(this.state[key] || 0),
      0
    );
    const countPositiveFeedbackPercentage =
      (this.state.good * 100) / countTotalFeedback;
    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
        />
        <h2>Statistics</h2>
        {countTotalFeedback > 0 ? (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}

export default App;
