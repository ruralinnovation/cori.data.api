/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React__default from 'react';
import InfoTooltip from './InfoTooltip.js';
import style from './styles/CatLegend.module.css.js';

function CatLegend({ legend_dict, legend_labels, info_dict }) {
    const rows = [];
    let i = 0;
    for (let key in legend_dict) {
        if (key !== "default" && legend_dict.hasOwnProperty(key)) {
            rows.push(React__default.createElement("div", { key: i, className: style["entry"] },
                React__default.createElement("div", { className: style["key"], style: {
                        backgroundColor: legend_dict[key],
                        border: "10px solid " + legend_dict[key],
                    } }),
                React__default.createElement("p", null,
                    !!legend_labels && !!legend_labels[key] ? legend_labels[key] : key,
                    !!info_dict && !!info_dict[key] ? React__default.createElement(InfoTooltip, { text: info_dict[key] }) : "")));
        }
        i++;
    }
    return (React__default.createElement("div", { className: style["legend"] }, rows));
}

export { CatLegend as default };
//# sourceMappingURL=CatLegend.js.map
