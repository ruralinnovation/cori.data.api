import { Selection as o } from "./cori.data.api135.js";
import m from "./cori.data.api170.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(a) {
  typeof a != "function" && (a = m(a));
  for (var n = this._groups, e = n.length, l = new Array(e), r = 0; r < e; ++r)
    for (var f = n[r], c = f.length, h = l[r] = new Array(c), _, i, t = 0; t < c; ++t)
      (_ = f[t]) && (i = a.call(_, _.__data__, t, f)) && ("__data__" in _ && (i.__data__ = _.__data__), h[t] = i);
  return new o(l, this._parents);
}
export {
  p as default
};
//# sourceMappingURL=cori.data.api136.js.map
