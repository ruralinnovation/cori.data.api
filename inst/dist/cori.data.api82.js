/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i() {
  this.innerHTML = "";
}
function e(n) {
  return function() {
    this.innerHTML = n;
  };
}
function o(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function r(n) {
  return arguments.length ? this.each(n == null ? i : (typeof n == "function" ? o : e)(n)) : this.node().innerHTML;
}
export {
  r as default
};
//# sourceMappingURL=cori.data.api82.js.map
