/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function* n() {
  for (var r = this._groups, t = 0, l = r.length; t < l; ++t)
    for (var a = r[t], e = 0, i = a.length, f; e < i; ++e)
      (f = a[e]) && (yield f);
}
export {
  n as default
};
//# sourceMappingURL=cori.data.api167.js.map
