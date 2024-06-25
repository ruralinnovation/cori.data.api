import { j as a } from "./cori.data.api9.js";
import { r as h } from "./cori.data.api10.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import w from "./cori.data.api13.js";
import y from "./cori.data.api14.js";
import { renderVariable as d, getMaxYLabelWidth as A, getLabel as N, applyCORIStyles as C, saveChartAsPNG as $ } from "./cori.data.api15.js";
import { chartStyle as r } from "./cori.data.api16.js";
import L from "./cori.data.api17.js";
import R from "./cori.data.api18.js";
import T from "./cori.data.api19.js";
import B from "./cori.data.api20.js";
import { axisBottom as v, axisLeft as M } from "./cori.data.api21.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const Z = ({ primary_geoid: j, metric: p, data: n, metadata: s, width: o }) => {
  const F = !n.filter((t) => t.geoid === j && t.metric === p).every((t) => t.value === null), g = h.useRef(null), b = h.useRef(null), m = n.length * 70;
  h.useEffect(() => {
    if (!b.current)
      return;
    const t = { ...r.margin }, u = Math.floor(o / 225), l = B(b.current).attr("viewBox", `0 0 ${o} ${m}`).attr("preserveAspectRatio", "xMidYMid meet"), _ = o < 500 ? 1.3 : 1.1, i = L().domain([0, R(n, (e) => e.value === null ? void 0 : +e.value * _)]).nice().range([t.left, o - t.right]), c = T().domain(n.map((e) => s.yVar === "variable" ? d(e.variable) : e.name)).range([t.top, m - t.bottom]).padding(0.1);
    let f = v(i).ticks(u, s.xFormat).tickSize(r.xTickSize);
    const z = M(c).tickSize(r.yTickSize);
    l.select(".x-axis").attr("transform", `translate(0, ${m - t.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${t.left},0)`).call(z).call((e) => e.select(".domain").remove()), l.selectAll(".y-axis text").style("font-family", r.tickFontFamily).style("font-size", r.tickFontSize).style("color", r.tickFontColor);
    const k = A(l);
    if (k > 200) {
      t.left = 200;
      const e = 2, x = w().bounds({ height: c.bandwidth(), width: t.left - r.yTickSize });
      l.selectAll(".y-axis text").call(x), l.selectAll("foreignObject").style(
        "transform",
        "translate(-" + (t.left - r.yTickSize - e) + "px, -" + c.bandwidth() / 2 + "px)"
      ).select("div").style("margin", 0).style("display", "flex").style("align-items", "center").style("justify-content", "end").style("height", "inherit"), i.range([t.left, o - t.right]), f = v(i).tickSize(r.xTickSize).ticks(u, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${m - t.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${t.left},0)`);
    } else
      t.left = k, i.range([t.left, o - t.right]), f = v(i).tickSize(r.xTickSize).ticks(u, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${m - t.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${t.left},0)`);
    l.selectAll(".bar").data(n).join("rect").attr("class", "bar").attr("x", i.range()[0]).attr("height", c.bandwidth()).attr("y", (e) => {
      const x = s.yVar === "variable" ? d(e.variable) : e.name;
      return c(x) ?? 0;
    }).attr("width", (e) => e.value === null ? 0 : i(+e.value) - i(0)).attr("fill", r.defaultBarFill), l.selectAll(".data-label").data(n).join("text").attr("class", "data-label").attr("x", (e) => e.value === null ? i.range()[0] : i(+e.value)).attr("y", (e) => {
      const x = s.yVar === "variable" ? d(e.variable) : e.name;
      return c(x) + c.bandwidth() / 2;
    }).attr("dy", "0.35em").attr("dx", "0.35em").style("font-family", r.dataLabelFontFamily).style("font-size", r.dataLabelFontSize).style("font-weight", r.dataLabelFontWeight).text((e) => N(s.dataLabelFormat, e.value)), l.call(C);
  }, [n, o, m, s]);
  const S = h.useCallback(() => {
    $(g, p + ".png");
  }, [g, p]);
  return /* @__PURE__ */ a.jsx("div", { className: y["chart-wrapper"], children: n.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { ref: g, className: y.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      F === !1 && /* @__PURE__ */ a.jsx("div", { className: y["no-data"], children: /* @__PURE__ */ a.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("h3", { children: s.title }),
        s.subtitle.length > 0 ? /* @__PURE__ */ a.jsx("p", { children: /* @__PURE__ */ a.jsx("em", { children: s.subtitle }) }) : /* @__PURE__ */ a.jsx(a.Fragment, {}),
        /* @__PURE__ */ a.jsxs("svg", { ref: b, style: { width: "100%" }, children: [
          /* @__PURE__ */ a.jsx("g", { className: "x-axis" }),
          /* @__PURE__ */ a.jsx("g", { className: "y-axis" })
        ] }),
        /* @__PURE__ */ a.jsx("p", { className: y.caption, children: s.caption })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("button", { className: y["download-chart"], onClick: S, children: "Download image" })
  ] }) });
};
export {
  Z as default
};
//# sourceMappingURL=cori.data.api3.js.map
