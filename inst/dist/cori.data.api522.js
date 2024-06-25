import i from "./cori.data.api616.js";
import g from "./cori.data.api617.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function b(f, s, m, u = {}) {
  const { replace: r, shuffle: h } = u, a = f.partitions(!1);
  let o = 0;
  s = a.map((e, n) => {
    let t = s(n);
    return o += t = r ? t : Math.min(e.length, t), t;
  });
  const l = new Uint32Array(o);
  let p = 0;
  return a.forEach((e, n) => {
    const t = s[n], c = l.subarray(p, p += t);
    !r && t === e.length ? c.set(e) : i(c, r, e, m);
  }), h !== !1 && (a.length > 1 || !r) && g(l), f.reify(l);
}
export {
  b as default
};
//# sourceMappingURL=cori.data.api522.js.map
