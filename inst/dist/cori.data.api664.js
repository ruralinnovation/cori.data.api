import { factoryDestination as D } from "./cori.data.api691.js";
import { factoryLabel as S } from "./cori.data.api692.js";
import { factorySpace as s } from "./cori.data.api658.js";
import { factoryTitle as g } from "./cori.data.api693.js";
import { factoryWhitespace as d } from "./cori.data.api694.js";
import { markdownLineEndingOrSpace as k, markdownSpace as h, markdownLineEnding as L } from "./cori.data.api480.js";
import { normalizeIdentifier as w } from "./cori.data.api483.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const O = {
  name: "definition",
  tokenize: M
}, z = {
  tokenize: y,
  partial: !0
};
function M(t, f, e) {
  const r = this;
  let o;
  return u;
  function u(i) {
    return t.enter("definition"), a(i);
  }
  function a(i) {
    return S.call(
      r,
      t,
      n,
      // Note: we don’t need to reset the way `markdown-rs` does.
      e,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(i);
  }
  function n(i) {
    return o = w(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), i === 58 ? (t.enter("definitionMarker"), t.consume(i), t.exit("definitionMarker"), b) : e(i);
  }
  function b(i) {
    return k(i) ? d(t, l)(i) : l(i);
  }
  function l(i) {
    return D(
      t,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      e,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(i);
  }
  function c(i) {
    return t.attempt(z, m, m)(i);
  }
  function m(i) {
    return h(i) ? s(t, p, "whitespace")(i) : p(i);
  }
  function p(i) {
    return i === null || L(i) ? (t.exit("definition"), r.parser.defined.push(o), f(i)) : e(i);
  }
}
function y(t, f, e) {
  return r;
  function r(n) {
    return k(n) ? d(t, o)(n) : e(n);
  }
  function o(n) {
    return g(t, u, e, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(n);
  }
  function u(n) {
    return h(n) ? s(t, a, "whitespace")(n) : a(n);
  }
  function a(n) {
    return n === null || L(n) ? f(n) : e(n);
  }
}
export {
  O as definition
};
//# sourceMappingURL=cori.data.api664.js.map
