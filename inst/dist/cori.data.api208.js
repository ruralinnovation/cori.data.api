import { Transition as s, newId as h } from "./cori.data.api209.js";
import c from "./cori.data.api231.js";
import { now as _ } from "./cori.data.api200.js";
import { cubicInOut as m } from "./cori.data.api128.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var w = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: m
};
function d(t, i) {
  for (var r; !(r = t.__transition) || !(r = r[i]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${i} not found`);
  return r;
}
function T(t) {
  var i, r;
  t instanceof s ? (i = t._id, t = t._name) : (i = h(), (r = w).time = _(), t = t == null ? null : t + "");
  for (var o = this._groups, a = o.length, e = 0; e < a; ++e)
    for (var f = o[e], u = f.length, l, n = 0; n < u; ++n)
      (l = f[n]) && c(l, t, i, n, f, r || d(l, i));
  return new s(o, this._parents, t, i);
}
export {
  T as default
};
//# sourceMappingURL=cori.data.api208.js.map
