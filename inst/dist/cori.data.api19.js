import { initRange as v } from "./cori.data.api126.js";
import w from "./cori.data.api24.js";
import b from "./cori.data.api87.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function x() {
  var r = w().unknown(void 0), f = r.domain, c = r.range, t = 0, e = 1, i, m, o = !1, u = 0, g = 0, l = 0.5;
  delete r.unknown;
  function a() {
    var n = f().length, s = e < t, d = s ? e : t, h = s ? t : e;
    i = (h - d) / Math.max(1, n - u + g * 2), o && (i = Math.floor(i)), d += (h - d - i * (n - u)) * l, m = i * (1 - u), o && (d = Math.round(d), m = Math.round(m));
    var p = b(n).map(function(M) {
      return d + i * M;
    });
    return c(s ? p.reverse() : p);
  }
  return r.domain = function(n) {
    return arguments.length ? (f(n), a()) : f();
  }, r.range = function(n) {
    return arguments.length ? ([t, e] = n, t = +t, e = +e, a()) : [t, e];
  }, r.rangeRound = function(n) {
    return [t, e] = n, t = +t, e = +e, o = !0, a();
  }, r.bandwidth = function() {
    return m;
  }, r.step = function() {
    return i;
  }, r.round = function(n) {
    return arguments.length ? (o = !!n, a()) : o;
  }, r.padding = function(n) {
    return arguments.length ? (u = Math.min(1, g = +n), a()) : u;
  }, r.paddingInner = function(n) {
    return arguments.length ? (u = Math.min(1, n), a()) : u;
  }, r.paddingOuter = function(n) {
    return arguments.length ? (g = +n, a()) : g;
  }, r.align = function(n) {
    return arguments.length ? (l = Math.max(0, Math.min(1, n)), a()) : l;
  }, r.copy = function() {
    return x(f(), [t, e]).round(o).paddingInner(u).paddingOuter(g).align(l);
  }, v.apply(a(), arguments);
}
export {
  x as default
};
//# sourceMappingURL=cori.data.api19.js.map
