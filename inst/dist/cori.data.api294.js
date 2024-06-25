/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(r = 0, t = 1 / 0) {
  return `${n(r)} < row_number() && row_number() <= ${n(t)}`;
}
function n(r) {
  return r < 0 ? `count() + ${r}` : r;
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api294.js.map
