import l from "./cori.data.api30.js";
import u from "./cori.data.api66.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i() {
  return null;
}
function c(n, t) {
  var r = typeof n == "function" ? n : l(n), e = t == null ? i : typeof t == "function" ? t : u(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), e.apply(this, arguments) || null);
  });
}
export {
  c as default
};
//# sourceMappingURL=cori.data.api60.js.map
