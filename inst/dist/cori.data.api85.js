/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const w = Math.sqrt(50), q = Math.sqrt(10), m = Math.sqrt(2);
function k(i, r, f) {
  const c = (r - i) / Math.max(0, f), M = Math.floor(Math.log10(c)), d = c / Math.pow(10, M), l = d >= w ? 10 : d >= q ? 5 : d >= m ? 2 : 1;
  let n, h, e;
  return M < 0 ? (e = Math.pow(10, -M) / l, n = Math.round(i * e), h = Math.round(r * e), n / e < i && ++n, h / e > r && --h, e = -e) : (e = Math.pow(10, M) * l, n = Math.round(i / e), h = Math.round(r / e), n * e < i && ++n, h * e > r && --h), h < n && 0.5 <= f && f < 2 ? k(i, r, f * 2) : [n, h, e];
}
function v(i, r, f) {
  if (r = +r, i = +i, f = +f, !(f > 0))
    return [];
  if (i === r)
    return [i];
  const c = r < i, [M, d, l] = c ? k(r, i, f) : k(i, r, f);
  if (!(d >= M))
    return [];
  const n = d - M + 1, h = new Array(n);
  if (c)
    if (l < 0)
      for (let e = 0; e < n; ++e)
        h[e] = (d - e) / -l;
    else
      for (let e = 0; e < n; ++e)
        h[e] = (d - e) * l;
  else if (l < 0)
    for (let e = 0; e < n; ++e)
      h[e] = (M + e) / -l;
  else
    for (let e = 0; e < n; ++e)
      h[e] = (M + e) * l;
  return h;
}
function u(i, r, f) {
  return r = +r, i = +i, f = +f, k(i, r, f)[2];
}
function x(i, r, f) {
  r = +r, i = +i, f = +f;
  const c = r < i, M = c ? u(r, i, f) : u(i, r, f);
  return (c ? -1 : 1) * (M < 0 ? 1 / -M : M);
}
export {
  v as default,
  u as tickIncrement,
  x as tickStep
};
//# sourceMappingURL=cori.data.api85.js.map
