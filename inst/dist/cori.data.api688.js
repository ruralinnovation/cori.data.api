import { factorySpace as R } from "./cori.data.api669.js";
import { asciiAlpha as A, markdownLineEnding as m, asciiAlphanumeric as w, markdownSpace as g, markdownLineEndingOrSpace as D } from "./cori.data.api479.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const Z = {
  name: "htmlText",
  tokenize: W
};
function W(r, q, u) {
  const v = this;
  let h, O, t;
  return y;
  function y(n) {
    return r.enter("htmlText"), r.enter("htmlTextData"), r.consume(n), H;
  }
  function H(n) {
    return n === 33 ? (r.consume(n), U) : n === 47 ? (r.consume(n), J) : n === 63 ? (r.consume(n), s) : A(n) ? (r.consume(n), L) : u(n);
  }
  function U(n) {
    return n === 45 ? (r.consume(n), j) : n === 91 ? (r.consume(n), O = 0, V) : A(n) ? (r.consume(n), e) : u(n);
  }
  function j(n) {
    return n === 45 ? (r.consume(n), B) : u(n);
  }
  function x(n) {
    return n === null ? u(n) : n === 45 ? (r.consume(n), S) : m(n) ? (t = x, i(n)) : (r.consume(n), x);
  }
  function S(n) {
    return n === 45 ? (r.consume(n), B) : x(n);
  }
  function B(n) {
    return n === 62 ? a(n) : n === 45 ? S(n) : x(n);
  }
  function V(n) {
    const f = "CDATA[";
    return n === f.charCodeAt(O++) ? (r.consume(n), O === f.length ? p : V) : u(n);
  }
  function p(n) {
    return n === null ? u(n) : n === 93 ? (r.consume(n), F) : m(n) ? (t = p, i(n)) : (r.consume(n), p);
  }
  function F(n) {
    return n === 93 ? (r.consume(n), I) : p(n);
  }
  function I(n) {
    return n === 62 ? a(n) : n === 93 ? (r.consume(n), I) : p(n);
  }
  function e(n) {
    return n === null || n === 62 ? a(n) : m(n) ? (t = e, i(n)) : (r.consume(n), e);
  }
  function s(n) {
    return n === null ? u(n) : n === 63 ? (r.consume(n), G) : m(n) ? (t = s, i(n)) : (r.consume(n), s);
  }
  function G(n) {
    return n === 62 ? a(n) : s(n);
  }
  function J(n) {
    return A(n) ? (r.consume(n), z) : u(n);
  }
  function z(n) {
    return n === 45 || w(n) ? (r.consume(n), z) : T(n);
  }
  function T(n) {
    return m(n) ? (t = T, i(n)) : g(n) ? (r.consume(n), T) : a(n);
  }
  function L(n) {
    return n === 45 || w(n) ? (r.consume(n), L) : n === 47 || n === 62 || D(n) ? l(n) : u(n);
  }
  function l(n) {
    return n === 47 ? (r.consume(n), a) : n === 58 || n === 95 || A(n) ? (r.consume(n), N) : m(n) ? (t = l, i(n)) : g(n) ? (r.consume(n), l) : a(n);
  }
  function N(n) {
    return n === 45 || n === 46 || n === 58 || n === 95 || w(n) ? (r.consume(n), N) : E(n);
  }
  function E(n) {
    return n === 61 ? (r.consume(n), C) : m(n) ? (t = E, i(n)) : g(n) ? (r.consume(n), E) : l(n);
  }
  function C(n) {
    return n === null || n === 60 || n === 61 || n === 62 || n === 96 ? u(n) : n === 34 || n === 39 ? (r.consume(n), h = n, b) : m(n) ? (t = C, i(n)) : g(n) ? (r.consume(n), C) : (r.consume(n), P);
  }
  function b(n) {
    return n === h ? (r.consume(n), h = void 0, K) : n === null ? u(n) : m(n) ? (t = b, i(n)) : (r.consume(n), b);
  }
  function P(n) {
    return n === null || n === 34 || n === 39 || n === 60 || n === 61 || n === 96 ? u(n) : n === 47 || n === 62 || D(n) ? l(n) : (r.consume(n), P);
  }
  function K(n) {
    return n === 47 || n === 62 || D(n) ? l(n) : u(n);
  }
  function a(n) {
    return n === 62 ? (r.consume(n), r.exit("htmlTextData"), r.exit("htmlText"), q) : u(n);
  }
  function i(n) {
    return r.exit("htmlTextData"), r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), M;
  }
  function M(n) {
    return g(n) ? R(r, Q, "linePrefix", v.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n) : Q(n);
  }
  function Q(n) {
    return r.enter("htmlTextData"), t(n);
  }
}
export {
  Z as htmlText
};
//# sourceMappingURL=cori.data.api688.js.map
