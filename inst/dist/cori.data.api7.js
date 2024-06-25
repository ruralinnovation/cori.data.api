import { j as e } from "./cori.data.api9.js";
import d, { r as l } from "./cori.data.api10.js";
import j from "./cori.data.api4.js";
import { saveChartAsPNG as v } from "./cori.data.api15.js";
import r from "./cori.data.api14.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function k({ primary_geoid: x, metric: n, data: t, metadata: a, width: p, height: h }) {
  const u = !t.filter((s) => s.geoid === x && s.metric === n).every((s) => s.value === null), o = d.useRef(null), c = d.useRef(null), [m, C] = l.useState([]), [f, N] = l.useState([]);
  l.useEffect(() => {
    c.current;
  }, [t, p, h, a]);
  const g = l.useCallback(() => {
    v(o, n + ".png");
  }, [o, n]);
  return /* @__PURE__ */ e.jsx("div", { className: r["chart-wrapper"], children: t.length > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { ref: o, className: r.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      u === !1 && /* @__PURE__ */ e.jsx("div", { className: r["no-data"], children: /* @__PURE__ */ e.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ e.jsx("h3", { children: a.title }),
      a.subtitle.length > 0 ? /* @__PURE__ */ e.jsx("p", { children: /* @__PURE__ */ e.jsx("em", { children: a.subtitle }) }) : /* @__PURE__ */ e.jsx(e.Fragment, {}),
      /* @__PURE__ */ e.jsx(j, { domain_names: m.map((s) => t.filter((i) => i.geoid === s).map((i) => i.name)[0]), domain: m, range: f }),
      /* @__PURE__ */ e.jsxs("svg", { ref: c, style: { width: "100%" }, children: [
        /* @__PURE__ */ e.jsx("g", { className: "x-axis" }),
        /* @__PURE__ */ e.jsx("g", { className: "y-axis" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: r.caption, children: a.caption })
    ] }),
    /* @__PURE__ */ e.jsx("button", { className: r["download-chart"], onClick: g, children: "Download image" })
  ] }) });
}
export {
  k as default
};
//# sourceMappingURL=cori.data.api7.js.map
