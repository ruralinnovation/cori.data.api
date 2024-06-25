/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(e, n) {
  const c = e.columnNames();
  return n.length ? n.reduce((s, t) => s.semijoin(t.select(c)), e).dedupe() : e.reify([]);
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api469.js.map
