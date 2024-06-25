import j from "./cori.data.api524.js";
import { inferKeys as u, keyPredicate as w } from "./cori.data.api525.js";
import d from "./cori.data.api521.js";
import p from "./cori.data.api319.js";
import { all as a, not as y } from "./cori.data.api311.js";
import _ from "./cori.data.api336.js";
import S from "./cori.data.api343.js";
import $ from "./cori.data.api316.js";
import E from "./cori.data.api344.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const k = { aggregate: !1, window: !1 }, A = { ...k, index: 1 };
function D(o, f, r, n, t = {}) {
  r = u(o, f, r);
  const m = { join: [o, f] };
  let e;
  if (_(r)) {
    const [i, c] = r.map($);
    e = w(o, f, i, c), n || (n = O(o, i, c, t));
  } else
    e = p({ on: r }, m).exprs[0], n || (n = [a(), a()]);
  return j(
    o,
    f,
    e,
    P(o, f, n, m, t && t.suffix),
    t
  );
}
function O(o, f, r, n) {
  const t = [];
  f.forEach((e, i) => S(e) && e === r[i] ? t.push(e) : 0);
  const m = y(t);
  if (n.left && n.right) {
    const e = new Set(t);
    return [
      o.columnNames().map((i) => {
        const c = `[${E(i)}]`;
        return e.has(i) ? { [i]: `(a, b) => a${c} == null ? b${c} : a${c}` } : i;
      }),
      m
    ];
  }
  return n.right ? [m, a()] : [a(), m];
}
function P(o, f, r, n, t = []) {
  if (_(r)) {
    let m, e, i, c = r.length;
    m = e = i = { names: [], exprs: [] }, c-- && (m = d("join", o, r[0], n)), c-- && (e = d("join", f, r[1], A)), c-- && (i = p(r[2], n));
    const s = /* @__PURE__ */ new Set(), x = new Set(m.names);
    return e.names.forEach((h) => {
      x.has(h) && s.add(h);
    }), s.size && (t[0] !== "" && g(m.names, s, t[0] || "_1"), t[1] !== "" && g(e.names, s, t[1] || "_2")), {
      names: m.names.concat(e.names, i.names),
      exprs: m.exprs.concat(e.exprs, i.exprs)
    };
  } else
    return p(r, n);
}
function g(o, f, r) {
  o.forEach((n, t) => f.has(n) ? o[t] = n + r : 0);
}
export {
  D as default
};
//# sourceMappingURL=cori.data.api437.js.map
