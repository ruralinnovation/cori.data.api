/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function t() {
  var e = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function o() {
  var e = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function i(e) {
  return this.select(e ? o : t);
}
export {
  i as default
};
//# sourceMappingURL=cori.data.api220.js.map
