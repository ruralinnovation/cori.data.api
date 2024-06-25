import { asciiAlpha as g, markdownLineEndingOrSpace as V, asciiAlphanumeric as R, markdownSpace as h, markdownLineEnding as p } from "./cori.data.api480.js";
import { htmlRawNames as H, htmlBlockNames as _ } from "./cori.data.api695.js";
import { blankLine as $ } from "./cori.data.api659.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const an = {
  name: "htmlFlow",
  tokenize: d,
  resolveTo: c,
  concrete: !0
}, k = {
  tokenize: rn,
  partial: !0
}, v = {
  tokenize: nn,
  partial: !0
};
function c(r) {
  let t = r.length;
  for (; t-- && !(r[t][0] === "enter" && r[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && r[t - 2][1].type === "linePrefix" && (r[t][1].start = r[t - 2][1].start, r[t + 1][1].start = r[t - 2][1].start, r.splice(t - 2, 2)), r;
}
function d(r, t, i) {
  const a = this;
  let u, s, l, A, b;
  return Q;
  function Q(n) {
    return q(n);
  }
  function q(n) {
    return r.enter("htmlFlow"), r.enter("htmlFlowData"), r.consume(n), P;
  }
  function P(n) {
    return n === 33 ? (r.consume(n), U) : n === 47 ? (r.consume(n), s = !0, j) : n === 63 ? (r.consume(n), u = 3, a.interrupt ? t : e) : g(n) ? (r.consume(n), l = String.fromCharCode(n), F) : i(n);
  }
  function U(n) {
    return n === 45 ? (r.consume(n), u = 2, f) : n === 91 ? (r.consume(n), u = 5, A = 0, E) : g(n) ? (r.consume(n), u = 4, a.interrupt ? t : e) : i(n);
  }
  function f(n) {
    return n === 45 ? (r.consume(n), a.interrupt ? t : e) : i(n);
  }
  function E(n) {
    const o = "CDATA[";
    return n === o.charCodeAt(A++) ? (r.consume(n), A === o.length ? a.interrupt ? t : m : E) : i(n);
  }
  function j(n) {
    return g(n) ? (r.consume(n), l = String.fromCharCode(n), F) : i(n);
  }
  function F(n) {
    if (n === null || n === 47 || n === 62 || V(n)) {
      const o = n === 47, Z = l.toLowerCase();
      return !o && !s && H.includes(Z) ? (u = 1, a.interrupt ? t(n) : m(n)) : _.includes(l.toLowerCase()) ? (u = 6, o ? (r.consume(n), G) : a.interrupt ? t(n) : m(n)) : (u = 7, a.interrupt && !a.parser.lazy[a.now().line] ? i(n) : s ? B(n) : w(n));
    }
    return n === 45 || R(n) ? (r.consume(n), l += String.fromCharCode(n), F) : i(n);
  }
  function G(n) {
    return n === 62 ? (r.consume(n), a.interrupt ? t : m) : i(n);
  }
  function B(n) {
    return h(n) ? (r.consume(n), B) : x(n);
  }
  function w(n) {
    return n === 47 ? (r.consume(n), x) : n === 58 || n === 95 || g(n) ? (r.consume(n), N) : h(n) ? (r.consume(n), w) : x(n);
  }
  function N(n) {
    return n === 45 || n === 46 || n === 58 || n === 95 || R(n) ? (r.consume(n), N) : S(n);
  }
  function S(n) {
    return n === 61 ? (r.consume(n), y) : h(n) ? (r.consume(n), S) : w(n);
  }
  function y(n) {
    return n === null || n === 60 || n === 61 || n === 62 || n === 96 ? i(n) : n === 34 || n === 39 ? (r.consume(n), b = n, D) : h(n) ? (r.consume(n), y) : T(n);
  }
  function D(n) {
    return n === b ? (r.consume(n), b = null, J) : n === null || p(n) ? i(n) : (r.consume(n), D);
  }
  function T(n) {
    return n === null || n === 34 || n === 39 || n === 47 || n === 60 || n === 61 || n === 62 || n === 96 || V(n) ? S(n) : (r.consume(n), T);
  }
  function J(n) {
    return n === 47 || n === 62 || h(n) ? w(n) : i(n);
  }
  function x(n) {
    return n === 62 ? (r.consume(n), I) : i(n);
  }
  function I(n) {
    return n === null || p(n) ? m(n) : h(n) ? (r.consume(n), I) : i(n);
  }
  function m(n) {
    return n === 45 && u === 2 ? (r.consume(n), W) : n === 60 && u === 1 ? (r.consume(n), X) : n === 62 && u === 4 ? (r.consume(n), C) : n === 63 && u === 3 ? (r.consume(n), e) : n === 93 && u === 5 ? (r.consume(n), Y) : p(n) && (u === 6 || u === 7) ? (r.exit("htmlFlowData"), r.check(k, L, z)(n)) : n === null || p(n) ? (r.exit("htmlFlowData"), z(n)) : (r.consume(n), m);
  }
  function z(n) {
    return r.check(v, K, L)(n);
  }
  function K(n) {
    return r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), M;
  }
  function M(n) {
    return n === null || p(n) ? z(n) : (r.enter("htmlFlowData"), m(n));
  }
  function W(n) {
    return n === 45 ? (r.consume(n), e) : m(n);
  }
  function X(n) {
    return n === 47 ? (r.consume(n), l = "", O) : m(n);
  }
  function O(n) {
    if (n === 62) {
      const o = l.toLowerCase();
      return H.includes(o) ? (r.consume(n), C) : m(n);
    }
    return g(n) && l.length < 8 ? (r.consume(n), l += String.fromCharCode(n), O) : m(n);
  }
  function Y(n) {
    return n === 93 ? (r.consume(n), e) : m(n);
  }
  function e(n) {
    return n === 62 ? (r.consume(n), C) : n === 45 && u === 2 ? (r.consume(n), e) : m(n);
  }
  function C(n) {
    return n === null || p(n) ? (r.exit("htmlFlowData"), L(n)) : (r.consume(n), C);
  }
  function L(n) {
    return r.exit("htmlFlow"), t(n);
  }
}
function nn(r, t, i) {
  const a = this;
  return u;
  function u(l) {
    return p(l) ? (r.enter("lineEnding"), r.consume(l), r.exit("lineEnding"), s) : i(l);
  }
  function s(l) {
    return a.parser.lazy[a.now().line] ? i(l) : t(l);
  }
}
function rn(r, t, i) {
  return a;
  function a(u) {
    return r.enter("lineEnding"), r.consume(u), r.exit("lineEnding"), r.attempt($, t, i);
  }
}
export {
  an as htmlFlow
};
//# sourceMappingURL=cori.data.api669.js.map
