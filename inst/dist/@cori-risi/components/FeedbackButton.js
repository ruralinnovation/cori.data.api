/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React__default from 'react';
import style from './styles/FeedbackButton.module.css.js';

const FeedbackButton = (props) => {
    return (React__default.createElement("div", { className: style["feedback-button"] },
        React__default.createElement("a", { href: props.link, target: "_blank" }, "Provide feedback or get in touch")));
};

export { FeedbackButton as default };
//# sourceMappingURL=FeedbackButton.js.map
