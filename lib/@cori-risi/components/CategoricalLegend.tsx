import React from 'react';
import style from "./styles/CategoricalLegend.module.css";

interface CategoricalLegendProps {
    domain_names: string[];
    domain: string[], // Should be in the order of what appears top to bottom in the chart
    range: unknown[]
}

export default function CategoricalLegend ({ domain_names, domain, range }: CategoricalLegendProps) {

    const rows = [];

    console.log("CategoricalLegend:");
    console.log(`domain.length: ${domain.length}, range.length: ${range.length}`)

    if (domain.length <= range.length) {

        for (let i = 0; i < domain.length; ++i) {

            if (typeof range[i] === "string") {

                const color: string = range[i] as string;
                console.log(color);
                console.log(domain[i]);
                console.log(domain_names[i]);

                if (!!domain_names) {
                    rows.push(
                        <div className={style["entry"]} key={i}>
                            <div
                                className={style["key"]}
                                style={{
                                    backgroundColor: color
                                }}>
                            </div>
                            <p>{domain_names[i] || domain[i]}</p>
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

}
