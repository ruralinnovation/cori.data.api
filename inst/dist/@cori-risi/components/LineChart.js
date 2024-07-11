/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import CategoricalLegend from './CategoricalLegend.js';
import style from './styles/Chart.module.css.js';

// TODO: Basically any thing with useRef<SVGSVGElement> is unusable atm
function LineChart({ primary_geoid, metric, data, metadata, width, height }) {
    const primary_dta = data.filter(d => d.geoid === primary_geoid && d.metric === metric);
    !primary_dta.every(d => d.value === null);
    const ref = useRef(null);
    const svgRef = useRef(null);
    const [colorScaleDomain, setColorScaleDomain] = useState([]);
    const [colorScaleRange, setColorScaleRange] = useState([]);
    // TODO: WHY DOES saveChartAsPNG and other utility functions BREAK the library build????
    useCallback(() => {
        console.log(`saveChartAsPNG(${ref}, ${metric + ".png"})`);
    }, [ref, metric]);
    useEffect(() => {
        if (!svgRef.current)
            return;
        // const svg = d3.select(svgRef.current)
        //   .attr("viewBox", `0 0 ${width} ${height}`)
        //   .attr("preserveAspectRatio", "xMidYMid meet");
        //
        // const xScale = d3
        //   .scaleLinear()
        //   .domain([d3.min(data, (d) => (+d.year))!, d3.max(data, (d) => (+d.year))! ])
        //   .nice()
        //   // .range([margin.left, width - margin.right]);
        //
        // const yScale = d3
        //   .scaleLinear()
        //   .domain([
        //     d3.max(data, (d) => d.value === null? undefined: (+d.value))!,
        //     d3.min(data, (d) => d.value === null? undefined: (+d.value))!
        //   ])
        //   .nice()
        //   // .range([margin.top, height - margin.bottom]);
        //
        // const max_year: number = d3.max(data, (d) => +d.year) as number;
        // const sortedGEOIDs = [...data]
        //   .filter(d => +d.year === max_year)
        //   .sort((a, b) => { // b.value - a.value
        //     if (a.value === null && b.value === null) return 0;
        //     if (a.value === null) return 1; // Treat null values as greater (will move to end)
        //     if (b.value === null) return -1; // Treat null values as greater (will move to end)
        //     return +b.value - +a.value;
        //   });
        //
        // const geoid_domain = [...new Set(sortedGEOIDs.map(d => d.geoid.toString()))];
        // const colorScale = d3.scaleOrdinal()
        //   .domain(geoid_domain)
        //   // .range(geoid_domain.map(getGEOIDColorRange));
        //
        // setColorScaleDomain(colorScale.domain());
        // setColorScaleRange(colorScale.range());
        //
        // let xAxis = d3.axisBottom<number>(xScale); // later is reassigned
        // const yAxis = d3.axisLeft<number>(yScale)
        //   .ticks(tick_number, metadata.yFormat)
        //   .tickSize(y_axis_tick_size);
        //
        // svg
        //   .select<SVGGElement>('.x-axis')
        //   // .attr('transform', `translate(0, ${height - margin.bottom})`)
        //   // .call(xAxis);
        //
        // svg.select<SVGGElement>('.y-axis')
        //   // .attr("transform", `translate(${margin.left},0)`)
        //   .call(yAxis)
        //   .call(g => g.select(".domain").remove());
        //
        // // style y-axis text before calculating widths
        // svg.selectAll(".y-axis text")
        //   // .style("font-family", chartStyle.tickFontFamily)
        //   // .style("font-size", chartStyle.tickFontSize)
        //   // .style("color", chartStyle.tickFontColor)
        //
        // // const maxw = getMaxYLabelWidth(svg);
        //
        // // // If we need to wrap labels
        // // if (maxw > 200) {
        // //
        // //   // wrap the text
        // //   const textwrap_dimensions = {height: 20, width: 200};
        // //   const y_wrap = d3textwrap.textwrap().bounds(textwrap_dimensions);
        // //   svg.selectAll(".y-axis text")
        // //     .call(y_wrap)
        // //     .call(g => g.selectAll('foreignObject')
        // //       .style("transform", 'translate(-' + textwrap_dimensions.width + 'px, -' + .5 + 'rem)')
        // //     );
        // //
        // //   xScale.range([margin.left, width - margin.right]);
        // //   xAxis = d3
        // //     .axisBottom<number>(xScale)
        // //     .tickSize(chartStyle.xTickSize)
        // //     .ticks(tick_number, metadata.xFormat);
        // //
        // //   svg
        // //     .select<SVGGElement>('.x-axis')
        // //     .attr('transform', `translate(0, ${height - margin.bottom})`)
        // //     .call(xAxis);
        // //
        // //   svg.select<SVGGElement>('.y-axis')
        // //     .attr("transform", `translate(${margin.left},0)`);
        // //
        // // }
        // // else {
        //
        //   // margin.left = maxw + y_axis_tick_size;
        //
        //   // xScale.range([margin.left, width - margin.right]);
        //   xAxis = d3
        //     .axisBottom<number>(xScale)
        //     .tickSize(12)
        //     .ticks(tick_number, metadata.xFormat);
        //
        //   svg
        //     .select<SVGGElement>('.x-axis')
        //     // .attr('transform', `translate(0, ${height - margin.bottom})`)
        //     .call(xAxis);
        //
        //   svg.select<SVGGElement>('.y-axis')
        //     // .attr("transform", `translate(${margin.left},0)`);
        //
        // // }
        //
        // // Group data by geoid
        // const sortedData = [...data].sort((a, b) => a.year - b.year);
        // const nestedData = d3.group(sortedData, d => d.geoid);
        //
        // // Define line generator
        // const line = d3.line<ERCData>()
        //   .defined(d => d.value !== null)
        //   .x(d => xScale(+d.year))
        //   .y(d => yScale(+d.value!));
        //
        // // Add gridlines
        // const GridLine = () => d3.axisLeft(yScale);
        // svg.selectAll(".grid").remove();
        // svg
        //   .append("g")
        //     .attr("class", "grid")
        //   .call(GridLine().ticks(tick_number))
        //   .call(g => g.select(".domain").remove())
        //   .call(g => g.selectAll(".tick line")
        //       // .attr("x1", margin.left)
        //       // .attr("x2", width - margin.right)
        //   );
        //
        // svg.selectAll(".data-lines").remove();
        // nestedData.forEach((d) => {
        //   svg
        //     .append("path")
        //     .attr("class", "data-lines")
        //     .datum(d)
        //     .attr("fill", "none")
        //     .attr("stroke", function(d) {
        //       const line_color: string | unknown = colorScale(d[0].geoid);
        //       if (typeof line_color === "string")
        //         return line_color;
        //
        //       return "black";
        //     })
        //     // .attr("stroke-width", chartStyle.strokeWidth)
        //     // .attr("stroke-opacity", chartStyle.strokeOpacity)
        //     .attr("d", line);
        // });
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
        // svg.call(applyCORIStyles);
    }, [data, width, height, metadata]);
    return (React.createElement("div", { className: style["chart-wrapper"] },
        React.createElement(CategoricalLegend, { domain_names: colorScaleDomain.map(c => data.filter(d => d.geoid === c).map(d => d.name)[0]), domain: colorScaleDomain, range: colorScaleRange })));
}

export { LineChart as default };
//# sourceMappingURL=LineChart.js.map
