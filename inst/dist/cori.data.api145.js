import e from "./cori.data.api146.js";
import { genericArray as a } from "./cori.data.api147.js";
import f from "./cori.data.api148.js";
import i from "./cori.data.api149.js";
import p from "./cori.data.api150.js";
import u from "./cori.data.api151.js";
import c from "./cori.data.api152.js";
import l, { isNumberArray as s } from "./cori.data.api153.js";
import n from "./cori.data.api123.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function D(m, r) {
  var o = typeof r, t;
  return r == null || o === "boolean" ? c(r) : (o === "number" ? i : o === "string" ? (t = n(r)) ? (r = t, e) : u : r instanceof n ? e : r instanceof Date ? f : s(r) ? l : Array.isArray(r) ? a : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? p : i)(m, r);
}
export {
  D as default
};
//# sourceMappingURL=cori.data.api145.js.map
