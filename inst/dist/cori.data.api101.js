import a from "./cori.data.api91.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function t(n, o) {
  return n = Math.abs(n), o = Math.abs(o) - n, Math.max(0, a(o) - a(n)) + 1;
}
export {
  t as default
};
//# sourceMappingURL=cori.data.api101.js.map
