import t from "./cori.data.api336.js";
import i from "./cori.data.api405.js";
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
//# sourceMappingURL=cori.data.api313.js.map
