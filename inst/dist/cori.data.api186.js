import { get as e, init as i } from "./cori.data.api205.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(n, t) {
  return function() {
    i(this, n).delay = +t.apply(this, arguments);
  };
}
function r(n, t) {
  return t = +t, function() {
    i(this, n).delay = t;
  };
}
function s(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? o : r)(t, n)) : e(this.node(), t).delay;
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api186.js.map
