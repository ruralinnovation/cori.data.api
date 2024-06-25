import { parse as k } from "./cori.data.api190.js";
import { Op as V, Identifier as u, Literal as I, Parameter as G, Constant as B, Function as J, ObjectPattern as T, MemberExpression as w, Property as q, ArrayPattern as Y } from "./cori.data.api137.js";
import { isFunctionExpression as z, is as l } from "./cori.data.api139.js";
import R from "./cori.data.api144.js";
import g from "./cori.data.api191.js";
import H from "./cori.data.api181.js";
import { ROW_OBJECT as d, rowObjectExpression as K } from "./cori.data.api122.js";
import { getAggregate as Q, getWindow as X, hasAggregate as Z, hasWindow as x, hasFunction as U } from "./cori.data.api192.js";
import ee from "./cori.data.api113.js";
import c from "./cori.data.api179.js";
import re from "./cori.data.api153.js";
import se from "./cori.data.api114.js";
import ne from "./cori.data.api161.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const oe = { ecmaVersion: 11 }, F = "$", ae = "d", ie = "d1", te = "d2", t = (e) => (r, s) => s.error(r, e + " not allowed"), le = t("Aggregate function"), pe = t("Window function"), fe = "Invalid argument", h = "Invalid column reference", ue = h + " (must be input to an aggregate function)", $ = "Invalid function call", me = "Invalid member expression", Re = "Invalid operator parameter", ce = "Invalid param reference", Ee = "Invalid variable reference", Oe = "Variable not accessible in operator call", Ae = "Unsupported variable declaration", _e = "Unsupported destructuring pattern", D = "Table expressions do not support closures", P = "Use aq.escape(fn) to use a function as-is (including closures)", ge = "use table.params({ name: value }) to define dynamic parameters", he = "use aq.addFunction(name, fn) to add new op functions", be = `
Note: ${D}. ${P}, or ${ge}.`, v = `
Note: ${D}. ${P}, or ${he}.`, ye = `The ${d} method is not valid in multi-table expressions.`;
function Ge(e, r) {
  const s = Fe(r);
  let n = e.root = s;
  return e.spec = r, e.tuple = null, e.tuple1 = null, e.tuple2 = null, e.$param = null, e.$op = 0, e.scope = /* @__PURE__ */ new Set(), e.paramsRef = /* @__PURE__ */ new Map(), e.columnRef = /* @__PURE__ */ new Map(), z(n) ? (Ie(n, e), n = n.body) : e.join ? (e.scope.add(e.tuple1 = ie), e.scope.add(e.tuple2 = te), e.scope.add(e.$param = F)) : (e.scope.add(e.tuple = ae), e.scope.add(e.$param = F)), R(n, e, b), e.root;
}
function Fe(e) {
  try {
    const r = e.field ? Ne(e) : re(e) ? ne(e) : e;
    return k(`expr=(${r})`, oe).body[0].expression.right;
  } catch {
    ee(`Expression parse error: ${e + ""}`);
  }
}
function Ne(e) {
  const r = JSON.stringify(e + "");
  return e.table ? `(a,b)=>b[${r}]` : `d=>d[${r}]`;
}
const b = {
  FunctionDeclaration: t("Function definitions"),
  ForStatement: t("For loops"),
  ForOfStatement: t("For-of loops"),
  ForInStatement: t("For-in loops"),
  WhileStatement: t("While loops"),
  DoWhileStatement: t("Do-while loops"),
  AwaitExpression: t("Await expressions"),
  ArrowFunctionExpression: t("Function definitions"),
  AssignmentExpression: t("Assignments"),
  FunctionExpression: t("Function definitions"),
  NewExpression: t('Use of "new"'),
  UpdateExpression: t("Update expressions"),
  VariableDeclarator(e, r) {
    _(e.id, r);
  },
  Identifier(e, r, s) {
    L(e, r, s) && !r.scope.has(e.name) && r.error(e, Ee, be);
  },
  CallExpression(e, r) {
    const s = C(e.callee), n = Q(s) || X(s);
    if (n) {
      if ((r.join || r.aggregate === !1) && Z(s) && le(e, r), (r.join || r.window === !1) && x(s) && pe(e, r), r.$op = 1, r.ast)
        A(e, s, r), e.arguments.forEach((a) => R(a, r, O));
      else {
        const a = r.op(Te(r, n, s, e.arguments));
        Object.assign(e, { type: V, name: a.id });
      }
      return r.$op = 0, !1;
    } else
      U(s) ? A(e, s, r) : r.error(e, $, v);
  },
  MemberExpression(e, r, s) {
    const { object: n, property: a } = e;
    if (!l(u, n))
      return;
    const { name: o } = n;
    if (M(e) && l(u, a) && c(g, a.name)) {
      W(e, a.name);
      return;
    }
    const i = o === r.tuple ? 0 : o === r.tuple1 ? 1 : o === r.tuple2 ? 2 : -1;
    if (i >= 0)
      return N(e, i, r, S, s);
    if (o === r.$param)
      return N(e, i, r, de);
    r.paramsRef.has(o) ? E(e, r.paramsRef.get(o)) : r.columnRef.has(o) ? j(n, o, r, e) : c(r.params, o) && E(n, o);
  }
};
function N(e, r, s, n, a) {
  const { property: o, computed: i } = e;
  let p;
  if (!i)
    p = o.name;
  else if (l(I, o))
    p = o.value;
  else
    try {
      R(o, s, b, e), p = s.param(o);
    } catch {
      s.error(e, me);
    }
  return n(e, p, r, s, a), !1;
}
const O = {
  ...b,
  VariableDeclarator: t("Variable declaration in operator call"),
  Identifier(e, r, s) {
    L(e, r, s) && r.error(e, Oe);
  },
  CallExpression(e, r) {
    const s = C(e.callee);
    U(s) ? A(e, s, r) : r.error(e, $, v);
  }
};
function Ie(e, r) {
  e.generator && t("Generator functions")(e, r), e.async && t("Async functions")(e, r);
  const { params: s } = e, n = s.length, a = (i) => (p, f) => r.columnRef.set(p, [f, i]), o = (i, p) => r.paramsRef.set(i, p);
  n && (r.join ? (m(r, s[0], "tuple1", a(1)), n > 1 && m(r, s[1], "tuple2", a(2)), n > 2 && m(r, s[2], "$param", o)) : (m(r, s[0], "tuple", a(0)), n > 1 && m(r, s[1], "$param", o))), r.root = e.body;
}
function m(e, r, s, n) {
  l(u, r) ? (e.scope.add(r.name), e[s] = r.name) : l(T, r) && r.properties.forEach((a) => {
    const o = l(u, a.key) ? a.key.name : l(I, a.key) ? a.key.value : e.error(a, fe);
    l(u, a.value) || e.error(a.value, _e), n(a.value.name, o);
  });
}
function Te(e, r, s, n) {
  const a = [], o = [], i = r.param[0] || 0, p = i + (r.param[1] || 0);
  return n.forEach((f, y) => {
    y < i ? (R(f, e, O), a.push(e.field(f))) : y < p ? (R(f, e, O), o.push(e.param(f))) : e.error(f, Re);
  }), { name: s, fields: a, params: o, ...e.spec.window || {} };
}
function C(e) {
  return l(u, e) ? e.name : l(w, e) ? M(e) ? we(e.property.name) : e.property.name : null;
}
function M(e) {
  return l(u, e.object) && e.object.name === "Math";
}
function we(e) {
  return e === "max" ? "greatest" : e === "min" ? "least" : e;
}
function L(e, r, s) {
  const { name: n } = e;
  if (!(l(w, s) && s.property === e)) {
    if (!(l(q, s) && s.key === e))
      if (r.paramsRef.has(n))
        E(e, r.paramsRef.get(n));
      else if (r.columnRef.has(n))
        j(e, n, r, s);
      else if (c(r.params, n))
        E(e, n);
      else if (c(g, n))
        W(e, n);
      else
        return !0;
  }
}
function S(e, r, s, n, a) {
  const o = s === 0 ? n.table : s > 0 ? n.join[s - 1] : null, i = o && o.column(r);
  o && !i && n.error(e, h), n.aggronly && !n.$op && n.error(e, ue), H(e, r, s, i, a);
}
function j(e, r, s, n) {
  const [a, o] = s.columnRef.get(r);
  S(e, a, o, s, n);
}
function de(e, r, s, n) {
  n.params && !c(n.params, r) && n.error(e, ce), E(e, r);
}
function E(e, r) {
  e.type = G, e.name = r;
}
function W(e, r) {
  e.type = B, e.name = r, e.raw = g[r];
}
function A(e, r, s) {
  if (r === d) {
    const n = s.table;
    n || s.error(e, ye), K(
      e,
      e.arguments.length ? e.arguments.map((a) => {
        const o = s.param(a), i = se(o) ? n.columnName(o) : o;
        return n.column(i) || s.error(a, h), i;
      }) : n.columnNames()
    );
  } else
    e.callee = { type: J, name: r };
}
function _(e, r) {
  l(u, e) ? r.scope.add(e.name) : l(Y, e) ? e.elements.forEach((s) => _(s, r)) : l(T, e) ? e.properties.forEach((s) => _(s.value, r)) : r.error(e.id, Ae);
}
export {
  Ge as default
};
//# sourceMappingURL=cori.data.api19.js.map
