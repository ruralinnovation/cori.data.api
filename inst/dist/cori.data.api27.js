import d from "./cori.data.api163.js";
import o from "./cori.data.api164.js";
import a from "./cori.data.api165.js";
import { withPath as v } from "./cori.data.api166.js";
import { x as b, y as w } from "./cori.data.api167.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function j(e, r) {
  var m = o(!0), i = null, l = a, u = null, s = v(t);
  e = typeof e == "function" ? e : e === void 0 ? b : o(e), r = typeof r == "function" ? r : r === void 0 ? w : o(r);
  function t(n) {
    var f, h = (n = d(n)).length, p, c = !1, g;
    for (i == null && (u = l(g = s())), f = 0; f <= h; ++f)
      !(f < h && m(p = n[f], f, n)) === c && ((c = !c) ? u.lineStart() : u.lineEnd()), c && u.point(+e(p, f, n), +r(p, f, n));
    if (g)
      return u = null, g + "" || null;
  }
  return t.x = function(n) {
    return arguments.length ? (e = typeof n == "function" ? n : o(+n), t) : e;
  }, t.y = function(n) {
    return arguments.length ? (r = typeof n == "function" ? n : o(+n), t) : r;
  }, t.defined = function(n) {
    return arguments.length ? (m = typeof n == "function" ? n : o(!!n), t) : m;
  }, t.curve = function(n) {
    return arguments.length ? (l = n, i != null && (u = l(i)), t) : l;
  }, t.context = function(n) {
    return arguments.length ? (n == null ? i = u = null : u = l(i = n), t) : i;
  }, t;
}
export {
  j as default
};
//# sourceMappingURL=cori.data.api27.js.map
