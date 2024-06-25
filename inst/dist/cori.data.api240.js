import { getDefaultExportFromCjs as m } from "./cori.data.api39.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var u = Object.prototype.hasOwnProperty, P = Object.prototype.toString, s = Object.defineProperty, y = Object.getOwnPropertyDescriptor, p = function(r) {
  return typeof Array.isArray == "function" ? Array.isArray(r) : P.call(r) === "[object Array]";
}, v = function(r) {
  if (!r || P.call(r) !== "[object Object]")
    return !1;
  var e = u.call(r, "constructor"), a = r.constructor && r.constructor.prototype && u.call(r.constructor.prototype, "isPrototypeOf");
  if (r.constructor && !e && !a)
    return !1;
  var t;
  for (t in r)
    ;
  return typeof t > "u" || u.call(r, t);
}, O = function(r, e) {
  s && e.name === "__proto__" ? s(r, e.name, {
    enumerable: !0,
    configurable: !0,
    value: e.newValue,
    writable: !0
  }) : r[e.name] = e.newValue;
}, g = function(r, e) {
  if (e === "__proto__")
    if (u.call(r, e)) {
      if (y)
        return y(r, e).value;
    } else
      return;
  return r[e];
}, w = function o() {
  var r, e, a, t, c, l, n = arguments[0], f = 1, d = arguments.length, i = !1;
  for (typeof n == "boolean" && (i = n, n = arguments[1] || {}, f = 2), (n == null || typeof n != "object" && typeof n != "function") && (n = {}); f < d; ++f)
    if (r = arguments[f], r != null)
      for (e in r)
        a = g(n, e), t = g(r, e), n !== t && (i && t && (v(t) || (c = p(t))) ? (c ? (c = !1, l = a && p(a) ? a : []) : l = a && v(a) ? a : {}, O(n, { name: e, newValue: o(i, l, t) })) : typeof t < "u" && O(n, { name: e, newValue: t }));
  return n;
};
const _ = /* @__PURE__ */ m(w);
export {
  _ as default
};
//# sourceMappingURL=cori.data.api240.js.map
