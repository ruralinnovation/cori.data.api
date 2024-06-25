import c from "./cori.data.api443.js";
import e from "./cori.data.api445.js";
import i from "./cori.data.api682.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function s(t, r) {
  const o = t.length;
  if (!o)
    return e;
  if ((r = +r) <= 0 || o < 2)
    return i(t[0]);
  if (r >= 1)
    return i(t[o - 1]);
  const m = (o - 1) * r, f = Math.floor(m), n = i(t[f]);
  return c(n) ? n : n + (i(t[f + 1]) - n) * (m - f);
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api675.js.map
