import React from 'react';

// import "./styles/CategoricalLegend.module.css";          // <= DO THIS FIRST...
import style from "./styles/CategoricalLegend.module.css";  // <= THEN THIS..

interface CategoricalLegendProps {
    domain_names?: string[] | undefined;
    domain?: string[] | undefined; // Should be in the order of what appears top to bottom in the chart
    range?: unknown[] | undefined;
    scale?: any | undefined;
    title?: string;
    na_message?: string;
}

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
function CategoricalLegend (props: {
    domain_names?: string[] | undefined,
    domain?: string[] | undefined,
    range?: unknown[] | undefined,
    scale?: any | undefined,
    title?: string,
    na_message?: string // TODO: default to "N/A"
}) {

    const rows = [];

    const {
        domain_names,
        domain,
        range,
        title,
        scale,
        na_message
    } = (props as unknown as CategoricalLegendProps);

    if (!!domain && !!range) {

        console.log("CategoricalLegend:");
        console.log(`domain.length: ${domain.length}, range.length: ${range.length}`)

        if (domain.length <= range.length) {

            for (let i = 0; i < domain.length; ++i) {

                if (typeof range[i] === "string") {

                    const color: string = range[i] as string;

                    if (!!domain_names) {
                        rows.push(
                            <div className={style["entry"]} key={i}>
                                <div
                                    className={style["key"]}
                                    style={{
                                        backgroundColor: color
                                    }}>
                                </div>
                                {(!!domain_names) ?
                                    <p>{domain_names[i] || domain[i]}</p> :
                                    <p></p>
                                }
                            </div>
                        );
                    }

                }
            }

        }

        return (
            <div className={style["categorical-legend"]}>
                {rows}
            </div>
        )
    } else {
        return (
            <div className={style["categorical-legend"]}>
                <span>CategoricalLegend</span>
            </div>
        )
    }

}

export default CategoricalLegend;
