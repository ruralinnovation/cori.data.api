import { aggregateGet as w } from "./cori.data.api541.js";
import y from "./cori.data.api267.js";
import M from "./cori.data.api413.js";
import x from "./cori.data.api280.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function $(o, { names: c, exprs: f, ops: h = [] }, r = {}) {
  if (c.length === 0)
    return o;
  const s = c.length === 1 && r.as || [], m = r.drop == null ? !0 : !!r.drop, e = r.limit == null ? s.length || 1 / 0 : Math.max(1, +r.limit || 1), i = w(o, h, f), n = y(), u = c.reduce((t, a, d) => t.set(a, d), /* @__PURE__ */ new Map()), g = (t, a) => {
    const d = A(o, i[t], e), p = d.length;
    for (let l = 0; l < p; ++l)
      n.add(s[l] || `${a}_${l + 1}`, d[l]);
  };
  return o.columnNames().forEach((t) => {
    u.has(t) ? (m || n.add(t, o.column(t)), g(u.get(t), t), u.delete(t)) : n.add(t, o.column(t));
  }), u.forEach(g), o.create(n);
}
function A(o, c, f) {
  const h = o.totalRows(), r = [];
  return o.scan((s, m) => {
    const e = x(c(s, m)), i = Math.min(e.length, f);
    for (; r.length < i; )
      r.push(Array(h).fill(M));
    for (let n = 0; n < i; ++n)
      r[n][s] = e[n];
  }), r;
}
export {
  $ as default
};
//# sourceMappingURL=cori.data.api536.js.map
