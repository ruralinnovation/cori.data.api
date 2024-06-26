import { Selection as v } from "./cori.data.api58.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function A(i) {
  for (var e = this._groups, f = i._groups, n = e.length, _ = f.length, c = Math.min(n, _), a = new Array(n), t = 0; t < c; ++t)
    for (var h = e[t], w = f[t], l = h.length, s = a[t] = new Array(l), o, r = 0; r < l; ++r)
      (o = h[r] || w[r]) && (s[r] = o);
  for (; t < n; ++t)
    a[t] = e[t];
  return new v(a, this._parents);
}
export {
  A as default
};
//# sourceMappingURL=cori.data.api198.js.map
