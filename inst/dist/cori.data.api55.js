/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e() {
  this.textContent = "";
}
function o(t) {
  return function() {
    this.textContent = t;
  };
}
function i(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function u(t) {
  return arguments.length ? this.each(t == null ? e : (typeof t == "function" ? i : o)(t)) : this.node().textContent;
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api55.js.map
