import { map_agg as _, entries_agg as w, object_agg as p, array_agg as k } from "./cori.data.api35.js";
import z from "./cori.data.api296.js";
import A from "./cori.data.api397.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function x(t, u) {
  if (!t || !u)
    return t;
  const { keys: l, rows: m, size: i } = t, n = new Int32Array(i);
  u.scan((r) => n[l[r]] = 1);
  const e = n.reduce((r, g) => r + g, 0);
  if (e === i)
    return t;
  const s = Array(e);
  let o = 0;
  for (let r = 0; r < i; ++r)
    n[r] && (s[n[r] = o++] = m[r]);
  const c = new Uint32Array(l.length);
  return u.scan((r) => c[r] = n[l[r]]), { ...t, keys: c, rows: s, size: o };
}
function I(t, u, l, m) {
  const { keys: i, rows: n, size: e } = t;
  let s = n, o = e, c = null;
  if (l) {
    c = new Int32Array(e), u((a) => c[i[a]] = 1);
    const f = c.reduce((a, y) => a + y, 0);
    if (f !== e) {
      s = Array(f), o = 0;
      for (let a = 0; a < e; ++a)
        c[a] && (s[c[a] = o++] = n[a]);
    }
  }
  let r = -1;
  const g = new Uint32Array(m);
  return u(o !== e ? (f) => g[++r] = c[i[f]] : (f) => g[++r] = i[f]), { ...t, keys: g, rows: s, size: o };
}
function N(t, u, l, m) {
  const i = m === "map" || m === !0 ? _ : m === "entries" ? w : m === "object" ? p : z('groups option must be "map", "entries", or "object".'), { names: n } = t.groups(), e = A(t.columnNames(), "_");
  let s = t.select().reify(u).create({ data: { [e]: l } }).rollup({ [e]: k(e) });
  for (let o = n.length; --o >= 0; )
    s = s.groupby(n.slice(0, o)).rollup({ [e]: i(n[o], e) });
  return s.get(e);
}
export {
  N as nest,
  x as regroup,
  I as reindex
};
//# sourceMappingURL=cori.data.api304.js.map
