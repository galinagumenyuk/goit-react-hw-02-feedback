import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, state }) => {
  return (
    <div>
      {Object.keys(state).map((key) => (
        <button
          type="button"
          id={key}
          key={key}
          className={s.button}
          onClick={onLeaveFeedback}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

// <button type="button" id="good" className={s.button} onClick={onLeaveFeedback}>
//   Good
// </button>
// <button type="button" id="neutral" className={s.button} onClick={onLeaveFeedback}>
//   Neutral
// </button>
// <button type="button" id="bad" className={s.button} onClick={onLeaveFeedback}>
//   Bad
// </button>
