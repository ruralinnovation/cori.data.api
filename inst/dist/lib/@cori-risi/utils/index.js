/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import '../../../node_modules/arquero/src/op/op-api.js';
import '../../../node_modules/arquero/src/arrow/builder/util.js';
import '../../../node_modules/arquero/src/expression/parse-expression.js';
import '../../../node_modules/arquero/src/query/query.js';
import '../../../node_modules/arquero/src/query/verb.js';
import '../../../node_modules/arquero/src/table/index.js';
import '../../../node_modules/arquero/src/register.js';
import '../../../node_modules/node-fetch/lib/index.js';
import 'fs';
import '../../../node_modules/d3-transition/src/selection/index.js';
import '../../../node_modules/d3-zoom/src/transform.js';
import { toPng } from '../../../node_modules/html-to-image/es/index.js';
import { chartStyle } from './constants.js';
import { format } from '../../../node_modules/d3-format/src/defaultLocale.js';

format(".1%");
const getMaxYLabelWidth = (svg) => {
    let maxw = 0;
    const margin_buffer = 2;
    svg.selectAll('.y-axis g.tick').each(function () {
        const textWidth = this.getBBox().width;
        if (textWidth > maxw) {
            maxw = textWidth + margin_buffer;
        }
    });
    return maxw;
};
const applyCORIStyles = (svg) => {
    svg
        .selectAll('.tick line')
        .attr("stroke", chartStyle.tickLineColor);
    svg
        .selectAll(".domain")
        .attr("stroke", "#d0d2ce");
    svg
        .selectAll(".y-axis .tick line")
        .style("opacity", chartStyle.yTickOpacity);
    svg
        .selectAll(".gridline")
        .style("opacity", chartStyle.gridLineOpacity);
    svg
        .selectAll('.x-axis text')
        .style("font-family", chartStyle.tickFontFamily)
        .style("font-size", chartStyle.tickFontSize)
        .style("color", chartStyle.tickFontColor);
};
const getGEOIDColorRange = (geoid, i) => {
    const viable_colors = ["#FFE473", "#004A5A", "#00835D", "#E74F2A", "#234FBF", "#48336A"];
    if (i > 5) {
        throw new Error("Can only generate color scales for six or less values");
    }
    // National
    if (geoid === "00") {
        return "#E74F2A";
    }
    if (geoid === "COMPARISON") {
        return "#234FBF";
    }
    // Primary county
    if (geoid.length === 5) {
        return "#00835D";
    }
    // State
    if (geoid.length === 2) {
        return "#48336A";
    }
    return viable_colors[i];
};
const saveChartAsPNG = (ref, filename) => {
    if (ref.current === null) {
        return;
    }
    toPng(ref.current, {
        cacheBust: true,
        style: {
            margin: "0px",
            backgroundColor: "white"
        }
    })
        .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
    })
        .catch((err) => {
        console.log(err);
    });
};

export { applyCORIStyles, getGEOIDColorRange, getMaxYLabelWidth, saveChartAsPNG };
//# sourceMappingURL=index.js.map
