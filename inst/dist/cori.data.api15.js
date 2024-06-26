import "./cori.data.api31.js";
import "./cori.data.api32.js";
import "./cori.data.api33.js";
import "./cori.data.api34.js";
import "./cori.data.api35.js";
import "./cori.data.api36.js";
import "./cori.data.api37.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import { toPng as c } from "./cori.data.api38.js";
import { chartStyle as r } from "./cori.data.api16.js";
import { format as l } from "./cori.data.api39.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
l(".1%");
function g(t) {
  return t.replace(/\s+/g, "_").toLowerCase();
}
const A = (t, e) => e === null ? "N/A" : l(t)(+e), C = (t) => t, b = (t) => {
  let e = 0;
  const i = 2;
  return t.selectAll(".y-axis g.tick").each(function() {
    const o = this.getBBox().width;
    o > e && (e = o + i);
  }), e;
}, w = (t) => {
  t.selectAll(".tick line").attr("stroke", r.tickLineColor), t.selectAll(".domain").attr("stroke", "#d0d2ce"), t.selectAll(".y-axis .tick line").style("opacity", r.yTickOpacity), t.selectAll(".gridline").style("opacity", r.gridLineOpacity), t.selectAll(".x-axis text").style("font-family", r.tickFontFamily).style("font-size", r.tickFontSize).style("color", r.tickFontColor);
}, L = (t, e) => {
  t.current !== null && c(
    t.current,
    {
      cacheBust: !0,
      style: {
        margin: "0px",
        backgroundColor: "white"
      }
    }
  ).then((i) => {
    const o = document.createElement("a");
    o.download = e, o.href = i, o.click();
  }).catch((i) => {
    console.log(i);
  });
};
export {
  w as applyCORIStyles,
  A as getLabel,
  b as getMaxYLabelWidth,
  C as renderVariable,
  L as saveChartAsPNG,
  g as toSnakeCase
};
//# sourceMappingURL=cori.data.api15.js.map
