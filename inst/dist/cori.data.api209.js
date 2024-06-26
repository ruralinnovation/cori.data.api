import { Selection as s } from "./cori.data.api61.js";
import c from "./cori.data.api206.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function v(t) {
  typeof t != "function" && (t = c(t));
  for (var i = this._groups, l = i.length, a = new Array(l), r = 0; r < l; ++r)
    for (var n = i[r], _ = n.length, o = a[r] = [], e, f = 0; f < _; ++f)
      (e = n[f]) && t.call(e, e.__data__, f, n) && o.push(e);
  return new s(a, this._parents);
}
export {
  v as default
};
//# sourceMappingURL=cori.data.api209.js.map
