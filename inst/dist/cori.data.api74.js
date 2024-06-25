/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function c(r) {
  e:
    for (var t = r.length, e = 1, a = -1, f; e < t; ++e)
      switch (r[e]) {
        case ".":
          a = f = e;
          break;
        case "0":
          a === 0 && (a = e), f = e;
          break;
        default:
          if (!+r[e])
            break e;
          a > 0 && (a = 0);
          break;
      }
  return a > 0 ? r.slice(0, a) + r.slice(f + 1) : r;
}
export {
  c as default
};
//# sourceMappingURL=cori.data.api74.js.map
