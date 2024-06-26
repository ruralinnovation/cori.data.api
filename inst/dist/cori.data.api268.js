import { formatDecimalParts as a } from "./cori.data.api267.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(t, o) {
  var n = a(t, o);
  if (!n)
    return t + "";
  var e = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + e : e.length > r + 1 ? e.slice(0, r + 1) + "." + e.slice(r + 1) : e + new Array(r - e.length + 2).join("0");
}
export {
  f as default
};
//# sourceMappingURL=cori.data.api268.js.map
