import { factorySpace as h } from "./cori.data.api658.js";
import { markdownLineEnding as o } from "./cori.data.api480.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const P = {
  name: "codeIndented",
  tokenize: p
}, m = {
  tokenize: d,
  partial: !0
};
function p(e, f, l) {
  const r = this;
  return u;
  function u(n) {
    return e.enter("codeIndented"), h(e, s, "linePrefix", 5)(n);
  }
  function s(n) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(n) : l(n);
  }
  function t(n) {
    return n === null ? x(n) : o(n) ? e.attempt(m, t, x)(n) : (e.enter("codeFlowValue"), i(n));
  }
  function i(n) {
    return n === null || o(n) ? (e.exit("codeFlowValue"), t(n)) : (e.consume(n), i);
  }
  function x(n) {
    return e.exit("codeIndented"), f(n);
  }
}
function d(e, f, l) {
  const r = this;
  return u;
  function u(t) {
    return r.parser.lazy[r.now().line] ? l(t) : o(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u) : h(e, s, "linePrefix", 5)(t);
  }
  function s(t) {
    const i = r.events[r.events.length - 1];
    return i && i[1].type === "linePrefix" && i[2].sliceSerialize(i[1], !0).length >= 4 ? f(t) : o(t) ? u(t) : l(t);
  }
}
export {
  P as codeIndented
};
//# sourceMappingURL=cori.data.api665.js.map
