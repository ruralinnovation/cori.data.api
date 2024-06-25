import { j as r } from "./cori.data.api9.js";
import { r as p } from "./cori.data.api10.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import E from "./cori.data.api13.js";
import M from "./cori.data.api4.js";
import h from "./cori.data.api14.js";
import { renderVariable as z, getMaxYLabelWidth as W, getLabel as G, applyCORIStyles as O, saveChartAsPNG as Y } from "./cori.data.api15.js";
import { chartStyle as o } from "./cori.data.api16.js";
import I from "./cori.data.api17.js";
import P from "./cori.data.api18.js";
import V from "./cori.data.api19.js";
import q from "./cori.data.api24.js";
import H from "./cori.data.api20.js";
import { axisBottom as C, axisLeft as J } from "./cori.data.api21.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function gt({ primary_geoid: N, metric: v, data: s, metadata: a, width: m }) {
  const L = !s.filter((e) => e.geoid === N && e.metric === v).every((e) => e.value === null), S = p.useRef(null), j = p.useRef(null), [F, R] = p.useState([]), [$, T] = p.useState([]), g = s.length * 45;
  p.useEffect(() => {
    if (!j.current)
      return;
    const e = { ...o.margin }, x = Math.floor(m / 225), u = a.groupVar !== void 0 ? a.groupVar : "year", k = [...new Set(s.map((t) => t[u].toString()))];
    u === "year" && k.sort((t, c) => t.localeCompare(c));
    const l = H(j.current).attr("viewBox", `0 0 ${m} ${g}`).attr("preserveAspectRatio", "xMidYMid meet"), D = m < 500 ? 1.3 : 1.1, n = I().domain([0, P(s, (t) => t.value === null ? void 0 : +t.value * D)]).nice().range([e.left, m - e.right]), f = V().domain(s.map((t) => a.yVar === "variable" ? z(t.variable) : t.name)).range([e.top, g - e.bottom]).padding(0.1), b = V().domain(k).range([0, f.bandwidth()]).padding(0), _ = q().domain(k).range(["#A3E2B5", "#00835D", "#26535C"]);
    R(_.domain()), T(_.range());
    let y = C(n).ticks(x, a.xFormat).tickSize(o.xTickSize);
    const w = J(f).tickSize(o.yTickSize);
    l.select(".x-axis").attr("transform", `translate(0, ${g - e.bottom})`).call(y), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(w).call((t) => t.select(".domain").remove()), l.selectAll(".y-axis text").style("font-family", o.tickFontFamily).style("font-size", o.tickFontSize).style("color", o.tickFontColor);
    const A = W(l);
    if (A > 200) {
      e.left = 200;
      const t = 2, c = E().bounds({ height: f.bandwidth(), width: e.left - o.yTickSize });
      l.selectAll(".y-axis text").call(c), l.selectAll("foreignObject").style(
        "transform",
        "translate(-" + (e.left - o.yTickSize - t) + "px, -" + f.bandwidth() / 2 + "px)"
      ).select("div").style("margin", 0).style("display", "flex").style("align-items", "center").style("justify-content", "end").style("height", "inherit"), n.range([e.left, m - e.right]), y = C(n).tickSize(o.xTickSize).ticks(x, a.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${g - e.bottom})`).call(y), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
    } else
      e.left = A, n.range([e.left, m - e.right]), y = C(n).ticks(x, a.xFormat).tickSize(o.xTickSize), l.select(".x-axis").attr("transform", `translate(0, ${g - e.bottom})`).call(y), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(w).call((t) => t.select(".domain").remove());
    l.selectAll(".bar").data(s).join("rect").attr("class", "bar").attr("x", n.range()[0]).attr("height", b.bandwidth()).attr("y", (t) => {
      const c = a.yVar === "variable" ? z(t.variable) : t.name;
      let i = f(c);
      const d = b(t[u].toString());
      return d !== void 0 && i !== void 0 && (i = i + d), i !== void 0 ? i : 0;
    }).attr("width", (t) => t.value === null ? 0 : n(+t.value) - n(0)).attr("fill", (t) => _(t[u].toString())), l.selectAll(".data-label").data(s).join("text").attr("class", "data-label").attr("x", (t) => t.value === null ? n.range()[0] : n(+t.value)).attr("y", (t) => {
      const c = a.yVar === "variable" ? z(t.variable) : t.name;
      let i = f(c);
      const d = b(t[u].toString());
      return d !== void 0 && i !== void 0 && (i = i + d + b.bandwidth() / 2), i !== void 0 ? i : 0;
    }).attr("dy", "0.35em").attr("dx", "0.35em").style("color", o.dataLabelFontColor).style("font-size", o.dataLabelFontSize).style("font-weight", o.dataLabelFontWeight).text((t) => G(a.dataLabelFormat, t.value)), l.call(O);
  }, [s, m, g, a]);
  const B = p.useCallback(() => {
    Y(S, v + ".png");
  }, [S, v]);
  return /* @__PURE__ */ r.jsx("div", { className: h["chart-wrapper"], children: s.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { ref: S, className: h.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      L === !1 && /* @__PURE__ */ r.jsx("div", { className: h["no-data"], children: /* @__PURE__ */ r.jsx("p", { children: "Note: Chart data is not available for the selected county" }) }),
      s.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("h3", { children: a.title }),
        a.subtitle.length > 0 ? /* @__PURE__ */ r.jsx("p", { children: /* @__PURE__ */ r.jsx("em", { children: a.subtitle }) }) : /* @__PURE__ */ r.jsx(r.Fragment, {}),
        /* @__PURE__ */ r.jsx(M, { domain_names: F.map((e) => s.filter((x) => x.geoid === e).map((x) => x.name)[0]), domain: F, range: $ }),
        /* @__PURE__ */ r.jsxs("svg", { ref: j, style: { width: "100%" }, children: [
          /* @__PURE__ */ r.jsx("g", { className: "x-axis" }),
          /* @__PURE__ */ r.jsx("g", { className: "y-axis" })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: h.caption, children: a.caption })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("button", { className: h["download-chart"], onClick: B, children: "Download image" })
  ] }) });
}
export {
  gt as default
};
//# sourceMappingURL=cori.data.api6.js.map
