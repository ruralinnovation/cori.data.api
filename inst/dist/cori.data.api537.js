import { indexLookup as J } from "./cori.data.api638.js";
import q from "./cori.data.api290.js";
import v from "./cori.data.api639.js";
import z from "./cori.data.api323.js";
import B from "./cori.data.api505.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function C(o, e) {
  const c = ["i", "a", "j", "b"];
  return B(
    c,
    "{" + v(o, (s, f) => `_${f}.push($${f}(${c}));`) + "}",
    o,
    e
  );
}
function O(o, e, c, { names: s, exprs: f }, g = {}) {
  const a = o.data(), h = o.indices(!1), m = h.length, p = new Int32Array(m), i = e.data(), r = e.indices(!1), n = r.length, l = new Int32Array(n), d = s.length, j = q(), S = Array(d), w = Array(d);
  for (let t = 0; t < s.length; ++t)
    S[t] = j.add(s[t], []), w[t] = f[t];
  const u = C(S, w);
  if ((z(c) ? E : D)(u, c, a, i, h, r, p, l, m, n), g.left)
    for (let t = 0; t < m; ++t)
      p[t] || u(h[t], a, -1, i);
  if (g.right)
    for (let t = 0; t < n; ++t)
      l[t] || u(-1, a, r[t], i);
  return o.create(j.new());
}
function D(o, e, c, s, f, g, a, h, m, p) {
  for (let i = 0; i < m; ++i) {
    const r = f[i];
    for (let n = 0; n < p; ++n) {
      const l = g[n];
      e(r, c, l, s) && (o(r, c, l, s), a[i] = 1, h[n] = 1);
    }
  }
}
function E(o, [e, c], s, f, g, a, h, m, p, i) {
  let r, n, l, d, j, S, w, u, H = o;
  p >= i ? (r = s, n = e, l = h, d = g, j = f, S = c, w = m, u = a) : (r = f, n = c, l = m, d = a, j = s, S = e, w = h, u = g, H = (y, x, A, $) => o(A, $, y, x));
  const t = J(u, j, S), I = d.length;
  for (let y = 0; y < I; ++y) {
    const x = d[y], A = t.get(n(x, r));
    if (A) {
      const $ = A.length;
      for (let _ = 0; _ < $; ++_) {
        const k = A[_];
        H(x, r, u[k], j), w[k] = 1;
      }
      l[y] = 1;
    }
  }
}
export {
  O as default
};
//# sourceMappingURL=cori.data.api537.js.map
