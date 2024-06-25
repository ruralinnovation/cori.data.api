/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function c(o, e, r) {
  const i = [];
  let n = -1;
  for (; ++n < o.length; ) {
    const l = o[n].resolveAll;
    l && !i.includes(l) && (e = l(e, r), i.push(l));
  }
  return e;
}
export {
  c as resolveAll
};
//# sourceMappingURL=cori.data.api642.js.map
