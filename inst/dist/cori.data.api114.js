import c from "./cori.data.api112.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function g(e, n) {
  var t = n ? n.length : 0, o = e ? Math.min(t, e.length) : 0, f = new Array(o), i = new Array(t), r;
  for (r = 0; r < o; ++r)
    f[r] = c(e[r], n[r]);
  for (; r < t; ++r)
    i[r] = n[r];
  return function(a) {
    for (r = 0; r < o; ++r)
      i[r] = f[r](a);
    return i;
  };
}
export {
  g as genericArray
};
//# sourceMappingURL=cori.data.api114.js.map
