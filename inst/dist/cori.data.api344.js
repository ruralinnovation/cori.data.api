import n from "./cori.data.api111.js";
import o from "./cori.data.api89.js";
import e from "./cori.data.api108.js";
import m from "./cori.data.api113.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(i, r) {
  var t;
  return (typeof r == "number" ? n : r instanceof o ? e : (t = o(r)) ? (r = t, e) : m)(i, r);
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api344.js.map
