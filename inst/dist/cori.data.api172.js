import { set as i } from "./cori.data.api188.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(t, n) {
  return function() {
    var r = n.apply(this, arguments);
    if (typeof r != "function")
      throw new Error();
    i(this, t).ease = r;
  };
}
function a(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(e(this._id, t));
}
export {
  a as default
};
//# sourceMappingURL=cori.data.api172.js.map
