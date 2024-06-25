import l from "./cori.data.api300.js";
import m from "./cori.data.api492.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function d(o, t) {
  return l(t) ? t(o) : t || o.columnNames();
}
function h(o, t, r) {
  const f = r.format || {}, u = r.align || {}, i = {}, a = {};
  return t.forEach((n) => {
    const c = m(g(o, n), r);
    a[n] = u[n] || c.align, i[n] = f[n] || c.format;
  }), { align: a, format: i };
}
function g(o, t) {
  const r = o.column(t);
  return (f) => o.scan((u) => f(r.get(u)));
}
function F(o, t, r = 100, f, u) {
  const i = o.data(), a = t.length;
  o.scan((n) => {
    u.row(n);
    for (let c = 0; c < a; ++c) {
      const s = t[c];
      u.cell(i[t[c]].get(n), s, c);
    }
  }, !0, r, f);
}
export {
  d as columns,
  h as formats,
  F as scan
};
//# sourceMappingURL=cori.data.api401.js.map
