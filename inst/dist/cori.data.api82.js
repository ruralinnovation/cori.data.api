import { Selection as h } from "./cori.data.api58.js";
import c from "./cori.data.api113.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(t) {
  typeof t != "function" && (t = c(t));
  for (var a = this._groups, _ = a.length, i = [], n = [], r = 0; r < _; ++r)
    for (var o = a[r], e = o.length, f, l = 0; l < e; ++l)
      (f = o[l]) && (i.push(t.call(f, f.__data__, l, o)), n.push(f));
  return new h(i, n);
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api82.js.map
