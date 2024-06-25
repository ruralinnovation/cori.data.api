import r from "./cori.data.api161.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(t) {
  var e = typeof t == "function" ? t : r(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
export {
  i as default
};
//# sourceMappingURL=cori.data.api192.js.map
