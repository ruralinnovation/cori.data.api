/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function h(e, l, u) {
  let n = arguments.length;
  e = +e, l = +l, u = n < 2 ? (l = e, e = 0, 1) : n < 3 ? 1 : +u, n = Math.max(0, Math.ceil((l - e) / u)) | 0;
  const f = new Array(n);
  for (let c = 0; c < n; ++c)
    f[c] = e + c * u;
  return f;
}
export {
  h as default
};
//# sourceMappingURL=cori.data.api412.js.map
