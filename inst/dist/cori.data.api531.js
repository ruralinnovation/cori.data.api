import { aggregate as k, aggregateGet as N, groupOutput as S } from "./cori.data.api539.js";
import _ from "./cori.data.api287.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const y = (n, f) => n ?? f;
function A(n, f, s, l = {}) {
  const { keys: u, keyColumn: a } = h(n, f, l), i = y(l.valueSeparator, "_"), m = s.names.length > 1 ? (r, c) => c + i + u[r] : (r) => u[r], g = u.map(
    (r) => k(n, s.ops.map((c) => {
      if (c.name === "count") {
        const o = (t) => r === a[t] ? 1 : NaN;
        return o.toString = () => r + ":1", { ...c, name: "sum", fields: [o] };
      }
      const e = c.fields.map((o) => {
        const t = (p, d) => r === a[p] ? o(p, d) : NaN;
        return t.toString = () => r + ":" + o, t;
      });
      return { ...c, fields: e };
    }))
  );
  return n.create(j(s, m, n.groups(), g));
}
function h(n, f, s) {
  const l = s.limit > 0 ? +s.limit : 1 / 0, u = y(s.sort, !0), a = y(s.keySeparator, "_"), i = N(n, f.ops, f.exprs), m = i.length === 1 ? i[0] : (e, o) => i.map((t) => t(e, o)).join(a), g = Array(n.totalRows());
  n.scan((e, o) => g[e] = m(e, o));
  const r = k(
    n.ungroup(),
    [{
      id: 0,
      name: "array_agg_distinct",
      fields: [(e) => g[e]],
      params: []
    }]
  )[0][0], c = u ? r.sort() : r;
  return {
    keys: Number.isFinite(l) ? c.slice(0, l) : c,
    keyColumn: g
  };
}
function j({ names: n, exprs: f }, s, l, u) {
  const a = l ? l.size : 1, i = _(), m = u.length, g = n.length;
  let r;
  const c = (e, o) => r[e][o];
  l && S(i, l);
  for (let e = 0; e < g; ++e) {
    const o = f[e];
    if (o.field != null)
      for (let t = 0; t < m; ++t)
        i.add(s(t, n[e]), u[t][o.field]);
    else if (a > 1)
      for (let t = 0; t < m; ++t) {
        r = u[t];
        const p = i.add(s(t, n[e]), Array(a));
        for (let d = 0; d < a; ++d)
          p[d] = o(d, null, c);
      }
    else
      for (let t = 0; t < m; ++t)
        r = u[t], i.add(s(t, n[e]), [o(0, null, c)]);
  }
  return i.new();
}
export {
  A as default
};
//# sourceMappingURL=cori.data.api531.js.map
