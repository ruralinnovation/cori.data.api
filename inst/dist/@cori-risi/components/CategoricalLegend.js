/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React from 'react';
import style from './styles/CategoricalLegend.module.css.js';

function CategoricalLegend({ domain_names, domain, range }) {
    const rows = [];
    console.log("CategoricalLegend:");
    console.log(`domain.length: ${domain.length}, range.length: ${range.length}`);
    if (domain.length <= range.length) {
        for (let i = 0; i < domain.length; ++i) {
            if (typeof range[i] === "string") {
                const color = range[i];
                console.log(color);
                console.log(domain[i]);
                console.log(domain_names[i]);
                if (!!domain_names) {
                    rows.push(React.createElement("div", { className: style["entry"], key: i },
                        React.createElement("div", { className: style["key"], style: {
                                backgroundColor: color
                            } }),
                        React.createElement("p", null, domain_names[i] || domain[i])));
                }
            }
        }
    }
    return (React.createElement("div", { className: style["categorical-legend"] }, rows));
}

export { CategoricalLegend as default };
//# sourceMappingURL=CategoricalLegend.js.map
