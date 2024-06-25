import { j as s } from "./cori.data.api9.js";
import l from "./cori.data.api22.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const d = ({ data_names: o, domain: r, range: t }) => {
  const i = [];
  if (r.length <= t.length) {
    for (let e = 0; e < r.length; ++e)
      if (typeof t[e] == "string") {
        const c = t[e];
        o && i.push(
          /* @__PURE__ */ s.jsxs("div", { className: l.entry, children: [
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: l.key,
                style: {
                  backgroundColor: c
                }
              }
            ),
            /* @__PURE__ */ s.jsx("p", { children: o[e] })
          ] }, e)
        );
      }
  }
  return /* @__PURE__ */ s.jsx("div", { className: l["categorical-legend"], children: i });
};
export {
  d as default
};
//# sourceMappingURL=cori.data.api4.js.map
