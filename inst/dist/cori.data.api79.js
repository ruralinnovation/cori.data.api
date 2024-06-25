import d from "./cori.data.api78.js";
import p from "./cori.data.api81.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function b(c) {
  let u, o, s;
  c.length !== 2 ? (u = d, o = (n, e) => d(c(n), e), s = (n, e) => c(n) - e) : (u = c === d || c === p ? c : l, o = c, s = c);
  function f(n, e, t = 0, r = n.length) {
    if (t < r) {
      if (u(e, e) !== 0)
        return r;
      do {
        const i = t + r >>> 1;
        o(n[i], e) < 0 ? t = i + 1 : r = i;
      } while (t < r);
    }
    return t;
  }
  function m(n, e, t = 0, r = n.length) {
    if (t < r) {
      if (u(e, e) !== 0)
        return r;
      do {
        const i = t + r >>> 1;
        o(n[i], e) <= 0 ? t = i + 1 : r = i;
      } while (t < r);
    }
    return t;
  }
  function g(n, e, t = 0, r = n.length) {
    const i = f(n, e, t, r - 1);
    return i > t && s(n[i - 1], e) > -s(n[i], e) ? i - 1 : i;
  }
  return { left: f, center: g, right: m };
}
function l() {
  return 0;
}
export {
  b as default
};
//# sourceMappingURL=cori.data.api79.js.map
