import { groupOutput as p, aggregate as s } from "./cori.data.api540.js";
import a from "./cori.data.api280.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function j(t, { names: l, exprs: u, ops: f }) {
  const n = a(), e = t.groups();
  return e && p(n, e), h(l, u, e, s(t, f), n), t.create(n.new());
}
function h(t, l, u, f = [], n) {
  if (!l.length)
    return;
  const e = u ? u.size : 1, c = (o, r) => f[o][r], d = t.length;
  for (let o = 0; o < d; ++o) {
    const r = l[o];
    if (r.field != null)
      n.add(t[o], f[r.field]);
    else if (e > 1) {
      const g = n.add(t[o], Array(e));
      for (let i = 0; i < e; ++i)
        g[i] = r(i, null, c);
    } else
      n.add(t[o], [r(0, null, c)]);
  }
}
export {
  j as default
};
//# sourceMappingURL=cori.data.api526.js.map
