/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React from 'react';
import style from './styles/CategoricalLegend.module.css.js';

function CategoricalLegend({ domain, domain_names, range, title, scale, na_message = "N/A" }) {
    const rows = [];
    if (!!domain && !!range) {
        console.log("CategoricalLegend:");
        console.log(`domain.length: ${domain.length}, range.length: ${range.length}`);
        if (domain.length <= range.length) {
            for (let i = 0; i < domain.length; ++i) {
                if (typeof range[i] === "string") {
                    const color = range[i];
                    if (!!domain_names) {
                        rows.push(React.createElement("div", { className: style["entry"], key: i },
                            React.createElement("div", { className: style["key"], style: {
                                    backgroundColor: color
                                } }),
                            (!!domain_names) ?
                                React.createElement("p", null, domain_names[i] || domain[i]) :
                                React.createElement("p", null)));
                    }
                }
            }
        }
        return (React.createElement("div", { className: style["categorical-legend"] }, rows));
    }
    else {
        return (React.createElement("div", { className: style["categorical-legend"] },
            React.createElement("span", null, "CategoricalLegend")));
    }
}

export { CategoricalLegend as default };
//# sourceMappingURL=CategoricalLegend.js.map
