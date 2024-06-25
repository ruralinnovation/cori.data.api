import { Selection as e } from "./cori.data.api135.js";
import h from "./cori.data.api335.js";
import _ from "./cori.data.api171.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(r) {
  return function() {
    return h(r.apply(this, arguments));
  };
}
function s(r) {
  typeof r == "function" ? r = p(r) : r = _(r);
  for (var l = this._groups, m = l.length, o = [], i = [], n = 0; n < m; ++n)
    for (var a = l[n], u = a.length, t, f = 0; f < u; ++f)
      (t = a[f]) && (o.push(r.call(t, t.__data__, f, a)), i.push(t));
  return new e(o, i);
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api137.js.map
