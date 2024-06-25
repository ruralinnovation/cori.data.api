import { Column as O, Op as h, Literal as v } from "./cori.data.api357.js";
import k from "./cori.data.api358.js";
import { is as N } from "./cori.data.api359.js";
import T from "./cori.data.api360.js";
import A from "./cori.data.api361.js";
import F from "./cori.data.api350.js";
import I from "./cori.data.api333.js";
import P from "./cori.data.api337.js";
import C from "./cori.data.api362.js";
import K from "./cori.data.api363.js";
import L from "./cori.data.api38.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const M = { [O]: 1, [h]: 1 };
function W(s, t = {}) {
  const a = t.generate || T, n = t.compiler || A, o = q(t), m = {}, f = {}, p = [], l = [];
  let d = 0, g = -1;
  const $ = t.join ? n.join : t.index == 1 ? n.expr2 : n.expr, c = {
    op(r) {
      const e = S(r);
      return f[e] || (r.id = ++g, f[e] = r);
    },
    field(r) {
      const e = a(r);
      return m[e] || (m[e] = ++d);
    },
    param(r) {
      return N(v, r) ? r.value : n.param(a(r), o);
    },
    value(r, e) {
      p.push(r);
      const i = e.escape || (t.ast ? k(e) : $(a(e), o));
      l.push(i), M[e.type] && i !== e && C(i) && (i.field = e.name);
    },
    error(r, e, i = "") {
      const b = r.start - 6, y = r.end - 6, E = String(c.spec).slice(b, y);
      I(`${e}: "${E}"${i}`);
    }
  };
  Object.assign(c, t, { params: o });
  for (const [r, e] of F(s))
    c.value(
      r + "",
      e.escape ? K(c, e, o) : L(c, e)
    );
  if (t.ast)
    return { names: p, exprs: l };
  const j = [];
  for (const r in m)
    j[m[r]] = n.expr(r, o);
  const x = Object.values(f);
  return x.forEach((r) => r.fields = r.fields.map((e) => j[e])), { names: p, exprs: l, ops: x };
}
function S(s) {
  let t = `${s.name}(${s.fields.concat(s.params).join(",")})`;
  if (s.frame) {
    const a = s.frame.map((n) => Number.isFinite(n) ? Math.abs(n) : -1);
    t += `[${a},${!!s.peers}]`;
  }
  return t;
}
function q(s) {
  return (s.table ? u(s.table) : s.join ? {
    ...u(s.join[1]),
    ...u(s.join[0])
  } : {}) || {};
}
function u(s) {
  return s && P(s.params) ? s.params() : {};
}
export {
  W as default
};
//# sourceMappingURL=cori.data.api356.js.map
