import React from 'react';
import style from "./styles/CategoricalLegend.module.css";

interface CategoricalLegendProps {
    data_names: string[];
    domain: string[], // Should be in the order of what appears top to bottom in the chart
    range: unknown[]
}

const CategoricalLegend: React.FC<CategoricalLegendProps> = ({ data_names, domain, range }) => {

    const rows = [];

    // alert(data_names);

    if (domain.length <= range.length) {

        for (let i = 0; i < domain.length; ++i) {

            if (typeof range[i] === "string") {

                const color: string = range[i] as string;
                if (!!data_names) {
                    rows.push(
                        <div className={style["entry"]} key={i}>
                            <div
                                className={style["key"]}
                                style={{
                                    backgroundColor: color
                                }}>
                            </div>
                            <p>{data_names[i]}</p>
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

export default CategoricalLegend;
