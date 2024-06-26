import { childMatcher as e } from "./cori.data.api137.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var t = Array.prototype.filter;
function n() {
  return Array.from(this.children);
}
function i(r) {
  return function() {
    return t.call(this.children, r);
  };
}
function o(r) {
  return this.selectAll(r == null ? n : i(typeof r == "function" ? r : e(r)));
}
export {
  o as default
};
//# sourceMappingURL=cori.data.api142.js.map
