import { j as e } from "./cori.data.api9.js";
import n, { r as l } from "./cori.data.api10.js";
import j from "./cori.data.api25.js";
import C from "./cori.data.api4.js";
import { saveChartAsPNG as R } from "./cori.data.api15.js";
import a from "./cori.data.api14.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function v({ primary_geoid: o, metric: i, data: r, metadata: t, width: p, height: h }) {
  const u = !r.filter((s) => s.geoid === o && s.metric === i).every((s) => s.value === null), [x, N] = l.useState([]), [f, S] = l.useState([]);
  console.log("Is React.useRef instantiated?", {
    React: n,
    useRef: n.useRef
  });
  const c = n.useRef(null), d = n.useRef(null);
  l.useEffect(() => {
    d.current;
  }, [r, p, h, t]);
  const g = l.useCallback(() => {
    R(c, i + ".png");
  }, [c, i]);
  return /* @__PURE__ */ e.jsx("div", { className: a["chart-wrapper"], children: r.length > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { ref: c, className: a.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      u === !1 && /* @__PURE__ */ e.jsx("div", { className: a["no-data"], children: /* @__PURE__ */ e.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ e.jsx("h3", { children: t.title }),
      t.subtitle.length > 0 ? /* @__PURE__ */ e.jsx("p", { children: /* @__PURE__ */ e.jsx("em", { children: t.subtitle }) }) : /* @__PURE__ */ e.jsx(e.Fragment, {}),
      /* @__PURE__ */ e.jsx(C, { domain_names: x.map((s) => r.filter((m) => m.geoid === s).map((m) => m.name)[0]), domain: x, range: f }),
      /* @__PURE__ */ e.jsxs("svg", { ref: d, style: { width: "100%" }, children: [
        /* @__PURE__ */ e.jsx("g", { className: "x-axis" }),
        /* @__PURE__ */ e.jsx("g", { className: "y-axis" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: a.caption, children: t.caption })
    ] }),
    /* @__PURE__ */ e.jsx("button", { className: a["download-chart"], onClick: g, children: "Download image" })
  ] }) });
}
const L = (o) => /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(v, { ...o }) });
export {
  L as default
};
//# sourceMappingURL=cori.data.api7.js.map
