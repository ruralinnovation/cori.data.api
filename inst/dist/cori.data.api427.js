import s from "./cori.data.api398.js";
import u from "./cori.data.api399.js";
import i from "./cori.data.api312.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function g(e, t) {
  return e == null || t == null || e !== e || t !== t ? !1 : e === t ? !0 : s(e) || s(t) ? +e == +t : u(e) && u(t) ? e + "" == t + "" : i(e) && i(t) ? p(e, t) : !1;
}
function p(e, t) {
  if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
    return !1;
  if (e.length || t.length)
    return c(e, t);
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length || (r.sort(), n.sort(), !c(r, n, (l, o) => l === o)))
    return !1;
  const f = r.length;
  for (let l = 0; l < f; ++l) {
    const o = r[l];
    if (!g(e[o], t[o]))
      return !1;
  }
  return !0;
}
function c(e, t, r = g) {
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let f = 0; f < n; ++f)
    if (!r(e[f], t[f]))
      return !1;
  return !0;
}
export {
  g as default
};
//# sourceMappingURL=cori.data.api427.js.map
