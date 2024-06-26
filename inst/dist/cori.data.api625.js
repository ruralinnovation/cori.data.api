import { reducers as w } from "./cori.data.api539.js";
import { hasAggregate as h, getWindow as O } from "./cori.data.api402.js";
import $ from "./cori.data.api628.js";
import x from "./cori.data.api494.js";
import A from "./cori.data.api653.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const E = (n) => (n.frame || [null, null]).map((e) => Number.isFinite(e) ? Math.abs(e) : null), S = (n) => !!n.peers;
function V(n) {
  const { id: e, name: a, fields: t = [], params: i = [] } = n, r = O(a).create(...i);
  return t.length && (r.get = t[0]), r.id = e, r;
}
function U(n, e, a, t = {}, i) {
  const r = n.data(), o = j(i, r), c = o.length, f = x(
    ["r", "d", "op"],
    "{" + $(e, (p, m) => `_${m}[r] = $${m}(r, d, op);`) + "}",
    e,
    a
  );
  n.partitions().forEach((p, m) => {
    const u = p.length, l = y(n, p);
    for (let s = 0; s < c; ++s)
      o[s].init(p, l, t, m);
    const g = (s) => t[s][m];
    for (let s = 0; s < u; ++s) {
      for (let d = 0; d < c; ++d)
        o[d].step(s);
      f(p[s], r, g);
    }
  });
}
function j(n, e) {
  const a = {};
  return n.forEach((t) => {
    const i = E(t), r = S(t), o = `${i},${r}`, { aggOps: c, winOps: f } = a[o] || (a[o] = {
      frame: i,
      peers: r,
      aggOps: [],
      winOps: []
    });
    h(t.name) ? c.push(t) : f.push(V(t));
  }), Object.values(a).map((t) => A(
    e,
    t.frame,
    t.peers,
    t.winOps,
    w(t.aggOps, t.frame[0] != null ? -1 : 1)
  ));
}
function y(n, e) {
  if (n.isOrdered()) {
    const a = n.comparator(), t = n.data(), i = e.length, r = new Uint32Array(i);
    for (let o = 1, c = 0; o < i; ++o)
      r[o] = a(e[o - 1], e[o], t) ? ++c : c;
    return r;
  } else
    return e;
}
export {
  U as window
};
//# sourceMappingURL=cori.data.api625.js.map
