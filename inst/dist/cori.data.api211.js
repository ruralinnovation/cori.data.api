import { get as o, set as i } from "./cori.data.api229.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(n, t) {
  return function() {
    i(this, n).duration = +t.apply(this, arguments);
  };
}
function u(n, t) {
  return t = +t, function() {
    i(this, n).duration = t;
  };
}
function s(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? r : u)(t, n)) : o(this.node(), t).duration;
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api211.js.map
