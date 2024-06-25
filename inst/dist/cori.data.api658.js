import { markdownSpace as m } from "./cori.data.api480.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(n, t, i, u) {
  const o = u ? u - 1 : Number.POSITIVE_INFINITY;
  let I = 0;
  return a;
  function a(r) {
    return m(r) ? (n.enter(i), e(r)) : t(r);
  }
  function e(r) {
    return m(r) && I++ < o ? (n.consume(r), e) : (n.exit(i), t(r));
  }
}
export {
  p as factorySpace
};
//# sourceMappingURL=cori.data.api658.js.map
