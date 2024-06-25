/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(i, d) {
  let n;
  if (d === void 0)
    for (const e of i)
      e != null && (n > e || n === void 0 && e >= e) && (n = e);
  else {
    let e = -1;
    for (let f of i)
      (f = d(f, ++e, i)) != null && (n > f || n === void 0 && f >= f) && (n = f);
  }
  return n;
}
export {
  l as default
};
//# sourceMappingURL=cori.data.api25.js.map
