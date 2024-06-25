import s from "./cori.data.api338.js";
import m from "./cori.data.api358.js";
import u from "./cori.data.api315.js";
import c from "./cori.data.api319.js";
import l from "./cori.data.api316.js";
import p from "./cori.data.api344.js";
import d from "./cori.data.api362.js";
import g from "./cori.data.api510.js";
import x from "./cori.data.api335.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function j(i, e, f) {
  const r = /* @__PURE__ */ new Map();
  x(f).forEach((o, t) => {
    o = l(o) ? e.columnName(o) : o, d(o) ? r.set(t, m(o)) : c(o) || p(o) && o.expr ? r.set(t, o) : u(`Invalid ${i} key value: ${o + ""}`);
  });
  const n = s(r, { table: e, aggregate: !1, window: !1 });
  return g(n.exprs, !0);
}
export {
  j as default
};
//# sourceMappingURL=cori.data.api521.js.map
