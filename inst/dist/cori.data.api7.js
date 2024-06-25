import { j as r } from "./cori.data.api9.js";
import { r as x } from "./cori.data.api10.js";
import "./cori.data.api11.js";
import "./cori.data.api12.js";
import T from "./cori.data.api13.js";
import q from "./cori.data.api4.js";
import p from "./cori.data.api14.js";
import { getGEOIDColorRange as H, getMaxYLabelWidth as J, applyCORIStyles as K, saveChartAsPNG as Q } from "./cori.data.api15.js";
import { chartStyle as i } from "./cori.data.api16.js";
import A from "./cori.data.api17.js";
import F from "./cori.data.api25.js";
import j from "./cori.data.api18.js";
import U from "./cori.data.api24.js";
import V from "./cori.data.api26.js";
import X from "./cori.data.api20.js";
import { axisBottom as S, axisLeft as N } from "./cori.data.api21.js";
import Z from "./cori.data.api27.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const vt = ({ primary_geoid: R, metric: g, data: a, metadata: s, width: n, height: c, element_name: $ }) => {
  const w = !a.filter((e) => e.geoid === R && e.metric === g).every((e) => e.value === null), y = x.useRef(null), v = x.useRef(null), [z, D] = x.useState([]), [E, L] = x.useState([]);
  x.useEffect(() => {
    if (!v.current)
      return;
    const e = { ...i.margin }, u = Math.floor(n / 225), _ = 8, l = X(v.current).attr("viewBox", `0 0 ${n} ${c}`).attr("preserveAspectRatio", "xMidYMid meet"), m = A().domain([F(a, (t) => +t.year), j(a, (t) => +t.year)]).nice().range([e.left, n - e.right]), h = A().domain([
      j(a, (t) => t.value === null ? void 0 : +t.value),
      F(a, (t) => t.value === null ? void 0 : +t.value)
    ]).nice().range([e.top, c - e.bottom]), G = j(a, (t) => +t.year), M = [...a].filter((t) => +t.year === G).sort((t, o) => t.value === null && o.value === null ? 0 : t.value === null ? 1 : o.value === null ? -1 : +o.value - +t.value), b = [...new Set(M.map((t) => t.geoid.toString()))], k = U().domain(b).range(b.map(H));
    D(k.domain()), L(k.range());
    let f = S(m);
    const B = N(h).ticks(u, s.yFormat).tickSize(_);
    l.select(".x-axis").attr("transform", `translate(0, ${c - e.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${e.left},0)`).call(B).call((t) => t.select(".domain").remove()), l.selectAll(".y-axis text").style("font-family", i.tickFontFamily).style("font-size", i.tickFontSize).style("color", i.tickFontColor);
    const C = J(l);
    if (C > 200) {
      const t = { height: 20, width: 200 }, o = T().bounds(t);
      l.selectAll(".y-axis text").call(o).call(
        (d) => d.selectAll("foreignObject").style("transform", "translate(-" + t.width + "px, -" + 0.5 + "rem)")
      ), m.range([e.left, n - e.right]), f = S(m).tickSize(i.xTickSize).ticks(u, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${c - e.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
    } else
      e.left = C + _, m.range([e.left, n - e.right]), f = S(m).tickSize(12).ticks(u, s.xFormat), l.select(".x-axis").attr("transform", `translate(0, ${c - e.bottom})`).call(f), l.select(".y-axis").attr("transform", `translate(${e.left},0)`);
    const I = [...a].sort((t, o) => t.year - o.year), W = V(I, (t) => t.geoid), Y = Z().defined((t) => t.value !== null).x((t) => m(+t.year)).y((t) => h(+t.value)), P = () => N(h);
    l.selectAll(".grid").remove(), l.append("g").attr("class", "grid").call(P().ticks(u)).call((t) => t.select(".domain").remove()).call(
      (t) => t.selectAll(".tick line").attr("x1", e.left).attr("x2", n - e.right)
    ), l.selectAll(".data-lines").remove(), W.forEach((t) => {
      l.append("path").attr("class", "data-lines").datum(t).attr("fill", "none").attr("stroke", function(o) {
        const d = k(o[0].geoid);
        return typeof d == "string" ? d : "black";
      }).attr("stroke-width", i.strokeWidth).attr("stroke-opacity", i.strokeOpacity).attr("d", Y);
    }), l.call(K);
  }, [a, n, c, s]);
  const O = x.useCallback(() => {
    Q(y, g + ".png");
  }, [y, g]);
  return /* @__PURE__ */ r.jsx("div", { className: p["chart-wrapper"], children: a.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { ref: y, className: p.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      w === !1 && /* @__PURE__ */ r.jsx("div", { className: p["no-data"], children: /* @__PURE__ */ r.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ r.jsx("h3", { children: s.title }),
      s.subtitle.length > 0 ? /* @__PURE__ */ r.jsx("p", { children: /* @__PURE__ */ r.jsx("em", { children: s.subtitle }) }) : /* @__PURE__ */ r.jsx(r.Fragment, {}),
      /* @__PURE__ */ r.jsx(q, { domain: z, range: E, element_name: $ }),
      /* @__PURE__ */ r.jsxs("svg", { ref: v, style: { width: "100%" }, children: [
        /* @__PURE__ */ r.jsx("g", { className: "x-axis" }),
        /* @__PURE__ */ r.jsx("g", { className: "y-axis" })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: p.caption, children: s.caption })
    ] }),
    /* @__PURE__ */ r.jsx("button", { className: p["download-chart"], onClick: O, children: "Download image" })
  ] }) });
};
export {
  vt as default
};
//# sourceMappingURL=cori.data.api7.js.map
