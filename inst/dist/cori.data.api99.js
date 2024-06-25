import e from "./cori.data.api100.js";
import { genericArray as a } from "./cori.data.api101.js";
import f from "./cori.data.api102.js";
import i from "./cori.data.api103.js";
import p from "./cori.data.api104.js";
import u from "./cori.data.api105.js";
import c from "./cori.data.api106.js";
import l, { isNumberArray as s } from "./cori.data.api107.js";
import n from "./cori.data.api85.js";
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
//# sourceMappingURL=cori.data.api99.js.map
