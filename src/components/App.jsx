import { useState } from "react";
// import React, { Component } from 'react';
import Notification from './Notification/Notification';
import FeedbackOptions from "./Button/Button";
import Statistics from "./Statistics/Statistics";
import SectionTitle from "./SectionTitle/SectionTitle";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {good, neutral, bad};

  const onLeaveFeedback = (type) => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();
  
return (
      <>
        <SectionTitle>
          <h2>Please leave feedback</h2>
      <FeedbackOptions
        options={Object.keys(options)}
  onLeaveFeedback={onLeaveFeedback}
/>
        </SectionTitle>

        <SectionTitle>
          <h2>Statistics</h2>

          {totalFeedback !== 0 ? (
            <Statistics
              value={options}
              countTotalFeedback={countTotalFeedback}
              countPositiveFeedbackPercentage={
                countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification />
          )}
        </SectionTitle>
      </>
    );
  }

