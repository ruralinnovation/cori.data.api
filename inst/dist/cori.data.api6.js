import { j as r } from "./cori.data.api9.js";
import { r as f } from "./cori.data.api10.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import M from "./cori.data.api13.js";
import W from "./cori.data.api4.js";
import y from "./cori.data.api14.js";
import { renderVariable as F, getMaxYLabelWidth as G, getLabel as O, applyCORIStyles as Y, saveChartAsPNG as I } from "./cori.data.api15.js";
import { chartStyle as o } from "./cori.data.api16.js";
import P from "./cori.data.api17.js";
import q from "./cori.data.api18.js";
import V from "./cori.data.api19.js";
import H from "./cori.data.api24.js";
import J from "./cori.data.api20.js";
import { axisBottom as _, axisLeft as K } from "./cori.data.api21.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const ft = ({ primary_geoid: N, metric: v, data: i, metadata: a, width: m, element_name: h }) => {
  const L = !i.filter((e) => e.geoid === N && e.metric === v).every((e) => e.value === null), S = f.useRef(null), j = f.useRef(null), [R, $] = f.useState([]), [T, B] = f.useState([]), x = i.length * 45;
  f.useEffect(() => {
    if (!j.current)
      return;
    const e = { ...o.margin }, k = Math.floor(m / 225), p = a.groupVar !== void 0 ? a.groupVar : "year", z = [...new Set(i.map((t) => t[p].toString()))];
    p === "year" && z.sort((t, c) => t.localeCompare(c));
    const l = J(j.current).attr("viewBox", `0 0 ${m} ${x}`).attr("preserveAspectRatio", "xMidYMid meet"), E = m < 500 ? 1.3 : 1.1, n = P().domain([0, q(i, (t) => t.value === null ? void 0 : +t.value * E)]).nice().range([e.left, m - e.right]), g = V().domain(i.map((t) => a.yVar === "variable" ? F(t.variable) : h)).range([e.top, x - e.bottom]).padding(0.1), b = V().domain(z).range([0, g.bandwidth()]).padding(0), C = H().domain(z).range(["#A3E2B5", "#00835D", "#26535C"]);
    $(C.domain()), B(C.range());
    let u = _(n).ticks(k, a.xFormat).tickSize(o.xTickSize);
    const w = K(g).tickSize(o.yTickSize);
    l.select(".x-axis").attr("transform", `translate(0, ${x - e.bottom})`).call(u), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(w).call((t) => t.select(".domain").remove()), l.selectAll(".y-axis text").style("font-family", o.tickFontFamily).style("font-size", o.tickFontSize).style("color", o.tickFontColor);
    const A = G(l);
    if (A > 200) {
      e.left = 200;
      const t = 2, c = M().bounds({ height: g.bandwidth(), width: e.left - o.yTickSize });
      l.selectAll(".y-axis text").call(c), l.selectAll("foreignObject").style(
        "transform",
        "translate(-" + (e.left - o.yTickSize - t) + "px, -" + g.bandwidth() / 2 + "px)"
      ).select("div").style("margin", 0).style("display", "flex").style("align-items", "center").style("justify-content", "end").style("height", "inherit"), n.range([e.left, m - e.right]), u = _(n).tickSize(o.xTickSize).ticks(k, a.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${x - e.bottom})`).call(u), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
    } else
      e.left = A, n.range([e.left, m - e.right]), u = _(n).ticks(k, a.xFormat).tickSize(o.xTickSize), l.select(".x-axis").attr("transform", `translate(0, ${x - e.bottom})`).call(u), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(w).call((t) => t.select(".domain").remove());
    l.selectAll(".bar").data(i).join("rect").attr("class", "bar").attr("x", n.range()[0]).attr("height", b.bandwidth()).attr("y", (t) => {
      const c = a.yVar === "variable" ? F(t.variable) : h;
      let s = g(c);
      const d = b(t[p].toString());
      return d !== void 0 && s !== void 0 && (s = s + d), s !== void 0 ? s : 0;
    }).attr("width", (t) => t.value === null ? 0 : n(+t.value) - n(0)).attr("fill", (t) => C(t[p].toString())), l.selectAll(".data-label").data(i).join("text").attr("class", "data-label").attr("x", (t) => t.value === null ? n.range()[0] : n(+t.value)).attr("y", (t) => {
      const c = a.yVar === "variable" ? F(t.variable) : h;
      let s = g(c);
      const d = b(t[p].toString());
      return d !== void 0 && s !== void 0 && (s = s + d + b.bandwidth() / 2), s !== void 0 ? s : 0;
    }).attr("dy", "0.35em").attr("dx", "0.35em").style("color", o.dataLabelFontColor).style("font-size", o.dataLabelFontSize).style("font-weight", o.dataLabelFontWeight).text((t) => O(a.dataLabelFormat, t.value)), l.call(Y);
  }, [i, m, x, a]);
  const D = f.useCallback(() => {
    I(S, v + ".png");
  }, [S, v]);
  return /* @__PURE__ */ r.jsx("div", { className: y["chart-wrapper"], children: i.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { ref: S, className: y.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      L === !1 && /* @__PURE__ */ r.jsx("div", { className: y["no-data"], children: /* @__PURE__ */ r.jsx("p", { children: "Note: Chart data is not available for the selected county" }) }),
      i.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("h3", { children: a.title }),
        a.subtitle.length > 0 ? /* @__PURE__ */ r.jsx("p", { children: /* @__PURE__ */ r.jsx("em", { children: a.subtitle }) }) : /* @__PURE__ */ r.jsx(r.Fragment, {}),
        /* @__PURE__ */ r.jsx(W, { domain: R, range: T, element_name: h }),
        /* @__PURE__ */ r.jsxs("svg", { ref: j, style: { width: "100%" }, children: [
          /* @__PURE__ */ r.jsx("g", { className: "x-axis" }),
          /* @__PURE__ */ r.jsx("g", { className: "y-axis" })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: y.caption, children: a.caption })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("button", { className: y["download-chart"], onClick: D, children: "Download image" })
  ] }) });
};
export {
  ft as default
};
//# sourceMappingURL=cori.data.api6.js.map
