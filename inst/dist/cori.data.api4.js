import { j as s } from "./cori.data.api9.js";
import l from "./cori.data.api22.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const d = ({ domain: o, range: t, element_name: c }) => {
  const r = [];
  if (o.length <= t.length) {
    for (let e = 0; e < o.length; ++e)
      if (typeof t[e] == "string") {
        const i = t[e];
        r.push(
          /* @__PURE__ */ s.jsxs("div", { className: l.entry, children: [
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: l.key,
                style: {
                  backgroundColor: i
                }
              }
            ),
            /* @__PURE__ */ s.jsx("p", { children: c })
          ] }, e)
        );
      }
  }
  return /* @__PURE__ */ s.jsx("div", { className: l["categorical-legend"], children: r });
};
export {
  d as default
};
//# sourceMappingURL=cori.data.api4.js.map
