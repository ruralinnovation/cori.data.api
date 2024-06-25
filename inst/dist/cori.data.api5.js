import { j as e } from "./cori.data.api9.js";
import i from "./cori.data.api3.js";
import m from "./cori.data.api6.js";
import r from "./cori.data.api7.js";
import { toSnakeCase as d } from "./cori.data.api15.js";
import { Markdown as a } from "./cori.data.api23.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function j(t) {
  return /* @__PURE__ */ e.jsxs("div", { className: "metric-section", id: d(t.metric), children: [
    /* @__PURE__ */ e.jsx("h2", { children: t.title }),
    /* @__PURE__ */ e.jsx("p", { children: /* @__PURE__ */ e.jsx("b", { children: t.subtitle }) }),
    /* @__PURE__ */ e.jsx(a, { children: t.primary_text }),
    t.chart_type === "bar" ? /* @__PURE__ */ e.jsx(
      i,
      {
        primary_geoid: t.primary_geoid,
        metric: t.metric,
        data: t.data,
        metadata: t.metadata,
        width: t.chart_width,
        element_name: t.primary_element_name
      }
    ) : t.chart_type === "line" ? /* @__PURE__ */ e.jsx(
      r,
      {
        primary_geoid: t.primary_geoid,
        metric: t.metric,
        data: t.data,
        metadata: t.metadata,
        width: t.chart_width,
        height: 250,
        element_name: t.primary_element_name
      }
    ) : t.chart_type === "grouped bar" ? /* @__PURE__ */ e.jsx(
      m,
      {
        primary_geoid: t.primary_geoid,
        metric: t.metric,
        data: t.data,
        metadata: t.metadata,
        width: t.chart_width,
        element_name: t.primary_element_name
      }
    ) : /* @__PURE__ */ e.jsx(e.Fragment, {}),
    /* @__PURE__ */ e.jsx("p", { children: /* @__PURE__ */ e.jsx("b", { children: "How to interpret this chart" }) }),
    /* @__PURE__ */ e.jsx(a, { children: t.secondary_text })
  ] }, t.metric);
}
export {
  j as default
};
//# sourceMappingURL=cori.data.api5.js.map
