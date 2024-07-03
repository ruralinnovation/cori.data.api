/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../../../node_modules/d3-transition/src/selection/index.js';
import '../../../node_modules/d3-zoom/src/transform.js';
import { d as d3TextwrapExports } from '../../../node_modules/d3-textwrap/build/d3-textwrap.js';
import CategoricalLegend from './CategoricalLegend.js';
import { getGEOIDColorRange, getMaxYLabelWidth, applyCORIStyles, saveChartAsPNG } from '../utils/index.js';
import { chartStyle } from '../utils/constants.js';
import style from './styles/Chart.module.css.js';
import linear from '../../../node_modules/d3-scale/src/linear.js';
import min from '../../../node_modules/d3-array/src/min.js';
import max from '../../../node_modules/d3-array/src/max.js';
import ordinal from '../../../node_modules/d3-scale/src/ordinal.js';
import group from '../../../node_modules/d3-array/src/group.js';
import select from '../../../node_modules/d3-selection/src/select.js';
import { axisBottom, axisLeft } from '../../../node_modules/d3-axis/src/axis.js';
import line from '../../../node_modules/d3-shape/src/line.js';

function LineChart({ primary_geoid, metric, data, metadata, width, height }) {
    const primary_dta = data.filter(d => d.geoid === primary_geoid && d.metric === metric);
    const has_valid_data = !primary_dta.every(d => d.value === null);
    const ref = useRef(null);
    const svgRef = useRef(null);
    const [colorScaleDomain, setColorScaleDomain] = useState([]);
    const [colorScaleRange, setColorScaleRange] = useState([]);
    useEffect(() => {
        if (!svgRef.current)
            return;
        const margin = Object.assign({}, chartStyle.margin);
        const tick_number = Math.floor(width / 225);
        const y_axis_tick_size = 8;
        const svg = select(svgRef.current)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet");
        const xScale = linear()
            .domain([min(data, (d) => (+d.year)), max(data, (d) => (+d.year))])
            .nice()
            .range([margin.left, width - margin.right]);
        const yScale = linear()
            .domain([
            max(data, (d) => d.value === null ? undefined : (+d.value)),
            min(data, (d) => d.value === null ? undefined : (+d.value))
        ])
            .nice()
            .range([margin.top, height - margin.bottom]);
        const max_year = max(data, (d) => +d.year);
        const sortedGEOIDs = [...data]
            .filter(d => +d.year === max_year)
            .sort((a, b) => {
            if (a.value === null && b.value === null)
                return 0;
            if (a.value === null)
                return 1; // Treat null values as greater (will move to end)
            if (b.value === null)
                return -1; // Treat null values as greater (will move to end)
            return +b.value - +a.value;
        });
        const geoid_domain = [...new Set(sortedGEOIDs.map(d => d.geoid.toString()))];
        const colorScale = ordinal()
            .domain(geoid_domain)
            .range(geoid_domain.map(getGEOIDColorRange));
        setColorScaleDomain(colorScale.domain());
        setColorScaleRange(colorScale.range());
        let xAxis = axisBottom(xScale); // later is reassigned
        const yAxis = axisLeft(yScale)
            .ticks(tick_number, metadata.yFormat)
            .tickSize(y_axis_tick_size);
        svg
            .select('.x-axis')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(xAxis);
        svg.select('.y-axis')
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
            // wrap the text
            const textwrap_dimensions = { height: 20, width: 200 };
            const y_wrap = d3TextwrapExports.textwrap().bounds(textwrap_dimensions);
            svg.selectAll(".y-axis text")
                .call(y_wrap)
                .call(g => g.selectAll('foreignObject')
                .style("transform", 'translate(-' + textwrap_dimensions.width + 'px, -' + .5 + 'rem)'));
            xScale.range([margin.left, width - margin.right]);
            xAxis = axisBottom(xScale)
                .tickSize(chartStyle.xTickSize)
                .ticks(tick_number, metadata.xFormat);
            svg
                .select('.x-axis')
                .attr('transform', `translate(0, ${height - margin.bottom})`)
                .call(xAxis);
            svg.select('.y-axis')
                .attr("transform", `translate(${margin.left},0)`);
        }
        else {
            margin.left = maxw + y_axis_tick_size;
            xScale.range([margin.left, width - margin.right]);
            xAxis = axisBottom(xScale)
                .tickSize(12)
                .ticks(tick_number, metadata.xFormat);
            svg
                .select('.x-axis')
                .attr('transform', `translate(0, ${height - margin.bottom})`)
                .call(xAxis);
            svg.select('.y-axis')
                .attr("transform", `translate(${margin.left},0)`);
        }
        // Group data by geoid
        const sortedData = [...data].sort((a, b) => a.year - b.year);
        const nestedData = group(sortedData, d => d.geoid);
        // Define line generator
        const line$1 = line()
            .defined(d => d.value !== null)
            .x(d => xScale(+d.year))
            .y(d => yScale(+d.value));
        // Add gridlines
        const GridLine = () => axisLeft(yScale);
        svg.selectAll(".grid").remove();
        svg
            .append("g")
            .attr("class", "grid")
            .call(GridLine().ticks(tick_number))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line")
            .attr("x1", margin.left)
            .attr("x2", width - margin.right));
        svg.selectAll(".data-lines").remove();
        nestedData.forEach((d) => {
            svg
                .append("path")
                .attr("class", "data-lines")
                .datum(d)
                .attr("fill", "none")
                .attr("stroke", function (d) {
                const line_color = colorScale(d[0].geoid);
                if (typeof line_color === "string")
                    return line_color;
                return "black";
            })
                .attr("stroke-width", chartStyle.strokeWidth)
                .attr("stroke-opacity", chartStyle.strokeOpacity)
                .attr("d", line$1);
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
    }, [data, width, height, metadata]);
    const onButtonClick = useCallback(() => {
        saveChartAsPNG(ref, metric + ".png");
    }, [ref, metric]);
    return (React.createElement("div", { className: style["chart-wrapper"] }, data.length > 0 && (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: ref, className: style["chart"], style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" } },
            has_valid_data === false && (React.createElement("div", { className: style["no-data"] },
                React.createElement("p", null, "Note: Chart data is not available for the selected primary county"))),
            React.createElement("h3", null, metadata.title),
            metadata.subtitle.length > 0 ? React.createElement("p", null,
                React.createElement("em", null, metadata.subtitle)) : React.createElement(React.Fragment, null),
            React.createElement(CategoricalLegend, { domain_names: colorScaleDomain.map(c => data.filter(d => d.geoid === c).map(d => d.name)[0]), domain: colorScaleDomain, range: colorScaleRange }),
            React.createElement("svg", { ref: svgRef, style: { width: "100%" } },
                React.createElement("g", { className: "x-axis" }),
                React.createElement("g", { className: "y-axis" })),
            React.createElement("p", { className: style['caption'] }, metadata["caption"])),
        React.createElement("button", { className: style["download-chart"], onClick: onButtonClick }, "Download image")))));
}

export { LineChart as default };
//# sourceMappingURL=LineChart.js.map
