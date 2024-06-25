import t from "./cori.data.api108.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(a, o) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(t(o) / 3))) * 3 - t(Math.abs(a)));
}
export {
  e as default
};
//# sourceMappingURL=cori.data.api117.js.map
