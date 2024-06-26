import { j as e } from "./cori.data.api9.js";
import o, { r as a } from "./cori.data.api10.js";
import j, { CDAContext as C } from "./cori.data.api25.js";
import R from "./cori.data.api4.js";
import { saveChartAsPNG as v } from "./cori.data.api15.js";
import r from "./cori.data.api14.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function y({ primary_geoid: l, metric: i, data: n, metadata: t, width: p, height: h }) {
  a.useContext(C);
  const u = !n.filter((s) => s.geoid === l && s.metric === i).every((s) => s.value === null), [x, S] = a.useState([]), [f, b] = a.useState([]);
  console.log("Is React.useRef instantiated?", {
    React: o,
    useRef: o.useRef
  });
  const c = o.useRef(null), d = o.useRef(null);
  a.useEffect(() => {
    d.current;
  }, [n, p, h, t]);
  const g = a.useCallback(() => {
    v(c, i + ".png");
  }, [c, i]);
  return /* @__PURE__ */ e.jsx("div", { className: r["chart-wrapper"], children: n.length > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { ref: c, className: r.chart, style: { maxWidth: "900px", margin: "0 auto", padding: "5px 20px" }, children: [
      u === !1 && /* @__PURE__ */ e.jsx("div", { className: r["no-data"], children: /* @__PURE__ */ e.jsx("p", { children: "Note: Chart data is not available for the selected primary county" }) }),
      /* @__PURE__ */ e.jsx("h3", { children: t.title }),
      t.subtitle.length > 0 ? /* @__PURE__ */ e.jsx("p", { children: /* @__PURE__ */ e.jsx("em", { children: t.subtitle }) }) : /* @__PURE__ */ e.jsx(e.Fragment, {}),
      /* @__PURE__ */ e.jsx(R, { domain_names: x.map((s) => n.filter((m) => m.geoid === s).map((m) => m.name)[0]), domain: x, range: f }),
      /* @__PURE__ */ e.jsxs("svg", { ref: d, style: { width: "100%" }, children: [
        /* @__PURE__ */ e.jsx("g", { className: "x-axis" }),
        /* @__PURE__ */ e.jsx("g", { className: "y-axis" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: r.caption, children: t.caption })
    ] }),
    /* @__PURE__ */ e.jsx("button", { className: r["download-chart"], onClick: g, children: "Download image" })
  ] }) });
}
const L = (l) => /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(y, { ...l }) });
export {
  L as default
};
//# sourceMappingURL=cori.data.api7.js.map
