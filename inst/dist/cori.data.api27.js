import { InternMap as a } from "./cori.data.api85.js";
import p from "./cori.data.api86.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function k(e, ...r) {
  return d(e, p, p, r);
}
function d(e, r, i, s) {
  return function g(f, u) {
    if (u >= s.length)
      return i(f);
    const t = new a(), l = s[u++];
    let m = -1;
    for (const n of f) {
      const o = l(n, ++m, f), c = t.get(o);
      c ? c.push(n) : t.set(o, [n]);
    }
    for (const [n, o] of t)
      t.set(n, g(o, u));
    return r(t);
  }(e, 0);
}
export {
  k as default
};
//# sourceMappingURL=cori.data.api27.js.map
