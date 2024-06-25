/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function s() {
  for (var i = this._groups, o = -1, a = i.length; ++o < a; )
    for (var e = i[o], f = e.length - 1, r = e[f], t; --f >= 0; )
      (t = e[f]) && (r && t.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(t, r), r = t);
  return this;
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api89.js.map
