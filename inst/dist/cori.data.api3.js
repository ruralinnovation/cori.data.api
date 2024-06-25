import { j as r } from "./cori.data.api9.js";
import { r as h } from "./cori.data.api10.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import A from "./cori.data.api13.js";
import y from "./cori.data.api14.js";
import { renderVariable as v, getMaxYLabelWidth as N, getLabel as C, applyCORIStyles as $, saveChartAsPNG as L } from "./cori.data.api15.js";
import { chartStyle as a } from "./cori.data.api16.js";
import R from "./cori.data.api17.js";
import T from "./cori.data.api18.js";
import B from "./cori.data.api19.js";
import M from "./cori.data.api20.js";
import { axisBottom as k, axisLeft as V } from "./cori.data.api21.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const tt = ({ primary_geoid: F, metric: p, data: n, metadata: s, width: o, element_name: d }) => {
  const S = !n.filter((t) => t.geoid === F && t.metric === p).every((t) => t.value === null), g = h.useRef(null), b = h.useRef(null), x = n.length * 70;
  h.useEffect(() => {
    if (!b.current)
      return;
    const t = { ...a.margin }, u = Math.floor(o / 225), l = M(b.current).attr("viewBox", `0 0 ${o} ${x}`).attr("preserveAspectRatio", "xMidYMid meet"), _ = o < 500 ? 1.3 : 1.1, i = R().domain([0, T(n, (e) => e.value === null ? void 0 : +e.value * _)]).nice().range([t.left, o - t.right]), c = B().domain(n.map((e) => s.yVar === "variable" ? v(e.variable) : d)).range([t.top, x - t.bottom]).padding(0.1);
    let f = k(i).ticks(u, s.xFormat).tickSize(a.xTickSize);
    const w = V(c).tickSize(a.yTickSize);
    l.select(".x-axis").attr("transform", `translate(0, ${x - t.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${t.left},0)`).call(w).call((e) => e.select(".domain").remove()), l.selectAll(".y-axis text").style("font-family", a.tickFontFamily).style("font-size", a.tickFontSize).style("color", a.tickFontColor);
    const j = N(l);
    if (j > 200) {
      t.left = 200;
      const e = 2, m = A().bounds({ height: c.bandwidth(), width: t.left - a.yTickSize });
      l.selectAll(".y-axis text").call(m), l.selectAll("foreignObject").style(
        "transform",
        "translate(-" + (t.left - a.yTickSize - e) + "px, -" + c.bandwidth() / 2 + "px)"
      ).select("div").style("margin", 0).style("display", "flex").style("align-items", "center").style("justify-content", "end").style("height", "inherit"), i.range([t.left, o - t.right]), f = k(i).tickSize(a.xTickSize).ticks(u, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${x - t.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${t.left},0)`);
    } else
      t.left = j, i.range([t.left, o - t.right]), f = k(i).tickSize(a.xTickSize).ticks(u, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${x - t.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${t.left},0)`);
    l.selectAll(".bar").data(n).join("rect").attr("class", "bar").attr("x", i.range()[0]).attr("height", c.bandwidth()).attr("y", (e) => {
      const m = s.yVar === "variable" ? v(e.variable) : d;
      return c(m) ?? 0;
    }).attr("width", (e) => e.value === null ? 0 : i(+e.value) - i(0)).attr("fill", a.defaultBarFill), l.selectAll(".data-label").data(n).join("text").attr("class", "data-label").attr("x", (e) => e.value === null ? i.range()[0] : i(+e.value)).attr("y", (e) => {
      const m = s.yVar === "variable" ? v(e.variable) : d;
      return c(m) + c.bandwidth() / 2;
    }).attr("dy", "0.35em").attr("dx", "0.35em").style("font-family", a.dataLabelFontFamily).style("font-size", a.dataLabelFontSize).style("font-weight", a.dataLabelFontWeight).text((e) => C(s.dataLabelFormat, e.value)), l.call($);
  }, [n, o, x, s]);
  const z = h.useCallback(() => {
    L(g, p + ".png");
  }, [g, p]);
  return /* @__PURE__ */ r.jsx("div", { className: y["chart-wrapper"], children: n.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { ref: g, className: y.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      S === !1 && /* @__PURE__ */ r.jsx("div", { className: y["no-data"], children: /* @__PURE__ */ r.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("h3", { children: s.title }),
        s.subtitle.length > 0 ? /* @__PURE__ */ r.jsx("p", { children: /* @__PURE__ */ r.jsx("em", { children: s.subtitle }) }) : /* @__PURE__ */ r.jsx(r.Fragment, {}),
        /* @__PURE__ */ r.jsxs("svg", { ref: b, style: { width: "100%" }, children: [
          /* @__PURE__ */ r.jsx("g", { className: "x-axis" }),
          /* @__PURE__ */ r.jsx("g", { className: "y-axis" })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: y.caption, children: s.caption })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("button", { className: y["download-chart"], onClick: z, children: "Download image" })
  ] }) });
};
export {
  tt as default
};
//# sourceMappingURL=cori.data.api3.js.map
