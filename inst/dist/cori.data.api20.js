import { Selection as t, root as n } from "./cori.data.api122.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(e) {
  return typeof e == "string" ? new t([[document.querySelector(e)]], [document.documentElement]) : new t([[e]], n);
}
export {
  r as default
};
//# sourceMappingURL=cori.data.api20.js.map
