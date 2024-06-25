import { j as r } from "./cori.data.api9.js";
import { r as f } from "./cori.data.api10.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import E from "./cori.data.api13.js";
import M from "./cori.data.api4.js";
import d from "./cori.data.api14.js";
import { renderVariable as z, getMaxYLabelWidth as W, getLabel as G, applyCORIStyles as O, saveChartAsPNG as Y } from "./cori.data.api15.js";
import { chartStyle as s } from "./cori.data.api16.js";
import I from "./cori.data.api17.js";
import P from "./cori.data.api18.js";
import A from "./cori.data.api19.js";
import q from "./cori.data.api24.js";
import H from "./cori.data.api20.js";
import { axisBottom as C, axisLeft as J } from "./cori.data.api21.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const gt = ({ primary_geoid: V, metric: b, data: i, metadata: a, width: m }) => {
  const N = !i.filter((e) => e.geoid === V && e.metric === b).every((e) => e.value === null), v = f.useRef(null), S = f.useRef(null), [L, R] = f.useState([]), [$, T] = f.useState([]), x = i.length * 45;
  f.useEffect(() => {
    if (!S.current)
      return;
    const e = { ...s.margin }, j = Math.floor(m / 225), p = a.groupVar !== void 0 ? a.groupVar : "year", k = [...new Set(i.map((t) => t[p].toString()))];
    p === "year" && k.sort((t, c) => t.localeCompare(c));
    const l = H(S.current).attr("viewBox", `0 0 ${m} ${x}`).attr("preserveAspectRatio", "xMidYMid meet"), D = m < 500 ? 1.3 : 1.1, n = I().domain([0, P(i, (t) => t.value === null ? void 0 : +t.value * D)]).nice().range([e.left, m - e.right]), g = A().domain(i.map((t) => a.yVar === "variable" ? z(t.variable) : t.name)).range([e.top, x - e.bottom]).padding(0.1), h = A().domain(k).range([0, g.bandwidth()]).padding(0), _ = q().domain(k).range(["#A3E2B5", "#00835D", "#26535C"]);
    R(_.domain()), T(_.range());
    let u = C(n).ticks(j, a.xFormat).tickSize(s.xTickSize);
    const F = J(g).tickSize(s.yTickSize);
    l.select(".x-axis").attr("transform", `translate(0, ${x - e.bottom})`).call(u), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(F).call((t) => t.select(".domain").remove()), l.selectAll(".y-axis text").style("font-family", s.tickFontFamily).style("font-size", s.tickFontSize).style("color", s.tickFontColor);
    const w = W(l);
    if (w > 200) {
      e.left = 200;
      const t = 2, c = E().bounds({ height: g.bandwidth(), width: e.left - s.yTickSize });
      l.selectAll(".y-axis text").call(c), l.selectAll("foreignObject").style(
        "transform",
        "translate(-" + (e.left - s.yTickSize - t) + "px, -" + g.bandwidth() / 2 + "px)"
      ).select("div").style("margin", 0).style("display", "flex").style("align-items", "center").style("justify-content", "end").style("height", "inherit"), n.range([e.left, m - e.right]), u = C(n).tickSize(s.xTickSize).ticks(j, a.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${x - e.bottom})`).call(u), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
    } else
      e.left = w, n.range([e.left, m - e.right]), u = C(n).ticks(j, a.xFormat).tickSize(s.xTickSize), l.select(".x-axis").attr("transform", `translate(0, ${x - e.bottom})`).call(u), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(F).call((t) => t.select(".domain").remove());
    l.selectAll(".bar").data(i).join("rect").attr("class", "bar").attr("x", n.range()[0]).attr("height", h.bandwidth()).attr("y", (t) => {
      const c = a.yVar === "variable" ? z(t.variable) : t.name;
      let o = g(c);
      const y = h(t[p].toString());
      return y !== void 0 && o !== void 0 && (o = o + y), o !== void 0 ? o : 0;
    }).attr("width", (t) => t.value === null ? 0 : n(+t.value) - n(0)).attr("fill", (t) => _(t[p].toString())), l.selectAll(".data-label").data(i).join("text").attr("class", "data-label").attr("x", (t) => t.value === null ? n.range()[0] : n(+t.value)).attr("y", (t) => {
      const c = a.yVar === "variable" ? z(t.variable) : t.name;
      let o = g(c);
      const y = h(t[p].toString());
      return y !== void 0 && o !== void 0 && (o = o + y + h.bandwidth() / 2), o !== void 0 ? o : 0;
    }).attr("dy", "0.35em").attr("dx", "0.35em").style("color", s.dataLabelFontColor).style("font-size", s.dataLabelFontSize).style("font-weight", s.dataLabelFontWeight).text((t) => G(a.dataLabelFormat, t.value)), l.call(O);
  }, [i, m, x, a]);
  const B = f.useCallback(() => {
    Y(v, b + ".png");
  }, [v, b]);
  return /* @__PURE__ */ r.jsx("div", { className: d["chart-wrapper"], children: i.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { ref: v, className: d.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      N === !1 && /* @__PURE__ */ r.jsx("div", { className: d["no-data"], children: /* @__PURE__ */ r.jsx("p", { children: "Note: Chart data is not available for the selected county" }) }),
      i.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("h3", { children: a.title }),
        a.subtitle.length > 0 ? /* @__PURE__ */ r.jsx("p", { children: /* @__PURE__ */ r.jsx("em", { children: a.subtitle }) }) : /* @__PURE__ */ r.jsx(r.Fragment, {}),
        /* @__PURE__ */ r.jsx(M, { data_names: i.map((e) => e.name), domain: L, range: $ }),
        /* @__PURE__ */ r.jsxs("svg", { ref: S, style: { width: "100%" }, children: [
          /* @__PURE__ */ r.jsx("g", { className: "x-axis" }),
          /* @__PURE__ */ r.jsx("g", { className: "y-axis" })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: d.caption, children: a.caption })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("button", { className: d["download-chart"], onClick: B, children: "Download image" })
  ] }) });
};
export {
  gt as default
};
//# sourceMappingURL=cori.data.api6.js.map
