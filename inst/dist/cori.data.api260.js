import n from "./cori.data.api125.js";
import o from "./cori.data.api104.js";
import e from "./cori.data.api122.js";
import m from "./cori.data.api127.js";
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
//# sourceMappingURL=cori.data.api260.js.map
