import React, {useCallback, useContext, useEffect, useState} from 'react';
import * as d3 from 'd3';
import * as d3textwrap from "d3-textwrap";

import CDAContextWrapper, { CDAContext } from "../contexts/CDAContextWrapper";
import CategoricalLegend from './CategoricalLegend';

import { ERCData, MetricMetadata } from '../interfaces';
import { applyCORIStyles, getMaxYLabelWidth, saveChartAsPNG, getGEOIDColorRange } from '../utils';
import { chartStyle } from '../utils/constants';

import styles from "./styles/Chart.module.css";

interface LineChartProps {
  primary_geoid: string,
  metric: string,
  data: ERCData[];
  metadata: MetricMetadata,
  width: number;
  height: number;
}

function LineChart ({ primary_geoid, metric, data, metadata, width, height }: LineChartProps): JSX.Element {

  const contextWrapper = useContext(CDAContext);

  const primary_dta = data.filter(d => d.geoid === primary_geoid && d.metric === metric);
  const has_valid_data = !primary_dta.every(d => d.value === null);

  const [ colorScaleDomain, setColorScaleDomain ] = useState<string[]>([]);
  const [ colorScaleRange, setColorScaleRange] = useState<unknown[]>([]);

  console.log("Is React.useRef instantiated?", {
    "React": React,
    "useRef": React.useRef
  });

  let ref: React.MutableRefObject<HTMLDivElement | null> | null = null;  // contextWrapper.useRef<HTMLDivElement | null>(null);
  let svgRef: React.MutableRefObject<SVGSVGElement | null> | null = null;// contextWrapper.useRef<SVGSVGElement | null>(null);

  useEffect(() => {

    console.log("Is contextWrapper instantiated?", {
      "contextWrapper": contextWrapper,
      "useRef": contextWrapper.useRef
    });

    if (typeof contextWrapper.useRef === "function") {
      if (ref === null) ref = contextWrapper.useRef<HTMLDivElement>(null);
      if (svgRef === null) svgRef = contextWrapper.useRef<SVGSVGElement>(null);
    }

    if (svgRef !== null) {
      if (!svgRef.current) return;

      const margin = {...chartStyle.margin};
      const tick_number = Math.floor(width / 225);
      const y_axis_tick_size = 8;

      const svg = d3.select(svgRef.current)
          .attr("viewBox", `0 0 ${width} ${height}`)
          .attr("preserveAspectRatio", "xMidYMid meet");

      const xScale = d3
          .scaleLinear()
          .domain([d3.min(data, (d) => (+d.year))!, d3.max(data, (d) => (+d.year))! ])
          .nice()
          .range([margin.left, width - margin.right]);

      const yScale = d3
          .scaleLinear()
          .domain([
            d3.max(data, (d) => d.value === null? undefined: (+d.value))!,
            d3.min(data, (d) => d.value === null? undefined: (+d.value))!
          ])
          .nice()
          .range([margin.top, height - margin.bottom]);

      const max_year: number = d3.max(data, (d) => +d.year) as number;
      const sortedGEOIDs = [...data]
          .filter(d => +d.year === max_year)
          .sort((a, b) => { // b.value - a.value
            if (a.value === null && b.value === null) return 0;
            if (a.value === null) return 1; // Treat null values as greater (will move to end)
            if (b.value === null) return -1; // Treat null values as greater (will move to end)
            return +b.value - +a.value;
          });

      const geoid_domain = [...new Set(sortedGEOIDs.map(d => d.geoid.toString()))];
      const colorScale = d3.scaleOrdinal()
          .domain(geoid_domain)
          .range(geoid_domain.map(getGEOIDColorRange));

      setColorScaleDomain(colorScale.domain());
      setColorScaleRange(colorScale.range());

      let xAxis = d3.axisBottom<number>(xScale); // later is reassigned
      const yAxis = d3.axisLeft<number>(yScale)
          .ticks(tick_number, metadata.yFormat)
          .tickSize(y_axis_tick_size);

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
          .style("color", chartStyle.tickFontColor)

      const maxw = getMaxYLabelWidth(svg);

      // If we need to wrap labels
      if (maxw > 200) {

        // wrap the text
        const textwrap_dimensions = {height: 20, width: 200};
        const y_wrap = d3textwrap.textwrap().bounds(textwrap_dimensions);
        svg.selectAll(".y-axis text")
            .call(y_wrap)
            .call(g => g.selectAll('foreignObject')
                .style("transform", 'translate(-' + textwrap_dimensions.width + 'px, -' + .5 + 'rem)')
            );

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

        margin.left = maxw + y_axis_tick_size;

        xScale.range([margin.left, width - margin.right]);
        xAxis = d3
            .axisBottom<number>(xScale)
            .tickSize(12)
            .ticks(tick_number, metadata.xFormat);

        svg
            .select<SVGGElement>('.x-axis')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(xAxis);

        svg.select<SVGGElement>('.y-axis')
            .attr("transform", `translate(${margin.left},0)`);

      }

      // Group data by geoid
      const sortedData = [...data].sort((a, b) => a.year - b.year);
      const nestedData = d3.group(sortedData, d => d.geoid);

      // Define line generator
      const line = d3.line<ERCData>()
          .defined(d => d.value !== null)
          .x(d => xScale(+d.year))
          .y(d => yScale(+d.value!));

      // Add gridlines
      const GridLine = () => d3.axisLeft(yScale);
      svg.selectAll(".grid").remove();
      svg
          .append("g")
          .attr("class", "grid")
          .call(GridLine().ticks(tick_number))
          .call(g => g.select(".domain").remove())
          .call(g => g.selectAll(".tick line")
              .attr("x1", margin.left)
              .attr("x2", width - margin.right)
          );

      svg.selectAll(".data-lines").remove();
      nestedData.forEach((d) => {
        svg
            .append("path")
            .attr("class", "data-lines")
            .datum(d)
            .attr("fill", "none")
            .attr("stroke", function(d) {
              const line_color: string | unknown = colorScale(d[0].geoid);
              if (typeof line_color === "string")
                return line_color;

              return "black";
            })
            .attr("stroke-width", chartStyle.strokeWidth)
            .attr("stroke-opacity", chartStyle.strokeOpacity)
            .attr("d", line);
      });

      // nestedData.forEach((d) => {
      //   svg
      //   .append("g")
      //   .selectAll("dot")
      //   .data(d)
      //   .enter()
      //   .append("circle")
      //     .attr("cx", function(d) { return xScale(+d.year) } )
      //     .attr("cy", function(d) { return yScale(+d.value) } )
      //     .attr("r", 5)
      //     .attr("fill", "#69b3a2")
      // });

      svg.call(applyCORIStyles);
    }

  }, [data, width, height, metadata]);

  const onButtonClick = useCallback(() => {
    if (ref !== null) {
      saveChartAsPNG(ref, metric + ".png");
    }
  }, [metric]);

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
                <h3>{metadata.title}</h3>
                {metadata.subtitle.length > 0? <p><em>{metadata.subtitle}</em></p>: <></>}
                <CategoricalLegend domain_names={colorScaleDomain.map(c => data.filter(d => d.geoid === c).map(d => d.name)[0])} domain={colorScaleDomain} range={colorScaleRange} />
                <svg ref={svgRef} style={{width: "100%"}}>
                  <g className="x-axis" />
                  <g className="y-axis" />
                </svg>
                <p className={styles['caption']}>{metadata["caption"]}</p>
              </div>
              <button className={styles["download-chart"]} onClick={onButtonClick}>Download image</button>
            </>
        )
        }
      </div>
  );
};

export default (props: LineChartProps) => (
    <CDAContextWrapper>
      <LineChart {...props} />
    </CDAContextWrapper>
);

// export default LineChart;
// export default wrapComponent(LineChart);