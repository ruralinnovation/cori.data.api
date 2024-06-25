import React from 'react';
import style from "./styles/CategoricalLegend.module.css";

interface CategoricalLegendProps {
  domain: string[]; // Should be in the order of what appears top to bottom in the chart
  range: unknown[];
  element_name: string;
}

const CategoricalLegend: React.FC<CategoricalLegendProps> = ({ domain, range, element_name }) => {

	const rows = [];

  if (domain.length <= range.length) {

    for (let i = 0; i < domain.length; ++i) {

      if (typeof range[i] === "string") {

        const color: string = range[i] as string;
        rows.push(
          <div className={style["entry"]} key={i}>
            <div
              className={style["key"]}
              style={{
                backgroundColor: color
              }}>
            </div>
            <p>{element_name /*renderGEOID(domain[i])*/ }</p>
          </div>
        );

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