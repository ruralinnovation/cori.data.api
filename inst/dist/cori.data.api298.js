import r from "./cori.data.api304.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(e) {
  delete e.start, delete e.end, delete e.optional;
}
function t(e) {
  l(e), delete e.object, delete e.property, delete e.computed, e.table || delete e.table;
}
function u(e) {
  return r(e, null, {
    Column: t,
    Constant: t,
    Default: l
  }), e;
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api298.js.map
