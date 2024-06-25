import "./cori.data.api33.js";
import "./cori.data.api34.js";
import "./cori.data.api35.js";
import "./cori.data.api36.js";
import "./cori.data.api37.js";
import "./cori.data.api38.js";
import "./cori.data.api39.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import { toPng as i } from "./cori.data.api40.js";
import { chartStyle as l } from "./cori.data.api16.js";
import { format as n } from "./cori.data.api41.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
n(".1%");
function F(t) {
  return t.replace(/\s+/g, "_").toLowerCase();
}
const d = (t, e) => e === null ? "N/A" : n(t)(+e), g = (t) => t, C = (t) => {
  let e = 0;
  const r = 2;
  return t.selectAll(".y-axis g.tick").each(function() {
    const o = this.getBBox().width;
    o > e && (e = o + r);
  }), e;
}, w = (t) => {
  t.selectAll(".tick line").attr("stroke", l.tickLineColor), t.selectAll(".domain").attr("stroke", "#d0d2ce"), t.selectAll(".y-axis .tick line").style("opacity", l.yTickOpacity), t.selectAll(".gridline").style("opacity", l.gridLineOpacity), t.selectAll(".x-axis text").style("font-family", l.tickFontFamily).style("font-size", l.tickFontSize).style("color", l.tickFontColor);
}, b = (t, e) => {
  const r = ["#FFE473", "#004A5A", "#00835D", "#E74F2A", "#234FBF", "#48336A"];
  if (e > 5)
    throw new Error("Can only generate color scales for six or less values");
  return t === "00" ? "#E74F2A" : t === "COMPARISON" ? "#234FBF" : t.length === 5 ? "#00835D" : t.length === 2 ? "#48336A" : r[e];
}, E = (t, e) => {
  t.current !== null && i(
    t.current,
    {
      cacheBust: !0,
      style: {
        margin: "0px",
        backgroundColor: "white"
      }
    }
  ).then((r) => {
    const o = document.createElement("a");
    o.download = e, o.href = r, o.click();
  }).catch((r) => {
    console.log(r);
  });
};
export {
  w as applyCORIStyles,
  b as getGEOIDColorRange,
  d as getLabel,
  C as getMaxYLabelWidth,
  g as renderVariable,
  E as saveChartAsPNG,
  F as toSnakeCase
};
//# sourceMappingURL=cori.data.api15.js.map
