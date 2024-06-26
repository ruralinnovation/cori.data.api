import { markdownLineEnding as d } from "./cori.data.api479.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const m = {
  name: "codeText",
  tokenize: E,
  resolve: y,
  previous: g
};
function y(e) {
  let r = e.length - 4, u = 3, t, i;
  if ((e[u][1].type === "lineEnding" || e[u][1].type === "space") && (e[r][1].type === "lineEnding" || e[r][1].type === "space")) {
    for (t = u; ++t < r; )
      if (e[t][1].type === "codeTextData") {
        e[u][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", u += 2, r -= 2;
        break;
      }
  }
  for (t = u - 1, r++; ++t <= r; )
    i === void 0 ? t !== r && e[t][1].type !== "lineEnding" && (i = t) : (t === r || e[t][1].type === "lineEnding") && (e[i][1].type = "codeTextData", t !== i + 2 && (e[i][1].end = e[t - 1][1].end, e.splice(i + 2, t - i - 2), r -= t - i - 2, t = i + 2), i = void 0);
  return e;
}
function g(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function E(e, r, u) {
  let t = 0, i, l;
  return T;
  function T(n) {
    return e.enter("codeText"), e.enter("codeTextSequence"), o(n);
  }
  function o(n) {
    return n === 96 ? (e.consume(n), t++, o) : (e.exit("codeTextSequence"), x(n));
  }
  function x(n) {
    return n === null ? u(n) : n === 32 ? (e.enter("space"), e.consume(n), e.exit("space"), x) : n === 96 ? (l = e.enter("codeTextSequence"), i = 0, p(n)) : d(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), x) : (e.enter("codeTextData"), a(n));
  }
  function a(n) {
    return n === null || n === 32 || n === 96 || d(n) ? (e.exit("codeTextData"), x(n)) : (e.consume(n), a);
  }
  function p(n) {
    return n === 96 ? (e.consume(n), i++, p) : i === t ? (e.exit("codeTextSequence"), e.exit("codeText"), r(n)) : (l.type = "codeTextData", a(n));
  }
}
export {
  m as codeText
};
//# sourceMappingURL=cori.data.api692.js.map
