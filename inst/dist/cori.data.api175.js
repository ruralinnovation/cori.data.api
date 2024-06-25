import { Transition as v } from "./cori.data.api164.js";
import w, { get as y } from "./cori.data.api186.js";
import s from "./cori.data.api157.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function x(_) {
  var m = this._name, i = this._id;
  typeof _ != "function" && (_ = s(_));
  for (var e = this._groups, l = e.length, c = new Array(l), r = 0; r < l; ++r)
    for (var f = e[r], o = f.length, n = c[r] = new Array(o), a, h, t = 0; t < o; ++t)
      (a = f[t]) && (h = _.call(a, a.__data__, t, f)) && ("__data__" in a && (h.__data__ = a.__data__), n[t] = h, w(n[t], m, i, t, n, y(a, i)));
  return new v(c, this._parents, m, i);
}
export {
  x as default
};
//# sourceMappingURL=cori.data.api175.js.map
