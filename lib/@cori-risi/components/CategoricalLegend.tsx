import React from 'react';
import style from "./styles/CategoricalLegend.module.css";

interface CategoricalLegendProps {
    domain_names?: string[] | undefined;
    domain?: string[] | undefined; // Should be in the order of what appears top to bottom in the chart
    range?: unknown[] | undefined;
    scale?: any | undefined;
    na_message?: string;
    title?: string;
}

/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 *
 */
function CategoricalLegend ({ domain, domain_names, range, title, scale, na_message = "N/A" }: CategoricalLegendProps) {

    const rows = [];

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
