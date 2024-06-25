import { asciiControl as h, markdownLineEnding as B, markdownLineEndingOrSpace as C } from "./cori.data.api469.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function F(r, a, S, i, g, t, E, m, w) {
  const N = w || Number.POSITIVE_INFINITY;
  let x = 0;
  return b;
  function b(n) {
    return n === 60 ? (r.enter(i), r.enter(g), r.enter(t), r.consume(n), r.exit(t), I) : n === null || n === 32 || n === 41 || h(n) ? S(n) : (r.enter(i), r.enter(E), r.enter(m), r.enter("chunkString", {
      contentType: "string"
    }), u(n));
  }
  function I(n) {
    return n === 62 ? (r.enter(t), r.consume(n), r.exit(t), r.exit(g), r.exit(i), a) : (r.enter(m), r.enter("chunkString", {
      contentType: "string"
    }), l(n));
  }
  function l(n) {
    return n === 62 ? (r.exit("chunkString"), r.exit(m), I(n)) : n === null || n === 60 || B(n) ? S(n) : (r.consume(n), n === 92 ? L : l);
  }
  function L(n) {
    return n === 60 || n === 62 || n === 92 ? (r.consume(n), l) : l(n);
  }
  function u(n) {
    return !x && (n === null || n === 41 || C(n)) ? (r.exit("chunkString"), r.exit(m), r.exit(E), r.exit(i), a(n)) : x < N && n === 40 ? (r.consume(n), x++, u) : n === 41 ? (r.consume(n), x--, u) : n === null || n === 32 || n === 40 || h(n) ? S(n) : (r.consume(n), n === 92 ? O : u);
  }
  function O(n) {
    return n === 40 || n === 41 || n === 92 ? (r.consume(n), u) : u(n);
  }
}
export {
  F as factoryDestination
};
//# sourceMappingURL=cori.data.api677.js.map
