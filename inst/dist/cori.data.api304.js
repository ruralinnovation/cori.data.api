import o from "./cori.data.api396.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(r, a, e) {
  const s = Math.min(r.length, e + a);
  return (t, c) => {
    for (let n = e; n < s; ++n)
      c(r[n][t], n);
  };
}
function h(r, a, e) {
  const s = e === 0 && r.numRows() <= a && !r.isFiltered() && !r.isOrdered();
  return (t, c) => {
    let n = -1;
    s && o(t.data) ? t.data.forEach(c) : r.scan(
      (i) => c(t.get(i), ++n),
      !0,
      a,
      e
    );
  };
}
export {
  u as scanArray,
  h as scanTable
};
//# sourceMappingURL=cori.data.api304.js.map
