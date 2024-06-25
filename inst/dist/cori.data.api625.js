/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(n, r = (t) => t, c = "") {
  const t = n.length;
  if (!t)
    return "";
  let o = r(n[0], 0);
  for (let e = 1; e < t; ++e)
    o += c + r(n[e], e);
  return o;
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api625.js.map
