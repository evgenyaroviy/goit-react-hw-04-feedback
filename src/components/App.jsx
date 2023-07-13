import React, { Component } from 'react';
import Notification from './Notification/Notification';
import FeedbackOptions from "./Button/Button";
import Statistics from "./Statistics/Statistics";
import SectionTitle from "./SectionTitle/SectionTitle";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <>
        <SectionTitle>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>

        <SectionTitle>
          <h2>Statistics</h2>

          {totalFeedback !== 0 ? (
            <Statistics
              value={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification />
          )}
        </SectionTitle>
      </>
    );
  }
}
