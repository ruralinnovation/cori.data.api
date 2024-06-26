/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function d(t, r = 0, n = t.length) {
  let e = t[r++];
  for (let o = r; o < n; ++o)
    e *= t[o];
  return e;
}
export {
  d as default
};
//# sourceMappingURL=cori.data.api414.js.map
