import { j as e } from "./cori.data.api9.js";
import { r as a } from "./cori.data.api10.js";
import g from "./cori.data.api4.js";
import { saveChartAsPNG as j } from "./cori.data.api15.js";
import t from "./cori.data.api14.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function w({ primary_geoid: d, metric: n, data: l, metadata: r, width: x, height: p }) {
  const h = !l.filter((s) => s.geoid === d && s.metric === n).every((s) => s.value === null), o = a.useRef(null), c = a.useRef(null), [m, y] = a.useState([]), [u, C] = a.useState([]);
  a.useEffect(() => {
    c.current;
  }, [l, x, p, r]);
  const f = a.useCallback(() => {
    j(o, n + ".png");
  }, [o, n]);
  return /* @__PURE__ */ e.jsx("div", { className: t["chart-wrapper"], children: l.length > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { ref: o, className: t.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      h === !1 && /* @__PURE__ */ e.jsx("div", { className: t["no-data"], children: /* @__PURE__ */ e.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ e.jsx("h3", { children: r.title }),
      r.subtitle.length > 0 ? /* @__PURE__ */ e.jsx("p", { children: /* @__PURE__ */ e.jsx("em", { children: r.subtitle }) }) : /* @__PURE__ */ e.jsx(e.Fragment, {}),
      /* @__PURE__ */ e.jsx(g, { domain_names: m.map((s) => l.filter((i) => i.geoid === s).map((i) => i.name)[0]), domain: m, range: u }),
      /* @__PURE__ */ e.jsxs("svg", { ref: c, style: { width: "100%" }, children: [
        /* @__PURE__ */ e.jsx("g", { className: "x-axis" }),
        /* @__PURE__ */ e.jsx("g", { className: "y-axis" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: t.caption, children: r.caption })
    ] }),
    /* @__PURE__ */ e.jsx("button", { className: t["download-chart"], onClick: f, children: "Download image" })
  ] }) });
}
export {
  w as default
};
//# sourceMappingURL=cori.data.api7.js.map
