/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(i, r, l) {
  var e = this.enter(), t = this, f = this.exit();
  return e = typeof i == "function" ? i(e) : e.append(i + ""), r != null && (t = r(t)), l == null ? f.remove() : l(f), e && t ? e.merge(t).order() : t;
}
export {
  n as default
};
//# sourceMappingURL=cori.data.api197.js.map
