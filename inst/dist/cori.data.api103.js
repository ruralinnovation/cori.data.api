import y, { gamma as e } from "./cori.data.api114.js";
import { rgb as c } from "./cori.data.api87.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const x = function a(b) {
  var g = e(b);
  function i(o, r) {
    var n = g((o = c(o)).r, (r = c(r)).r), p = g(o.g, r.g), u = g(o.b, r.b), f = y(o.opacity, r.opacity);
    return function(m) {
      return o.r = n(m), o.g = p(m), o.b = u(m), o.opacity = f(m), o + "";
    };
  }
  return i.gamma = a, i;
}(1);
export {
  x as default
};
//# sourceMappingURL=cori.data.api103.js.map
