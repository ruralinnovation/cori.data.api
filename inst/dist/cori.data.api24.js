import { initRange as c } from "./cori.data.api118.js";
import { InternMap as a } from "./cori.data.api83.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const f = Symbol("implicit");
function l() {
  var r = new a(), i = [], u = [], o = f;
  function n(t) {
    let e = r.get(t);
    if (e === void 0) {
      if (o !== f)
        return o;
      r.set(t, e = i.push(t) - 1);
    }
    return u[e % u.length];
  }
  return n.domain = function(t) {
    if (!arguments.length)
      return i.slice();
    i = [], r = new a();
    for (const e of t)
      r.has(e) || r.set(e, i.push(e) - 1);
    return n;
  }, n.range = function(t) {
    return arguments.length ? (u = Array.from(t), n) : u.slice();
  }, n.unknown = function(t) {
    return arguments.length ? (o = t, n) : o;
  }, n.copy = function() {
    return l(i, u).unknown(o);
  }, c.apply(n, arguments), n;
}
export {
  l as default,
  f as implicit
};
//# sourceMappingURL=cori.data.api24.js.map
