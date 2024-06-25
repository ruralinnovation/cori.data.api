import x from "./cori.data.api650.js";
import y from "./cori.data.api651.js";
import A from "./cori.data.api624.js";
import O from "./cori.data.api492.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const M = y(x);
function C(h, _, k, o, s) {
  let f, n, d, u, p;
  const w = (i) => n[i - 1] === n[i], v = o.length, z = s.length, $ = o.length ? O(
    ["w", "r", "k"],
    "{" + A(o, (i, e) => `r[_${e}.id][k]=_${e}.value(w,_${e}.get);`) + "}",
    o
  ) : () => {
  }, t = {
    i0: 0,
    i1: 0,
    index: 0,
    size: 0,
    peer: w,
    init(i, e, m, c) {
      t.index = t.i0 = t.i1 = 0, t.size = e.length, f = i, n = e, u = m, p = c, d = s ? s.map((r) => r.init()) : null;
      for (let r = 0; r < v; ++r)
        o[r].init();
      return t;
    },
    value(i, e) {
      return e(f[i], h);
    },
    step(i) {
      const [e, m] = _, c = t.size, r = t.i0, j = t.i1;
      t.i0 = e != null ? Math.max(0, i - Math.abs(e)) : 0, t.i1 = m != null ? Math.min(c, i + Math.abs(m) + 1) : c, t.index = i, k && (t.i0 > 0 && w(t.i0) && (t.i0 = M.left(n, n[t.i0])), t.i1 < c && w(t.i1) && (t.i1 = M.right(n, n[t.i1 - 1])));
      for (let a = 0; a < z; ++a) {
        const g = s[a], b = d[a];
        for (let l = r; l < t.i0; ++l)
          g.rem(b, f[l], h);
        for (let l = j; l < t.i1; ++l)
          g.add(b, f[l], h);
        g.write(b, u, p);
      }
      return $(t, u, p), u;
    }
  };
  return t;
}
export {
  C as default
};
//# sourceMappingURL=cori.data.api649.js.map
