/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(h, n, c, f) {
  const l = h.length;
  let u = 0, e;
  if (n < 0 ? n = -n > l ? 0 : l + n : n = n > l ? l : n, c = c > 0 ? c : 0, f.length < 1e4)
    e = Array.from(f), e.unshift(n, c), h.splice(...e);
  else
    for (c && h.splice(n, c); u < f.length; )
      e = f.slice(u, u + 1e4), e.unshift(n, 0), h.splice(...e), u += 1e4, n += 1e4;
}
function g(h, n) {
  return h.length > 0 ? (p(h, h.length, 0, n), h) : n;
}
export {
  g as push,
  p as splice
};
//# sourceMappingURL=cori.data.api628.js.map
