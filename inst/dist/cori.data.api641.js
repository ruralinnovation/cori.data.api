/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(r) {
  return {
    left(f, u, e, n) {
      for (e == null && (e = 0), n == null && (n = f.length); e < n; ) {
        const t = e + n >>> 1;
        r(f[t], u) < 0 ? e = t + 1 : n = t;
      }
      return e;
    },
    right(f, u, e, n) {
      for (e == null && (e = 0), n == null && (n = f.length); e < n; ) {
        const t = e + n >>> 1;
        r(f[t], u) > 0 ? n = t : e = t + 1;
      }
      return e;
    }
  };
}
export {
  l as default
};
//# sourceMappingURL=cori.data.api641.js.map
