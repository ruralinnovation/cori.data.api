import i from "./cori.data.api136.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(r) {
  var s = r += "", e = s.indexOf(":");
  return e >= 0 && (s = r.slice(0, e)) !== "xmlns" && (r = r.slice(e + 1)), i.hasOwnProperty(s) ? { space: i[s], local: r } : r;
}
export {
  p as default
};
//# sourceMappingURL=cori.data.api135.js.map
