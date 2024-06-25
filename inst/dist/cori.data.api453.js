/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? t(n.position) : "start" in n || "end" in n ? t(n) : "line" in n || "column" in n ? i(n) : "";
}
function i(n) {
  return r(n && n.line) + ":" + r(n && n.column);
}
function t(n) {
  return i(n && n.start) + "-" + i(n && n.end);
}
function r(n) {
  return n && typeof n == "number" ? n : 1;
}
export {
  o as stringifyPosition
};
//# sourceMappingURL=cori.data.api453.js.map
