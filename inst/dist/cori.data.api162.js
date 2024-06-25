import { childMatcher as i } from "./cori.data.api158.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var n = Array.prototype.find;
function r(t) {
  return function() {
    return n.call(this.children, t);
  };
}
function e() {
  return this.firstElementChild;
}
function o(t) {
  return this.select(t == null ? e : r(typeof t == "function" ? t : i(t)));
}
export {
  o as default
};
//# sourceMappingURL=cori.data.api162.js.map
