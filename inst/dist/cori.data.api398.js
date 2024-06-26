import o from "./cori.data.api409.js";
import r from "./cori.data.api415.js";
import i from "./cori.data.api309.js";
import n from "./cori.data.api385.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(t) {
  return n(o, t);
}
function e(t) {
  return n(r, t);
}
function a(t) {
  return n(i, t) || t === "row_object";
}
function m(t) {
  return u(t) && o[t];
}
function p(t) {
  return e(t) && r[t];
}
export {
  o as aggregateFunctions,
  i as functions,
  m as getAggregate,
  p as getWindow,
  u as hasAggregate,
  a as hasFunction,
  e as hasWindow,
  r as windowFunctions
};
//# sourceMappingURL=cori.data.api398.js.map
