/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React__default from 'react';
import style from './styles/CategoricalLegend.module.css.js';

/**
 * This is a prototype generalization of the CategoricalLegend component used in the
 * [ERC tool](https://github.com/ruralinnovation/erc-frontend-ts/tree/dev/MDAT-30-frontend-ui-shared-library/src/components){target=_blank}
 *
 * ```ts
 * import { CategoricalLegend } from '@cori-risi/cori.data.api';
 *
 * import "@cori-risi/cori.data.api/inst/dist/cori.data.api.css";
 *
 * // ...
 *
 * const colorScale = d3.scaleOrdinal<string>()
 *       .domain(groups) // Input domain
 *       .range(["#A3E2B5", "#00835D", "#26535C"]);
 *
 * const colorScaleDomain = colorScale.domain();
 * const colorScaleRange = colorScale.range();
 *
 * // ...
 *
 * <CategoricalLegend domain_names={colorScaleDomain.map(c => data.filter(d => d.geoid === c).map(d => d.name)[0])}
 *                    domain={colorScaleDomain}
 *                    range={colorScaleRange} />
 * ```
 *
 *  @param props.domain_names - an (array) of names, each one mapped to a category in the color scale domain
 *  @param props.domain - d3 color scale domain
 *  @param props.range - d3 color scale range
 */
function CategoricalLegend(props) {
    const rows = [];
    const { domain_names, domain, range, title, scale, na_message } = props;
    if (!!domain && !!range) {
        console.log("CategoricalLegend:");
        console.log(`domain.length: ${domain.length}, range.length: ${range.length}`);
        if (domain.length <= range.length) {
            for (let i = 0; i < domain.length; ++i) {
                if (typeof range[i] === "string") {
                    const color = range[i];
                    if (!!domain_names) {
                        rows.push(React__default.createElement("div", { className: style["entry"], key: i },
                            React__default.createElement("div", { className: style["key"], style: {
                                    backgroundColor: color
                                } }),
                            (!!domain_names) ?
                                React__default.createElement("p", null, domain_names[i] || domain[i]) :
                                React__default.createElement("p", null)));
                    }
                }
            }
        }
        return (React__default.createElement("div", { className: style["categorical-legend"] }, rows));
    }
    else {
        return (React__default.createElement("div", { className: style["categorical-legend"] },
            React__default.createElement("span", null, "CategoricalLegend")));
    }
}

export { CategoricalLegend as default };
//# sourceMappingURL=CategoricalLegend.js.map
