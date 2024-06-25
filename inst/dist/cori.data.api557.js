import { Vector as b } from "./cori.data.api443.js";
import { MapRow as O } from "./cori.data.api504.js";
import { StructRow as k } from "./cori.data.api606.js";
import { compareArrayLike as S } from "./cori.data.api501.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
let y;
function I(e, r, t, n) {
  const { length: o = 0 } = e;
  let f = typeof r != "number" ? 0 : r, a = typeof t != "number" ? o : t;
  return f < 0 && (f = (f % o + o) % o), a < 0 && (a = (a % o + o) % o), a < f && (y = f, f = a, a = y), a > o && (a = o), n ? n(e, f, a) : [f, a];
}
const m = (e) => e !== e;
function l(e) {
  if (typeof e !== "object" || e === null)
    return m(e) ? m : (t) => t === e;
  if (e instanceof Date) {
    const t = e.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === t : !1;
  }
  return ArrayBuffer.isView(e) ? (t) => t ? S(e, t) : !1 : e instanceof Map ? x(e) : Array.isArray(e) ? d(e) : e instanceof b ? A(e) : v(e, !0);
}
function d(e) {
  const r = [];
  for (let t = -1, n = e.length; ++t < n; )
    r[t] = l(e[t]);
  return s(r);
}
function x(e) {
  let r = -1;
  const t = [];
  for (const n of e.values())
    t[++r] = l(n);
  return s(t);
}
function A(e) {
  const r = [];
  for (let t = -1, n = e.length; ++t < n; )
    r[t] = l(e.get(t));
  return s(r);
}
function v(e, r = !1) {
  const t = Object.keys(e);
  if (!r && t.length === 0)
    return () => !1;
  const n = [];
  for (let o = -1, f = t.length; ++o < f; )
    n[o] = l(e[t[o]]);
  return s(n, t);
}
function s(e, r) {
  return (t) => {
    if (!t || typeof t != "object")
      return !1;
    switch (t.constructor) {
      case Array:
        return C(e, t);
      case Map:
        return g(e, t, t.keys());
      case O:
      case k:
      case Object:
      case void 0:
        return g(e, t, r || Object.keys(t));
    }
    return t instanceof b ? M(e, t) : !1;
  };
}
function C(e, r) {
  const t = e.length;
  if (r.length !== t)
    return !1;
  for (let n = -1; ++n < t; )
    if (!e[n](r[n]))
      return !1;
  return !0;
}
function M(e, r) {
  const t = e.length;
  if (r.length !== t)
    return !1;
  for (let n = -1; ++n < t; )
    if (!e[n](r.get(n)))
      return !1;
  return !0;
}
function g(e, r, t) {
  const n = t[Symbol.iterator](), o = r instanceof Map ? r.keys() : Object.keys(r)[Symbol.iterator](), f = r instanceof Map ? r.values() : Object.values(r)[Symbol.iterator]();
  let a = 0;
  const p = e.length;
  let u = f.next(), i = n.next(), c = o.next();
  for (; a < p && !i.done && !c.done && !u.done && !(i.value !== c.value || !e[a](u.value)); ++a, i = n.next(), c = o.next(), u = f.next())
    ;
  return a === p && i.done && c.done && u.done ? !0 : (n.return && n.return(), o.return && o.return(), f.return && f.return(), !1);
}
export {
  I as clampRange,
  l as createElementComparator
};
//# sourceMappingURL=cori.data.api557.js.map
