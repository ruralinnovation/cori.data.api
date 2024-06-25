/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(n, u) {
  let e = 0;
  const r = 1e3 / u;
  let t = null;
  return function() {
    const o = this === !0, l = Date.now();
    if (o || l - e > r)
      return t && (clearTimeout(t), t = null), e = l, n.apply(null, arguments);
    t || (t = setTimeout(() => (t = null, e = Date.now(), n.apply(null, arguments)), r - (l - e)));
  };
}
export {
  i as default
};
//# sourceMappingURL=cori.data.api392.js.map
