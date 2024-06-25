/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(n, t) {
  return n = +n, t = +t, function(r) {
    return Math.round(n * (1 - r) + t * r);
  };
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api108.js.map
