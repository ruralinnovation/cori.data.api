import { window as d } from "./cori.data.api625.js";
import { aggregate as w } from "./cori.data.api539.js";
import { hasWindow as l } from "./cori.data.api402.js";
import h from "./cori.data.api287.js";
import O from "./cori.data.api282.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function y(t) {
  return l(t.name) || t.frame && (Number.isFinite(t.frame[0]) || Number.isFinite(t.frame[1]));
}
function W(t, { names: e, exprs: i, ops: c }, n = {}) {
  const r = t.totalRows(), f = h(n.drop ? null : t), u = e.map((s) => f.add(s, Array(r))), [p, o] = k(c), m = t.isGrouped() ? t.groups().size : 1, a = w(
    t,
    p,
    O(c.length, () => Array(m))
  );
  return o.length ? d(t, u, i, a, o) : x(t, u, i, a), t.create(f);
}
function k(t) {
  const e = [], i = [], c = t.length;
  for (let n = 0; n < c; ++n) {
    const r = t[n];
    r.id = n, (y(r) ? i : e).push(r);
  }
  return [e, i];
}
function x(t, e, i, c) {
  const n = t.mask(), r = t.data(), { keys: f } = t.groups() || {}, u = f ? (o, m) => c[o][f[m]] : (o) => c[o][0], p = e.length;
  for (let o = 0; o < p; ++o) {
    const m = i[o], a = e[o];
    if (n)
      for (let s = n.next(0); s >= 0; s = n.next(s + 1))
        a[s] = m(s, r, u);
    else {
      const s = t.totalRows();
      for (let g = 0; g < s; ++g)
        a[g] = m(g, r, u);
    }
  }
}
export {
  W as default
};
//# sourceMappingURL=cori.data.api520.js.map
