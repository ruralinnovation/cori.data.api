import s from "./cori.data.api266.js";
import x from "./cori.data.api306.js";
import w from "./cori.data.api270.js";
import u from "./cori.data.api267.js";
import d from "./cori.data.api295.js";
import p from "./cori.data.api313.js";
import y from "./cori.data.api286.js";
import A from "./cori.data.api289.js";
import { toObject as I, isSelection as S } from "./cori.data.api299.js";
import { Column as f } from "./cori.data.api290.js";
import { TableRef as L, TableRefList as h, Options as J, Expr as C, ExprList as K, ExprNumber as N, ExprObject as R, JoinKeys as b, JoinValues as k, OrderbyKeys as V, SelectionList as D, Descending as F, Window as M, Selection as P } from "./cori.data.api298.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const W = {
  [C]: T,
  [K]: i,
  [N]: H,
  [R]: e,
  [b]: Q,
  [k]: U,
  [V]: i,
  [D]: B
};
function et(t, r, n) {
  return r === L ? a(t) : r === h ? t.map(a) : O(I(t), r, n);
}
function O(t, r, n) {
  return r === J ? t && q(t, n) : W[r](t);
}
function q(t, r = {}) {
  const n = {};
  for (const o in t) {
    const c = t[o];
    n[o] = r[o] ? O(c, r[o]) : c;
  }
  return n;
}
function z(t, r) {
  return A({ expr: t }, { ...r, ast: !0 }).exprs[0];
}
function m(t) {
  return { type: f, name: t };
}
function g(t) {
  return { type: f, index: t };
}
function e(t, r) {
  if (p(t))
    return z(t, r);
  if (t.expr) {
    let n;
    if (t.field === !0 ? n = m(t.expr) : t.func === !0 && (n = e(t.expr, r)), n)
      return t.desc && (n = { type: F, expr: n }), t.window && (n = { type: M, expr: n, ...t.window }), n;
  }
  return Object.keys(t).map((n) => ({
    ...e(t[n], r),
    as: n
  }));
}
function E(t) {
  const r = P;
  return t.all ? { type: r, operator: "all" } : t.not ? { type: r, operator: "not", arguments: i(t.not) } : t.range ? { type: r, operator: "range", arguments: i(t.range) } : t.matches ? { type: r, operator: "matches", arguments: t.matches } : s("Invalid input");
}
function B(t) {
  return y(t).map(G).flat();
}
function G(t) {
  return S(t) ? E(t) : u(t) ? g(t) : p(t) ? m(t) : d(t) ? Object.keys(t).map((r) => ({ type: f, name: r, as: t[r] })) : s("Invalid input");
}
function T(t) {
  return S(t) ? E(t) : u(t) ? g(t) : p(t) ? m(t) : d(t) ? e(t) : s("Invalid input");
}
function i(t) {
  return y(t).map(T).flat();
}
function H(t) {
  return u(t) ? t : e(t);
}
function Q(t) {
  return x(t) ? t.map(i) : e(t, { join: !0 });
}
function U(t) {
  return x(t) ? t.map(
    (r, n) => n < 2 ? i(r) : e(r, { join: !0 })
  ) : e(t, { join: !0 });
}
function a(t) {
  return t && w(t.toAST) ? t.toAST() : t;
}
export {
  et as default
};
//# sourceMappingURL=cori.data.api300.js.map
