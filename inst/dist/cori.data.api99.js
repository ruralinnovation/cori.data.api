/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(t) {
  return function() {
    delete this[t];
  };
}
function o(t, n) {
  return function() {
    this[t] = n;
  };
}
function i(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function u(t, n) {
  return arguments.length > 1 ? this.each((n == null ? r : typeof n == "function" ? i : o)(t, n)) : this.node()[t];
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api99.js.map
