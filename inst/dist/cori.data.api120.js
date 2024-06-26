/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(r, e) {
  e || (e = []);
  var u = r ? Math.min(e.length, r.length) : 0, i = e.slice(), n;
  return function(t) {
    for (n = 0; n < u; ++n)
      i[n] = r[n] * (1 - t) + e[n] * t;
    return i;
  };
}
function a(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
export {
  f as default,
  a as isNumberArray
};
//# sourceMappingURL=cori.data.api120.js.map
