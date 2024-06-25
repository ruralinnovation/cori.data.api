import { tweenValue as e } from "./cori.data.api185.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(t) {
  return function() {
    this.textContent = t;
  };
}
function o(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function r(t) {
  return this.tween("text", typeof t == "function" ? o(e(this, "text", t)) : i(t == null ? "" : t + ""));
}
export {
  r as default
};
//# sourceMappingURL=cori.data.api182.js.map
