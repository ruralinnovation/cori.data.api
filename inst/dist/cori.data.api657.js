import { asciiAlpha as z, asciiAlphanumeric as a, asciiControl as E, asciiAtext as O } from "./cori.data.api419.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const b = {
  name: "autolink",
  tokenize: P
};
function P(r, l, t) {
  let i = 0;
  return p;
  function p(n) {
    return r.enter("autolink"), r.enter("autolinkMarker"), r.consume(n), r.exit("autolinkMarker"), r.enter("autolinkProtocol"), M;
  }
  function M(n) {
    return z(n) ? (r.consume(n), h) : n === 64 ? t(n) : u(n);
  }
  function h(n) {
    return n === 43 || n === 45 || n === 46 || a(n) ? (i = 1, m(n)) : u(n);
  }
  function m(n) {
    return n === 58 ? (r.consume(n), i = 0, k) : (n === 43 || n === 45 || n === 46 || a(n)) && i++ < 32 ? (r.consume(n), m) : (i = 0, u(n));
  }
  function k(n) {
    return n === 62 ? (r.exit("autolinkProtocol"), r.enter("autolinkMarker"), r.consume(n), r.exit("autolinkMarker"), r.exit("autolink"), l) : n === null || n === 32 || n === 60 || E(n) ? t(n) : (r.consume(n), k);
  }
  function u(n) {
    return n === 64 ? (r.consume(n), o) : O(n) ? (r.consume(n), u) : t(n);
  }
  function o(n) {
    return a(n) ? x(n) : t(n);
  }
  function x(n) {
    return n === 46 ? (r.consume(n), i = 0, o) : n === 62 ? (r.exit("autolinkProtocol").type = "autolinkEmail", r.enter("autolinkMarker"), r.consume(n), r.exit("autolinkMarker"), r.exit("autolink"), l) : A(n);
  }
  function A(n) {
    if ((n === 45 || a(n)) && i++ < 63) {
      const e = n === 45 ? A : x;
      return r.consume(n), e;
    }
    return t(n);
  }
}
export {
  b as autolink
};
//# sourceMappingURL=cori.data.api657.js.map
