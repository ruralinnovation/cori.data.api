/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(n, t, f, i, o) {
  return n == null ? null : n < t ? -1 / 0 : n > f ? 1 / 0 : (n = Math.max(t, Math.min(n, f)), t + i * Math.floor(1e-14 + (n - t) / i + (o || 0)));
}
export {
  r as default
};
//# sourceMappingURL=cori.data.api405.js.map
