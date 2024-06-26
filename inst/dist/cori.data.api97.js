import { formatDecimalParts as f } from "./cori.data.api267.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var m;
function l(a, i) {
  var e = f(a, i);
  if (!e)
    return a + "";
  var t = e[0], o = e[1], r = o - (m = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, n = t.length;
  return r === n ? t : r > n ? t + new Array(r - n + 1).join("0") : r > 0 ? t.slice(0, r) + "." + t.slice(r) : "0." + new Array(1 - r).join("0") + f(a, Math.max(0, i + r - 1))[0];
}
export {
  l as default,
  m as prefixExponent
};
//# sourceMappingURL=cori.data.api97.js.map
