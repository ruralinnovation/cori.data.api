import t from "./cori.data.api355.js";
import i from "./cori.data.api416.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function s(r) {
  return t(r) ? r : i(r) ? r.entries() : r ? Object.entries(r) : [];
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api332.js.map
