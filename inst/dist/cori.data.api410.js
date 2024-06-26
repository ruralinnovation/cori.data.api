/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function v(l, t, M = 15, b = !0, u = 0, o) {
  const n = Math.LN10;
  if (o == null) {
    const a = Math.ceil(Math.log(M) / n), h = t - l || Math.abs(l) || 1, c = [5, 2];
    for (o = Math.max(
      u,
      Math.pow(10, Math.round(Math.log(h) / n) - a)
    ); Math.ceil(h / o) > M; )
      o *= 10;
    const e = c.length;
    for (let r = 0; r < e; ++r) {
      const f = o / c[r];
      f >= u && h / f <= M && (o = f);
    }
  }
  if (b) {
    let a = Math.log(o);
    const h = a >= 0 ? 0 : ~~(-a / n) + 1, c = Math.pow(10, -h - 1);
    a = Math.floor(l / o + c) * o, l = l < a ? a - o : a, t = Math.ceil(t / o) * o;
  }
  return [
    l,
    t === l ? l + o : t,
    o
  ];
}
export {
  v as default
};
//# sourceMappingURL=cori.data.api410.js.map
