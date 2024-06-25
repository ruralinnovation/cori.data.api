/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(n, e, a) {
  n = +n, e = +e, a = (g = arguments.length) < 2 ? (e = n, n = 0, 1) : g < 3 ? 1 : +a;
  for (var h = -1, g = Math.max(0, Math.ceil((e - n) / a)) | 0, i = new Array(g); ++h < g; )
    i[h] = n + h * a;
  return i;
}
export {
  l as default
};
//# sourceMappingURL=cori.data.api79.js.map
