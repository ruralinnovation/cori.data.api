import { j as r } from "./cori.data.api9.js";
import D, { r as g } from "./cori.data.api10.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import q from "./cori.data.api13.js";
import H, { CDAContext as J } from "./cori.data.api25.js";
import K from "./cori.data.api4.js";
import { getGEOIDColorRange as Q, getMaxYLabelWidth as U, applyCORIStyles as V, saveChartAsPNG as X } from "./cori.data.api15.js";
import { chartStyle as c } from "./cori.data.api16.js";
import y from "./cori.data.api14.js";
import F from "./cori.data.api17.js";
import N from "./cori.data.api26.js";
import R from "./cori.data.api18.js";
import Z from "./cori.data.api24.js";
import tt from "./cori.data.api27.js";
import et from "./cori.data.api20.js";
import { axisBottom as S, axisLeft as w } from "./cori.data.api21.js";
import rt from "./cori.data.api28.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function lt({ primary_geoid: h, metric: k, data: a, metadata: s, width: i, height: m }) {
  const p = g.useContext(J), z = !a.filter((e) => e.geoid === h && e.metric === k).every((e) => e.value === null), [_, W] = g.useState([]), [E, L] = g.useState([]);
  console.log("Is React.useRef instantiated?", {
    React: D,
    useRef: D.useRef
  });
  let u = null, f = null;
  g.useEffect(() => {
    if (console.log("Is contextWrapper instantiated?", {
      contextWrapper: p,
      useRef: p.useRef
    }), typeof p.useRef == "function" && (u === null && (u = p.useRef(null)), f === null && (f = p.useRef(null))), f !== null) {
      if (!f.current)
        return;
      const e = { ...c.margin }, n = Math.floor(i / 225), b = 8, l = et(f.current).attr("viewBox", `0 0 ${i} ${m}`).attr("preserveAspectRatio", "xMidYMid meet"), x = F().domain([N(a, (t) => +t.year), R(a, (t) => +t.year)]).nice().range([e.left, i - e.right]), j = F().domain([
        R(a, (t) => t.value === null ? void 0 : +t.value),
        N(a, (t) => t.value === null ? void 0 : +t.value)
      ]).nice().range([e.top, m - e.bottom]), O = R(a, (t) => +t.year), G = [...a].filter((t) => +t.year === O).sort((t, o) => t.value === null && o.value === null ? 0 : t.value === null ? 1 : o.value === null ? -1 : +o.value - +t.value), A = [...new Set(G.map((t) => t.geoid.toString()))], C = Z().domain(A).range(A.map(Q));
      W(C.domain()), L(C.range());
      let d = S(x);
      const M = w(j).ticks(n, s.yFormat).tickSize(b);
      l.select(".x-axis").attr("transform", `translate(0, ${m - e.bottom})`).call(d), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(M).call((t) => t.select(".domain").remove()), l.selectAll(".y-axis text").style("font-family", c.tickFontFamily).style("font-size", c.tickFontSize).style("color", c.tickFontColor);
      const $ = U(l);
      if ($ > 200) {
        const t = { height: 20, width: 200 }, o = q().bounds(t);
        l.selectAll(".y-axis text").call(o).call(
          (v) => v.selectAll("foreignObject").style("transform", "translate(-" + t.width + "px, -" + 0.5 + "rem)")
        ), x.range([e.left, i - e.right]), d = S(x).tickSize(c.xTickSize).ticks(n, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${m - e.bottom})`).call(d), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
      } else
        e.left = $ + b, x.range([e.left, i - e.right]), d = S(x).tickSize(12).ticks(n, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${m - e.bottom})`).call(d), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
      const B = [...a].sort((t, o) => t.year - o.year), Y = tt(B, (t) => t.geoid), P = rt().defined((t) => t.value !== null).x((t) => x(+t.year)).y((t) => j(+t.value)), T = () => w(j);
      l.selectAll(".grid").remove(), l.append("g").attr("class", "grid").call(T().ticks(n)).call((t) => t.select(".domain").remove()).call(
        (t) => t.selectAll(".tick line").attr("x1", e.left).attr("x2", i - e.right)
      ), l.selectAll(".data-lines").remove(), Y.forEach((t) => {
        l.append("path").attr("class", "data-lines").datum(t).attr("fill", "none").attr("stroke", function(o) {
          const v = C(o[0].geoid);
          return typeof v == "string" ? v : "black";
        }).attr("stroke-width", c.strokeWidth).attr("stroke-opacity", c.strokeOpacity).attr("d", P);
      }), l.call(V);
    }
  }, [a, i, m, s]);
  const I = g.useCallback(() => {
    u !== null && X(u, k + ".png");
  }, [k]);
  return /* @__PURE__ */ r.jsx("div", { className: y["chart-wrapper"], children: a.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { ref: u, className: y.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      z === !1 && /* @__PURE__ */ r.jsx("div", { className: y["no-data"], children: /* @__PURE__ */ r.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ r.jsx("h3", { children: s.title }),
      s.subtitle.length > 0 ? /* @__PURE__ */ r.jsx("p", { children: /* @__PURE__ */ r.jsx("em", { children: s.subtitle }) }) : /* @__PURE__ */ r.jsx(r.Fragment, {}),
      /* @__PURE__ */ r.jsx(K, { domain_names: _.map((e) => a.filter((n) => n.geoid === e).map((n) => n.name)[0]), domain: _, range: E }),
      /* @__PURE__ */ r.jsxs("svg", { ref: f, style: { width: "100%" }, children: [
        /* @__PURE__ */ r.jsx("g", { className: "x-axis" }),
        /* @__PURE__ */ r.jsx("g", { className: "y-axis" })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: y.caption, children: s.caption })
    ] }),
    /* @__PURE__ */ r.jsx("button", { className: y["download-chart"], onClick: I, children: "Download image" })
  ] }) });
}
const Rt = (h) => /* @__PURE__ */ r.jsx(H, { children: /* @__PURE__ */ r.jsx(lt, { ...h }) });
export {
  Rt as default
};
//# sourceMappingURL=cori.data.api7.js.map
