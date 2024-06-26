import p from "./cori.data.api328.js";
import j from "./cori.data.api283.js";
import N from "./cori.data.api329.js";
import u from "./cori.data.api323.js";
import x from "./cori.data.api287.js";
import c from "./cori.data.api284.js";
import O from "./cori.data.api312.js";
import e from "./cori.data.api330.js";
import h from "./cori.data.api331.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(o, r, n = /* @__PURE__ */ new Map()) {
  return r = c(r) ? o.columnName(r) : r, e(r) ? n.set(r, r) : u(r) ? r.forEach((i) => f(o, i, n)) : x(r) ? f(o, r(o), n) : O(r) ? p(n, r) : j(`Invalid column selection: ${h(r)}`), n;
}
function t(o, r) {
  return o.toObject = r, o;
}
function s(o) {
  return u(o) ? o.map(s) : o && o.toObject ? o.toObject() : o;
}
function M() {
  return t(
    (o) => o.columnNames(),
    () => ({ all: [] })
  );
}
function $(...o) {
  return o = o.flat(), t(
    (r) => {
      const n = f(r, o);
      return r.columnNames((i) => !n.has(i));
    },
    () => ({ not: s(o) })
  );
}
function a(o, r) {
  return t(
    (n) => {
      let i = c(o) ? o : n.columnIndex(o), m = c(r) ? r : n.columnIndex(r);
      if (m < i) {
        const g = m;
        m = i, i = g;
      }
      return n.columnNames().slice(i, m + 1);
    },
    () => ({ range: [o, r] })
  );
}
function b(o) {
  return e(o) && (o = RegExp(N(o))), t(
    (r) => r.columnNames((n) => o.test(n)),
    () => ({ matches: [o.source, o.flags] })
  );
}
export {
  M as all,
  f as default,
  b as matches,
  $ as not,
  a as range
};
//# sourceMappingURL=cori.data.api298.js.map
