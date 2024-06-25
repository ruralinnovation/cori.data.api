import { j as e } from "./cori.data.api9.js";
import p, { r as n } from "./cori.data.api10.js";
import j from "./cori.data.api25.js";
import C from "./cori.data.api4.js";
import { saveChartAsPNG as v } from "./cori.data.api15.js";
import a from "./cori.data.api14.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function y({ primary_geoid: l, metric: o, data: t, metadata: r, width: d, height: h }) {
  const u = !t.filter((s) => s.geoid === l && s.metric === o).every((s) => s.value === null), [m, R] = n.useState([]), [f, S] = n.useState([]), i = p.useRef(null), x = p.useRef(null);
  n.useEffect(() => {
    x.current;
  }, [t, d, h, r]);
  const g = n.useCallback(() => {
    v(i, o + ".png");
  }, [i, o]);
  return /* @__PURE__ */ e.jsx("div", { className: a["chart-wrapper"], children: t.length > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { ref: i, className: a.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      u === !1 && /* @__PURE__ */ e.jsx("div", { className: a["no-data"], children: /* @__PURE__ */ e.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ e.jsx("h3", { children: r.title }),
      r.subtitle.length > 0 ? /* @__PURE__ */ e.jsx("p", { children: /* @__PURE__ */ e.jsx("em", { children: r.subtitle }) }) : /* @__PURE__ */ e.jsx(e.Fragment, {}),
      /* @__PURE__ */ e.jsx(C, { domain_names: m.map((s) => t.filter((c) => c.geoid === s).map((c) => c.name)[0]), domain: m, range: f }),
      /* @__PURE__ */ e.jsxs("svg", { ref: x, style: { width: "100%" }, children: [
        /* @__PURE__ */ e.jsx("g", { className: "x-axis" }),
        /* @__PURE__ */ e.jsx("g", { className: "y-axis" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: a.caption, children: r.caption })
    ] }),
    /* @__PURE__ */ e.jsx("button", { className: a["download-chart"], onClick: g, children: "Download image" })
  ] }) });
}
const L = (l) => /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(y, { ...l }) });
export {
  L as default
};
//# sourceMappingURL=cori.data.api7.js.map
