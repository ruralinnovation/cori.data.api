import { Transition as v } from "./cori.data.api166.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function A(h) {
  if (h._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = h._groups, i = n.length, s = e.length, w = Math.min(i, s), a = new Array(i), r = 0; r < w; ++r)
    for (var f = n[r], l = e[r], _ = f.length, d = a[r] = new Array(_), o, t = 0; t < _; ++t)
      (o = f[t] || l[t]) && (d[t] = o);
  for (; r < i; ++r)
    a[r] = n[r];
  return new v(a, this._parents, this._name, this._id);
}
export {
  A as default
};
//# sourceMappingURL=cori.data.api174.js.map
