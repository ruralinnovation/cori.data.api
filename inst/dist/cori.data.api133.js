import o from "./cori.data.api128.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(n, r) {
  return function(t) {
    return n + t * r;
  };
}
function i(n, r, t) {
  return n = Math.pow(n, t), r = Math.pow(r, t) - n, t = 1 / t, function(u) {
    return Math.pow(n + u * r, t);
  };
}
function a(n) {
  return (n = +n) == 1 ? f : function(r, t) {
    return t - r ? i(r, t, n) : o(isNaN(r) ? t : r);
  };
}
function f(n, r) {
  var t = r - n;
  return t ? e(n, t) : o(isNaN(n) ? r : n);
}
export {
  f as default,
  a as gamma
};
//# sourceMappingURL=cori.data.api133.js.map
