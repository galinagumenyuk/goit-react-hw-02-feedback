import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
    return (
        <div>
          <button type="button" className={s.button} onClick={onIncrementGood}>
            Good
          </button>
          <button type="button" className={s.button} onClick={onIncrementNeutral}>
            Neutral
          </button>
          <button type="button" className={s.button} onClick={onIncrementBad}>
            Bad
          </button>
        </div>)
}

export default FeedbackOptions;