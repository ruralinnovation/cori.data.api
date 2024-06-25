import { aggregateGet as x } from "./cori.data.api542.js";
import E from "./cori.data.api303.js";
import z from "./cori.data.api411.js";
import k from "./cori.data.api522.js";
import _ from "./cori.data.api494.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function O(t, u, e, s) {
  const i = e && e.length;
  return $(
    i ? j(t, e, s) : t,
    u,
    i
  );
}
function $(t, { names: u, exprs: e, ops: s }, i) {
  const d = x(t, s, e), g = i ? null : E(t), m = t.totalRows();
  return u.forEach((p, f) => {
    const n = t.column(p), c = i ? n.data : g.add(p, Array(m)), l = d[f];
    t.scan((h) => {
      const o = n.get(h);
      c[h] = z(o) ? o : l(h);
    });
  }), i ? t : t.create(g);
}
function j(t, u, e) {
  const s = t.groups(), i = t.data(), d = (s ? s.names : []).concat(u), g = (s ? s.get : []).concat(u.map((o) => t.getter(o))), m = /* @__PURE__ */ new Set(), p = k(g);
  t.scan((o, r) => m.add(p(o, r)));
  const f = t.columnNames(), n = E(), c = f.map((o) => n.add(o, []));
  f.forEach((o, r) => {
    const a = i[o], y = c[r];
    t.scan((w) => y.push(a.get(w)));
  });
  const l = k(g.map((o, r) => (a) => a[r])), h = _(
    "v",
    "{" + c.map((o, r) => `_${r}.push(v[$${r}]);`).join("") + "}",
    c,
    f.map((o) => d.indexOf(o))
  );
  if (s) {
    let o = s.keys.length;
    const r = e.reduce((y, w) => y * w.length, s.size), a = new Uint32Array(r + (o - m.size));
    a.set(s.keys), A(s, e, (y, w) => {
      m.has(l(y)) || (h(y), a[o++] = w[0]);
    }), n.groupby({ ...s, keys: a });
  } else
    A(s, e, (o) => {
      m.has(l(o)) || h(o);
    });
  return t.create(n.new());
}
function A(t, u, e) {
  const s = t ? t.get.length : 0, i = t ? 1 : 0, d = i + u.length, g = new Int32Array(d), m = new Int32Array(d), p = [];
  if (t) {
    const { get: n, rows: c, size: l } = t;
    g[0] = l, p.push((h, o) => {
      const r = c[o];
      for (let a = 0; a < s; ++a)
        h[a] = n[a](r);
    });
  }
  u.forEach((n, c) => {
    const l = c + s;
    g[c + i] = n.length, p.push((h, o) => h[l] = n[o]);
  });
  const f = Array(s + u.length);
  for (let n = 0; n < d; ++n)
    p[n](f, 0);
  e(f, m);
  for (let n = d - 1; n >= 0; ) {
    const c = ++m[n];
    c < g[n] ? (p[n](f, c), e(f, m), n = d - 1) : (m[n] = 0, p[n](f, 0), --n);
  }
}
export {
  O as default
};
//# sourceMappingURL=cori.data.api527.js.map
