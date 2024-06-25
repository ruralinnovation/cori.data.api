/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o() {
  for (var e = this._groups, r = 0, a = e.length; r < a; ++r)
    for (var n = e[r], t = 0, f = n.length; t < f; ++t) {
      var l = n[t];
      if (l)
        return l;
    }
  return null;
}
export {
  o as default
};
//# sourceMappingURL=cori.data.api93.js.map
