import { j as r } from "./cori.data.api9.js";
import { r as x } from "./cori.data.api10.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import P from "./cori.data.api13.js";
import T from "./cori.data.api4.js";
import u from "./cori.data.api14.js";
import { getGEOIDColorRange as q, getMaxYLabelWidth as H, applyCORIStyles as J, saveChartAsPNG as K } from "./cori.data.api15.js";
import { chartStyle as c } from "./cori.data.api16.js";
import F from "./cori.data.api17.js";
import N from "./cori.data.api25.js";
import j from "./cori.data.api18.js";
import Q from "./cori.data.api24.js";
import U from "./cori.data.api26.js";
import V from "./cori.data.api20.js";
import { axisBottom as S, axisLeft as R } from "./cori.data.api21.js";
import X from "./cori.data.api27.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function yt({ primary_geoid: $, metric: g, data: a, metadata: s, width: i, height: m }) {
  const w = !a.filter((e) => e.geoid === $ && e.metric === g).every((e) => e.value === null), y = x.useRef(null), v = x.useRef(null), [_, z] = x.useState([]), [D, E] = x.useState([]);
  x.useEffect(() => {
    if (!v.current)
      return;
    const e = { ...c.margin }, n = Math.floor(i / 225), b = 8, l = V(v.current).attr("viewBox", `0 0 ${i} ${m}`).attr("preserveAspectRatio", "xMidYMid meet"), f = F().domain([N(a, (t) => +t.year), j(a, (t) => +t.year)]).nice().range([e.left, i - e.right]), h = F().domain([
      j(a, (t) => t.value === null ? void 0 : +t.value),
      N(a, (t) => t.value === null ? void 0 : +t.value)
    ]).nice().range([e.top, m - e.bottom]), O = j(a, (t) => +t.year), G = [...a].filter((t) => +t.year === O).sort((t, o) => t.value === null && o.value === null ? 0 : t.value === null ? 1 : o.value === null ? -1 : +o.value - +t.value), C = [...new Set(G.map((t) => t.geoid.toString()))], k = Q().domain(C).range(C.map(q));
    z(k.domain()), E(k.range());
    let p = S(f);
    const M = R(h).ticks(n, s.yFormat).tickSize(b);
    l.select(".x-axis").attr("transform", `translate(0, ${m - e.bottom})`).call(p), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(M).call((t) => t.select(".domain").remove()), l.selectAll(".y-axis text").style("font-family", c.tickFontFamily).style("font-size", c.tickFontSize).style("color", c.tickFontColor);
    const A = H(l);
    if (A > 200) {
      const t = { height: 20, width: 200 }, o = P().bounds(t);
      l.selectAll(".y-axis text").call(o).call(
        (d) => d.selectAll("foreignObject").style("transform", "translate(-" + t.width + "px, -" + 0.5 + "rem)")
      ), f.range([e.left, i - e.right]), p = S(f).tickSize(c.xTickSize).ticks(n, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${m - e.bottom})`).call(p), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
    } else
      e.left = A + b, f.range([e.left, i - e.right]), p = S(f).tickSize(12).ticks(n, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${m - e.bottom})`).call(p), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
    const B = [...a].sort((t, o) => t.year - o.year), I = U(B, (t) => t.geoid), W = X().defined((t) => t.value !== null).x((t) => f(+t.year)).y((t) => h(+t.value)), Y = () => R(h);
    l.selectAll(".grid").remove(), l.append("g").attr("class", "grid").call(Y().ticks(n)).call((t) => t.select(".domain").remove()).call(
      (t) => t.selectAll(".tick line").attr("x1", e.left).attr("x2", i - e.right)
    ), l.selectAll(".data-lines").remove(), I.forEach((t) => {
      l.append("path").attr("class", "data-lines").datum(t).attr("fill", "none").attr("stroke", function(o) {
        const d = k(o[0].geoid);
        return typeof d == "string" ? d : "black";
      }).attr("stroke-width", c.strokeWidth).attr("stroke-opacity", c.strokeOpacity).attr("d", W);
    }), l.call(J);
  }, [a, i, m, s]);
  const L = x.useCallback(() => {
    K(y, g + ".png");
  }, [y, g]);
  return /* @__PURE__ */ r.jsx("div", { className: u["chart-wrapper"], children: a.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { ref: y, className: u.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      w === !1 && /* @__PURE__ */ r.jsx("div", { className: u["no-data"], children: /* @__PURE__ */ r.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ r.jsx("h3", { children: s.title }),
      s.subtitle.length > 0 ? /* @__PURE__ */ r.jsx("p", { children: /* @__PURE__ */ r.jsx("em", { children: s.subtitle }) }) : /* @__PURE__ */ r.jsx(r.Fragment, {}),
      /* @__PURE__ */ r.jsx(T, { domain_names: _.map((e) => a.filter((n) => n.geoid === e).map((n) => n.name)[0]), domain: _, range: D }),
      /* @__PURE__ */ r.jsxs("svg", { ref: v, style: { width: "100%" }, children: [
        /* @__PURE__ */ r.jsx("g", { className: "x-axis" }),
        /* @__PURE__ */ r.jsx("g", { className: "y-axis" })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: u.caption, children: s.caption })
    ] }),
    /* @__PURE__ */ r.jsx("button", { className: u["download-chart"], onClick: L, children: "Download image" })
  ] }) });
}
export {
  yt as default
};
//# sourceMappingURL=cori.data.api7.js.map
