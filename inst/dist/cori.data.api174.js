/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(t, l, f) {
  var e = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (e = t(e), e && (e = e.selection())) : e = e.append(t + ""), l != null && (i = l(i), i && (i = i.selection())), f == null ? s.remove() : f(s), e && i ? e.merge(i).order() : i;
}
export {
  n as default
};
//# sourceMappingURL=cori.data.api174.js.map
