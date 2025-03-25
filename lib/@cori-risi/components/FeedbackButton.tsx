import React from 'react';

import style from "./styles/FeedbackButton.module.css";

const FeedbackButton: React.FC<{link: string}> = (props: { link: string }) => {

  return (
      <div className={style["feedback-button"]}>
        <a 
          href={props.link}
          target="_blank"
        >
          Provide feedback or get in touch
        </a>
      </div>
  );
};

export default FeedbackButton;