/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(r, p) {
  const l = { type: "root", children: r.wrap(r.all(p)) };
  return r.patch(p, l), r.applyData(p, l);
}
export {
  o as root
};
//# sourceMappingURL=cori.data.api372.js.map
