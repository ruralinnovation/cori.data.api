import { factorySpace as H } from "./cori.data.api669.js";
import { markdownLineEndingOrSpace as m, markdownLineEnding as o, markdownSpace as h } from "./cori.data.api489.js";
import { splice as S } from "./cori.data.api668.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const T = {
  name: "headingAtx",
  tokenize: d,
  resolve: y
};
function y(t, i) {
  let e = t.length - 2, r = 3, a, u;
  return t[r][1].type === "whitespace" && (r += 2), e - 2 > r && t[e][1].type === "whitespace" && (e -= 2), t[e][1].type === "atxHeadingSequence" && (r === e - 1 || e - 4 > r && t[e - 2][1].type === "whitespace") && (e -= r + 1 === e ? 2 : 4), e > r && (a = {
    type: "atxHeadingText",
    start: t[r][1].start,
    end: t[e][1].end
  }, u = {
    type: "chunkText",
    start: t[r][1].start,
    end: t[e][1].end,
    contentType: "text"
  }, S(t, r, e - r + 1, [["enter", a, i], ["enter", u, i], ["exit", u, i], ["exit", a, i]])), t;
}
function d(t, i, e) {
  let r = 0;
  return a;
  function a(n) {
    return t.enter("atxHeading"), u(n);
  }
  function u(n) {
    return t.enter("atxHeadingSequence"), p(n);
  }
  function p(n) {
    return n === 35 && r++ < 6 ? (t.consume(n), p) : n === null || m(n) ? (t.exit("atxHeadingSequence"), x(n)) : e(n);
  }
  function x(n) {
    return n === 35 ? (t.enter("atxHeadingSequence"), g(n)) : n === null || o(n) ? (t.exit("atxHeading"), i(n)) : h(n) ? H(t, x, "whitespace")(n) : (t.enter("atxHeadingText"), l(n));
  }
  function g(n) {
    return n === 35 ? (t.consume(n), g) : (t.exit("atxHeadingSequence"), x(n));
  }
  function l(n) {
    return n === null || n === 35 || m(n) ? (t.exit("atxHeadingText"), x(n)) : (t.consume(n), l);
  }
}
export {
  T as headingAtx
};
//# sourceMappingURL=cori.data.api677.js.map
