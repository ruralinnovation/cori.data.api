import y from "./cori.data.api307.js";
import m from "./cori.data.api309.js";
import g from "./cori.data.api310.js";
import { all as j, range as O, matches as w, not as E } from "./cori.data.api281.js";
import S from "./cori.data.api33.js";
import p from "./cori.data.api266.js";
import n from "./cori.data.api306.js";
import f from "./cori.data.api270.js";
import u from "./cori.data.api267.js";
import c from "./cori.data.api295.js";
import h from "./cori.data.api313.js";
import b from "./cori.data.api284.js";
import d from "./cori.data.api286.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function K(t) {
  const o = (r) => r;
  return o.toString = () => t, o;
}
function G(t, o) {
  return o = o && f(o.query) ? o.query() : o, o && f(o.evaluate) ? o.evaluate(null, t) : t(o);
}
function H(t) {
  return c(t) && (n(t.all) || n(t.matches) || n(t.not) || n(t.range));
}
function e(t) {
  return t && f(t.toObject) ? t.toObject() : f(t) ? { expr: String(t), func: !0 } : n(t) ? t.map(e) : c(t) ? b(t, (o) => e(o)) : t;
}
function x(t) {
  return n(t) ? t.map(x) : c(t) ? n(t.verbs) ? S.from(t) : n(t.all) ? j() : n(t.range) ? O(...t.range) : n(t.match) ? w(RegExp(...t.match)) : n(t.not) ? E(t.not.map(e)) : q(t) : t;
}
function q(t) {
  let o = t, r = t.expr;
  if (r != null) {
    if (t.field === !0 ? o = r = m(r) : t.func === !0 && (o = r = K(r)), c(t.window)) {
      const { frame: i, peers: s } = t.window;
      o = r = g(r, i, s);
    }
    t.desc === !0 && (o = y(r));
  }
  return t === o ? b(t, (i) => x(i)) : o;
}
function L(t) {
  return n(t) ? t.map(A) : t;
}
function A(t) {
  const o = [];
  return d(t).forEach((r) => {
    u(r) ? o.push(r) : h(r) ? o.push(m(r, null)) : c(r) && r.expr || f(r) ? o.push(r) : p(`Invalid key value: ${r + ""}`);
  }), o;
}
function M(t) {
  return n(t) ? t.map(I) : t;
}
function I(t, o) {
  return o < 2 ? d(t) : t;
}
function P(t) {
  const o = [];
  return t.forEach((r) => {
    const i = r.expr != null ? r.expr : r;
    if (c(i) && !f(i))
      for (const s in i)
        o.push(i[s]);
    else
      r = u(i) ? i : h(i) ? m(r) : f(i) ? r : p(`Invalid orderby field: ${r + ""}`), o.push(r);
  }), o;
}
export {
  x as fromObject,
  G as getTable,
  H as isSelection,
  L as joinKeys,
  M as joinValues,
  P as orderbyKeys,
  e as toObject
};
//# sourceMappingURL=cori.data.api299.js.map
