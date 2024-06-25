import { get as n, set as i } from "./cori.data.api231.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    i(this, e).ease = t;
  };
}
function s(e) {
  var t = this._id;
  return arguments.length ? this.each(r(t, e)) : n(this.node(), t).ease;
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api214.js.map
