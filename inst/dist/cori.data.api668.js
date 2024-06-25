import { factorySpace as f } from "./cori.data.api658.js";
import { markdownSpace as d, markdownLineEnding as s } from "./cori.data.api480.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const S = {
  name: "setextUnderline",
  tokenize: h,
  resolveTo: y
};
function y(e, l) {
  let t = e.length, i, r, a;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        i = t;
        break;
      }
      e[t][1].type === "paragraph" && (r = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1), !a && e[t][1].type === "definition" && (a = t);
  const p = {
    type: "setextHeading",
    start: Object.assign({}, e[r][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[r][1].type = "setextHeadingText", a ? (e.splice(r, 0, ["enter", p, l]), e.splice(a + 1, 0, ["exit", e[i][1], l]), e[i][1].end = Object.assign({}, e[a][1].end)) : e[i][1] = p, e.push(["exit", p, l]), e;
}
function h(e, l, t) {
  const i = this;
  let r;
  return a;
  function a(n) {
    let u = i.events.length, g;
    for (; u--; )
      if (i.events[u][1].type !== "lineEnding" && i.events[u][1].type !== "linePrefix" && i.events[u][1].type !== "content") {
        g = i.events[u][1].type === "paragraph";
        break;
      }
    return !i.parser.lazy[i.now().line] && (i.interrupt || g) ? (e.enter("setextHeadingLine"), r = n, p(n)) : t(n);
  }
  function p(n) {
    return e.enter("setextHeadingLineSequence"), o(n);
  }
  function o(n) {
    return n === r ? (e.consume(n), o) : (e.exit("setextHeadingLineSequence"), d(n) ? f(e, x, "lineSuffix")(n) : x(n));
  }
  function x(n) {
    return n === null || s(n) ? (e.exit("setextHeadingLine"), l(n)) : t(n);
  }
}
export {
  S as setextUnderline
};
//# sourceMappingURL=cori.data.api668.js.map
