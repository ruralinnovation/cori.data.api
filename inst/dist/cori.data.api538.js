import { aggregateGet as h } from "./cori.data.api541.js";
import k from "./cori.data.api520.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function x(n, e) {
  return n.create({
    groups: m(n, e)
  });
}
function m(n, { names: e = [], exprs: u = [], ops: a = [] }) {
  const p = e.length;
  if (p === 0)
    return null;
  if (p === 1 && !n.isFiltered() && u[0].field) {
    const t = n.column(u[0].field);
    if (t.groups)
      return t.groups(e);
  }
  let s = h(n, a, u);
  const d = k(s), y = n.totalRows(), l = new Uint32Array(y), c = {}, i = [], f = n.data(), g = n.mask();
  if (g)
    for (let t = g.next(0); t >= 0; t = g.next(t + 1)) {
      const o = d(t, f) + "", r = c[o];
      l[t] = r ?? (c[o] = i.push(t) - 1);
    }
  else
    for (let t = 0; t < y; ++t) {
      const o = d(t, f) + "", r = c[o];
      l[t] = r ?? (c[o] = i.push(t) - 1);
    }
  return a.length || (s = s.map((t) => (o) => t(o, f))), { keys: l, get: s, names: e, rows: i, size: i.length };
}
export {
  x as default
};
//# sourceMappingURL=cori.data.api538.js.map
