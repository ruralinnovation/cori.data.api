/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const r = /[ \t\n\f\r]/g;
function c(e) {
  return typeof e == "object" ? e.type === "text" ? t(e.value) : !1 : t(e);
}
function t(e) {
  return e.replace(r, "") === "";
}
export {
  c as whitespace
};
//# sourceMappingURL=cori.data.api260.js.map
