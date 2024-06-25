import { factorySpace as a } from "./cori.data.api639.js";
import { markdownLineEnding as l } from "./cori.data.api419.js";
import { subtokenize as p } from "./cori.data.api548.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const d = {
  tokenize: h,
  resolve: s
}, k = {
  tokenize: x,
  partial: !0
};
function s(n) {
  return p(n), n;
}
function h(n, u) {
  let r;
  return i;
  function i(t) {
    return n.enter("content"), r = n.enter("chunkContent", {
      contentType: "content"
    }), o(t);
  }
  function o(t) {
    return t === null ? c(t) : l(t) ? n.check(k, e, c)(t) : (n.consume(t), o);
  }
  function c(t) {
    return n.exit("chunkContent"), n.exit("content"), u(t);
  }
  function e(t) {
    return n.consume(t), n.exit("chunkContent"), r.next = n.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, o;
  }
}
function x(n, u, r) {
  const i = this;
  return o;
  function o(e) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(e), n.exit("lineEnding"), a(n, c, "linePrefix");
  }
  function c(e) {
    if (e === null || l(e))
      return r(e);
    const t = i.events[i.events.length - 1];
    return !i.parser.constructs.disable.null.includes("codeIndented") && t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? u(e) : n.interrupt(i.parser.constructs.flow, r, u)(e);
  }
}
export {
  d as content
};
//# sourceMappingURL=cori.data.api641.js.map
