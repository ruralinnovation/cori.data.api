import React, { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';
import { ERCData, MetricMetadata } from '../interfaces';
import * as d3textwrap from "d3-textwrap";

import styles from "./styles/Chart.module.css";

import { renderVariable, getMaxYLabelWidth, applyCORIStyles, saveChartAsPNG, getLabel} from '../utils';
import { chartStyle } from '../utils/constants';

// import cori_logo from "../assets/Logo-Mark_CORI_Black.svg";

interface BarChartProps {
  primary_geoid: string;
  metric: string;
  data: ERCData[];
  metadata: MetricMetadata;
  width: number;
}

const BarChart: React.FC<BarChartProps> = ({ primary_geoid, metric, data, metadata, width}) => {

  const primary_dta = data.filter(d => d.geoid === primary_geoid && d.metric === metric);
  const has_valid_data = !primary_dta.every(d => d.value === null);

  const ref = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null);

  const bar_thickness = 70;
  const height = data.length * bar_thickness;


  useEffect(() => {

    if (!svgRef.current) return;

    // Need to do a copy instead of reference
    const margin = {...chartStyle.margin};
    const tick_number = Math.floor(width / 225);

    const svg = d3.select(svgRef.current)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    const xscale_ratio = width < 500? 1.3: 1.1;
    const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value === null? undefined: (+d.value * xscale_ratio))! ])
        .nice()
        .range([margin.left, width - margin.right]);

    const yScale = d3
        .scaleBand()
        .domain(data.map((d) => {

          if (metadata.yVar === "variable") {
            const variable_str: string = renderVariable(d.variable);
            return variable_str;
          }

          const geoid_str: string = d.name; // renderGEOID(d.geoid);
          return geoid_str;

        }))
        .range([margin.top, height - margin.bottom])
        .padding(0.1);


    let xAxis = d3.axisBottom<number>(xScale)
        .ticks(tick_number, metadata.xFormat)
        .tickSize(chartStyle.xTickSize);

    const yAxis = d3.axisLeft<string>(yScale)
        .tickSize(chartStyle.yTickSize);

    svg
        .select<SVGGElement>('.x-axis')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis);

    svg.select<SVGGElement>('.y-axis')
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove());

    // style y-axis text before calculating widths
    svg.selectAll(".y-axis text")
        .style("font-family", chartStyle.tickFontFamily)
        .style("font-size", chartStyle.tickFontSize)
        .style("color", chartStyle.tickFontColor);

    const maxw = getMaxYLabelWidth(svg);


    // If we need to wrap labels
    if (maxw > 200) {

      margin.left = 200;

      // wrap the text
      const text_buffer = 2;
      const y_wrap = d3textwrap.textwrap().bounds({height: yScale.bandwidth(), width: margin.left - chartStyle.yTickSize});
      svg.selectAll(".y-axis text")
          .call(y_wrap);
      svg.selectAll("foreignObject")
          .style(
              "transform",
              'translate(-' + (margin.left - chartStyle.yTickSize - text_buffer) + 'px, -' + yScale.bandwidth()/2 + 'px)'
          )
          .select("div")
          .style("margin", 0)
          .style("display", "flex")
          .style("align-items", "center")
          .style("justify-content", "end")
          .style("height", "inherit");

      xScale.range([margin.left, width - margin.right]);
      xAxis = d3
          .axisBottom<number>(xScale)
          .tickSize(chartStyle.xTickSize)
          .ticks(tick_number, metadata.xFormat);

      svg
          .select<SVGGElement>('.x-axis')
          .attr('transform', `translate(0, ${height - margin.bottom})`)
          .call(xAxis);

      svg.select<SVGGElement>('.y-axis')
          .attr("transform", `translate(${margin.left},0)`);

    }
    else {

      margin.left = maxw;

      xScale.range([margin.left, width - margin.right]);
      xAxis = d3
          .axisBottom<number>(xScale)
          .tickSize(chartStyle.xTickSize)
          .ticks(tick_number, metadata.xFormat);

      svg
          .select<SVGGElement>('.x-axis')
          .attr('transform', `translate(0, ${height - margin.bottom})`)
          .call(xAxis);

      svg.select<SVGGElement>('.y-axis')
          .attr("transform", `translate(${margin.left},0)`);

    }

    svg
        .selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', xScale.range()[0])
        .attr('height', yScale.bandwidth())
        .attr('y', (d) => {
          const y_var: string = metadata.yVar === "variable"? renderVariable(d.variable): d.name; // renderGEOID(d.geoid);
          return yScale(y_var) ?? 0;
        })
        .attr('width', (d) => d.value === null? 0: xScale(+d.value) -xScale(0))
        .attr('fill', chartStyle.defaultBarFill);

    // Data labels
    svg
        .selectAll(".data-label")
        .data(data)
        .join("text")
        .attr("class", "data-label")
        .attr("x", (d) => d.value === null? xScale.range()[0]: xScale(+d.value))
        // .attr("y", (d) => yScale(renderVariable(d.variable))! + yScale.bandwidth() / 2)
        .attr('y', (d) => {
          const y_var: string = metadata.yVar === "variable"? renderVariable(d.variable): d.name; // renderGEOID(d.geoid);
          return yScale(y_var)! + yScale.bandwidth() / 2;
        })
        .attr("dy", "0.35em") // Vertical alignment
        .attr("dx", "0.35em") // Horizontal alignment
        .style("font-family", chartStyle.dataLabelFontFamily)
        .style("font-size", chartStyle.dataLabelFontSize)
        .style("font-weight", chartStyle.dataLabelFontWeight)
        .text((d) => getLabel(metadata.dataLabelFormat, d.value));

    // Style the tick line colors
    svg.call(applyCORIStyles);

  }, [data, width, height, metadata]);

  const onButtonClick = useCallback(() => {
    saveChartAsPNG(ref, metric + ".png");
  }, [ref, metric])

  return (
      <div className={styles["chart-wrapper"]}>
        {data.length > 0 && (
            <>
              <div ref={ref} className={styles["chart"]} style={{maxWidth: "900px", margin: "0 auto", padding: "5px 20px"}}>
                {
                    has_valid_data === false && (
                        <div className={styles["no-data"]}>
                          <p>Note: Chart data is not available for the selected primary county</p>
                        </div>
                    )
                }
                <>
                  <h3>{metadata.title}</h3>
                  {metadata.subtitle.length > 0 ? (
                      <p><em>{metadata.subtitle}</em></p>
                  ) : (
                      <></>
                  )}
                  <svg ref={svgRef} style={{width: "100%"}}>
                    <g className="x-axis" />
                    <g className="y-axis" />
                  </svg>
                  <p className={styles['caption']}>{metadata["caption"]}</p>
                  {/* <img className={styles["cori-logo"]} width={50} height={50} src={cori_logo} alt="CORI logo"></img> */}
                </>
              </div>
              <button className={styles["download-chart"]} onClick={onButtonClick}>Download image</button>
            </>
        )}
      </div>
  );

};

export default BarChart;
