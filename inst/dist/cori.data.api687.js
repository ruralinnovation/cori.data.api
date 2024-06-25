import n from "./cori.data.api427.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(f, i = 0, m = f.length) {
  let t = m ? f[i++] : n;
  for (let r = i; r < m; ++r)
    t < f[r] && (t = f[r]);
  return t;
}
export {
  e as default
};
//# sourceMappingURL=cori.data.api687.js.map
