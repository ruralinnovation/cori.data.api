/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(e, n) {
  if (n.length === 0)
    return e;
  const t = e.columnNames();
  return n.reduce((u, c) => u.antijoin(c.select(t)), e).dedupe();
}
export {
  r as default
};
//# sourceMappingURL=cori.data.api450.js.map
