import m from "./cori.data.api289.js";
import n from "./cori.data.api309.js";
import c from "./cori.data.api281.js";
import u from "./cori.data.api311.js";
import l from "./cori.data.api266.js";
import p from "./cori.data.api267.js";
import d from "./cori.data.api295.js";
import h from "./cori.data.api313.js";
import v from "./cori.data.api270.js";
import w from "./cori.data.api286.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function M(t, i, s, e = { window: !1 }) {
  const o = /* @__PURE__ */ new Map(), f = (r) => {
    r = p(r) ? i.columnName(r) : r, h(r) ? o.set(r, n(r)) : v(r) ? c(i, r).forEach(f) : d(r) ? u(o, r) : l(`Invalid ${t} value: ${r + ""}`);
  };
  return w(s).forEach(f), e.preparse && e.preparse(o), m(o, { table: i, ...e });
}
export {
  M as default
};
//# sourceMappingURL=cori.data.api512.js.map
