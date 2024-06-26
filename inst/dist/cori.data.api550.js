import u from "./cori.data.api643.js";
import l from "./cori.data.api285.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function w(n, c, i) {
  if (c.length) {
    const r = n.data(), { keys: f } = n.groups() || {}, e = g(n, c), t = f ? (o, s) => e[o][f[s]] : (o) => e[o][0];
    i = i.map((o) => (s) => o(s, r, t));
  }
  return i;
}
function g(n, c, i) {
  if (!c.length)
    return i;
  const r = p(c), f = n.groups(), e = f ? f.size : 1;
  return i = i || l(c.length, () => Array(e)), e > 1 ? r.forEach((t) => {
    const o = h(n, t, f);
    for (let s = 0; s < e; ++s)
      t.write(o[s], i, s);
  }) : r.forEach((t) => {
    const o = m(n, t);
    t.write(o, i, 0);
  }), i;
}
function p(n, c) {
  const i = [], r = {};
  for (const f of n) {
    const e = f.fields.map((t) => t + "").join(",");
    (r[e] || (r[e] = [])).push(f);
  }
  for (const f in r)
    i.push(u(r[f], c));
  return i;
}
function m(n, c) {
  const i = c.init(), r = n.totalRows(), f = n.data(), e = n.mask();
  if (n.isOrdered()) {
    const t = n.indices();
    for (let o = 0; o < r; ++o)
      c.add(i, t[o], f);
  } else if (e)
    for (let t = e.next(0); t >= 0; t = e.next(t + 1))
      c.add(i, t, f);
  else
    for (let t = 0; t < r; ++t)
      c.add(i, t, f);
  return i;
}
function h(n, c, i) {
  const { keys: r, size: f } = i, e = l(f, () => c.init()), t = n.data();
  if (n.isOrdered()) {
    const o = n.indices(), s = o.length;
    for (let a = 0; a < s; ++a) {
      const d = o[a];
      c.add(e[r[d]], d, t);
    }
  } else if (n.isFiltered()) {
    const o = n.mask();
    for (let s = o.next(0); s >= 0; s = o.next(s + 1))
      c.add(e[r[s]], s, t);
  } else {
    const o = n.totalRows();
    for (let s = 0; s < o; ++s)
      c.add(e[r[s]], s, t);
  }
  return e;
}
function y(n, c) {
  const { get: i, names: r, rows: f, size: e } = c, t = r.length;
  for (let o = 0; o < t; ++o) {
    const s = n.add(r[o], Array(e)), a = i[o];
    for (let d = 0; d < e; ++d)
      s[d] = a(f[d]);
  }
}
export {
  g as aggregate,
  w as aggregateGet,
  y as groupOutput,
  m as reduceFlat,
  h as reduceGroups,
  p as reducers
};
//# sourceMappingURL=cori.data.api550.js.map
