import { j as a } from "./cori.data.api9.js";
import i from "./cori.data.api3.js";
import r from "./cori.data.api6.js";
import d from "./cori.data.api7.js";
import { toSnakeCase as m } from "./cori.data.api15.js";
import { Markdown as e } from "./cori.data.api23.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function _(t) {
  return /* @__PURE__ */ a.jsxs("div", { className: "metric-section", id: m(t.metric), children: [
    /* @__PURE__ */ a.jsx("h2", { children: t.title }),
    /* @__PURE__ */ a.jsx("p", { children: /* @__PURE__ */ a.jsx("b", { children: t.subtitle }) }),
    /* @__PURE__ */ a.jsx(e, { children: t.primary_text }),
    t.chart_type === "bar" ? /* @__PURE__ */ a.jsx(
      i,
      {
        primary_geoid: t.primary_geoid,
        metric: t.metric,
        data: t.data,
        metadata: t.metadata,
        width: t.chart_width
      }
    ) : t.chart_type === "line" ? /* @__PURE__ */ a.jsx(
      d,
      {
        primary_geoid: t.primary_geoid,
        metric: t.metric,
        data: t.data,
        metadata: t.metadata,
        width: t.chart_width,
        height: 250
      }
    ) : t.chart_type === "grouped bar" ? /* @__PURE__ */ a.jsx(
      r,
      {
        primary_geoid: t.primary_geoid,
        metric: t.metric,
        data: t.data,
        metadata: t.metadata,
        width: t.chart_width
      }
    ) : /* @__PURE__ */ a.jsx(a.Fragment, {}),
    /* @__PURE__ */ a.jsx("p", { children: /* @__PURE__ */ a.jsx("b", { children: "How to interpret this chart" }) }),
    /* @__PURE__ */ a.jsx(e, { children: t.secondary_text })
  ] }, t.metric);
}
export {
  _ as default
};
//# sourceMappingURL=cori.data.api5.js.map
