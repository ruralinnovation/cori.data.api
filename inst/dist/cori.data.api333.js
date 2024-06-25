/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(e, a, r = {}) {
  for (const n in e)
    r[n] = a(e[n], n);
  return r;
}
export {
  f as default
};
//# sourceMappingURL=cori.data.api333.js.map
