import { Transition as o } from "./cori.data.api164.js";
import h from "./cori.data.api121.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function v(t) {
  typeof t != "function" && (t = h(t));
  for (var a = this._groups, e = a.length, _ = new Array(e), r = 0; r < e; ++r)
    for (var f = a[r], s = f.length, l = _[r] = [], i, n = 0; n < s; ++n)
      (i = f[n]) && t.call(i, i.__data__, n, f) && l.push(i);
  return new o(_, this._parents, this._name, this._id);
}
export {
  v as default
};
//# sourceMappingURL=cori.data.api171.js.map
