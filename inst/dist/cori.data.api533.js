import { aggregateGet as _ } from "./cori.data.api537.js";
import k from "./cori.data.api303.js";
import w from "./cori.data.api316.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function C(l, { names: u = [], exprs: A = [], ops: G = [] }, e = {}) {
  if (!u.length)
    return l;
  const p = e.limit > 0 ? +e.limit : 1 / 0, x = e.index ? e.index === !0 ? "index" : e.index + "" : null, y = new Set(e.drop), M = _(l, G, A), i = k(), I = new Set(u), d = [], g = [], a = [];
  l.columnNames().forEach((n) => {
    if (!y.has(n)) {
      const o = i.add(n, []);
      I.has(n) || (d.push(l.column(n)), g.push(o));
    }
  }), u.forEach((n) => {
    y.has(n) || (i.has(n) || i.add(n, []), a.push(i.data[n]));
  });
  const S = x ? i.add(x, []) : null;
  let c = 0;
  const N = d.length, j = a.length, E = (n, o) => {
    for (let t = 0; t < N; ++t)
      g[t].length = c + o, g[t].fill(d[t].get(n), c, c + o);
  }, v = S ? (n, o) => {
    for (let t = 0; t < o; ++t)
      S[n + t] = t;
  } : () => {
  };
  if (j === 1) {
    const n = M[0], o = a[0];
    l.scan((t, m) => {
      const r = w(n(t, m)), s = Math.min(r.length, p);
      E(t, s);
      for (let f = 0; f < s; ++f)
        o[c + f] = r[f];
      v(c, s), c += s;
    });
  } else
    l.scan((n, o) => {
      let t = 0;
      const m = M.map((r) => {
        const s = w(r(n, o));
        return t = Math.min(Math.max(t, s.length), p), s;
      });
      E(n, t);
      for (let r = 0; r < j; ++r) {
        const s = a[r], f = m[r];
        for (let h = 0; h < t; ++h)
          s[c + h] = f[h];
      }
      v(c, t), c += t;
    });
  return l.create(i.new());
}
export {
  C as default
};
//# sourceMappingURL=cori.data.api533.js.map
