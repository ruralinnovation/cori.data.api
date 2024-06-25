import m from "./cori.data.api460.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(i, r = 0, t = i.length) {
  let f = t ? i[r++] : m;
  for (let n = r; n < t; ++n)
    f > i[n] && (f = i[n]);
  return f;
}
export {
  e as default
};
//# sourceMappingURL=cori.data.api683.js.map
