import React from 'react';

import style from "./styles/FeedbackButton.module.css";

const FeedbackButton: React.FC = () => {

  return (
      <div className={style["feedback-button"]}>
        <a 
          href="https://www.surveymonkey.com/r/3LFZLXK"
          target="_blank"
        >
          Provide feedback or get in touch
        </a>
      </div>
  );
};

export default FeedbackButton;