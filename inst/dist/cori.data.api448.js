/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(r, u = []) {
  return r.groupby(u.length ? u : r.columnNames()).filter("row_number() === 1").ungroup().reify();
}
export {
  e as default
};
//# sourceMappingURL=cori.data.api448.js.map
