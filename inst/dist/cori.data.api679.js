import { factorySpace as k } from "./cori.data.api644.js";
import { markdownLineEnding as E } from "./cori.data.api469.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function B(r, S, m, x, u, a) {
  let i;
  return h;
  function h(n) {
    return n === 34 || n === 39 || n === 40 ? (r.enter(x), r.enter(u), r.consume(n), r.exit(u), i = n === 40 ? 41 : n, g) : m(n);
  }
  function g(n) {
    return n === i ? (r.enter(u), r.consume(n), r.exit(u), r.exit(x), S) : (r.enter(a), l(n));
  }
  function l(n) {
    return n === i ? (r.exit(a), g(i)) : n === null ? m(n) : E(n) ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), k(r, l, "linePrefix")) : (r.enter("chunkString", {
      contentType: "string"
    }), t(n));
  }
  function t(n) {
    return n === i || n === null || E(n) ? (r.exit("chunkString"), l(n)) : (r.consume(n), n === 92 ? b : t);
  }
  function b(n) {
    return n === i || n === 92 ? (r.consume(n), t) : t(n);
  }
}
export {
  B as factoryTitle
};
//# sourceMappingURL=cori.data.api679.js.map
