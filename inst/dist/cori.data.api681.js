import { factorySpace as p } from "./cori.data.api669.js";
import { markdownSpace as x, markdownLineEnding as u } from "./cori.data.api479.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const d = {
  tokenize: A,
  partial: !0
}, G = {
  name: "codeFenced",
  tokenize: V,
  concrete: !0
};
function V(e, m, l) {
  const i = this, S = {
    tokenize: M,
    partial: !0
  };
  let c = 0, t = 0, o;
  return I;
  function I(n) {
    return L(n);
  }
  function L(n) {
    const a = i.events[i.events.length - 1];
    return c = a && a[1].type === "linePrefix" ? a[2].sliceSerialize(a[1], !0).length : 0, o = n, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), z(n);
  }
  function z(n) {
    return n === o ? (t++, e.consume(n), z) : t < 3 ? l(n) : (e.exit("codeFencedFenceSequence"), x(n) ? p(e, F, "whitespace")(n) : F(n));
  }
  function F(n) {
    return n === null || u(n) ? (e.exit("codeFencedFence"), i.interrupt ? m(n) : e.check(d, w, h)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), C(n));
  }
  function C(n) {
    return n === null || u(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), F(n)) : x(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), p(e, P, "whitespace")(n)) : n === 96 && n === o ? l(n) : (e.consume(n), C);
  }
  function P(n) {
    return n === null || u(n) ? F(n) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), q(n));
  }
  function q(n) {
    return n === null || u(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), F(n)) : n === 96 && n === o ? l(n) : (e.consume(n), q);
  }
  function w(n) {
    return e.attempt(S, h, O)(n);
  }
  function O(n) {
    return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), v;
  }
  function v(n) {
    return c > 0 && x(n) ? p(e, g, "linePrefix", c + 1)(n) : g(n);
  }
  function g(n) {
    return n === null || u(n) ? e.check(d, w, h)(n) : (e.enter("codeFlowValue"), y(n));
  }
  function y(n) {
    return n === null || u(n) ? (e.exit("codeFlowValue"), g(n)) : (e.consume(n), y);
  }
  function h(n) {
    return e.exit("codeFenced"), m(n);
  }
  function M(n, a, k) {
    let E = 0;
    return N;
    function N(r) {
      return n.enter("lineEnding"), n.consume(r), n.exit("lineEnding"), T;
    }
    function T(r) {
      return n.enter("codeFencedFence"), x(r) ? p(n, s, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(r) : s(r);
    }
    function s(r) {
      return r === o ? (n.enter("codeFencedFenceSequence"), B(r)) : k(r);
    }
    function B(r) {
      return r === o ? (E++, n.consume(r), B) : E >= t ? (n.exit("codeFencedFenceSequence"), x(r) ? p(n, b, "whitespace")(r) : b(r)) : k(r);
    }
    function b(r) {
      return r === null || u(r) ? (n.exit("codeFencedFence"), a(r)) : k(r);
    }
  }
}
function A(e, m, l) {
  const i = this;
  return S;
  function S(t) {
    return t === null ? l(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c);
  }
  function c(t) {
    return i.parser.lazy[i.now().line] ? l(t) : m(t);
  }
}
export {
  G as codeFenced
};
//# sourceMappingURL=cori.data.api681.js.map
