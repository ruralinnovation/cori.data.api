import { factorySpace as c } from "./cori.data.api639.js";
import { asciiDigit as h, markdownSpace as k } from "./cori.data.api419.js";
import { blankLine as f } from "./cori.data.api640.js";
import { thematicBreak as d } from "./cori.data.api648.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const z = {
  name: "list",
  tokenize: B,
  continuation: {
    tokenize: y
  },
  exit: v
}, P = {
  tokenize: W,
  partial: !0
}, L = {
  tokenize: g,
  partial: !0
};
function B(n, u, r) {
  const t = this, l = t.events[t.events.length - 1];
  let a = l && l[1].type === "linePrefix" ? l[2].sliceSerialize(l[1], !0).length : 0, i = 0;
  return s;
  function s(e) {
    const o = t.containerState.type || (e === 42 || e === 43 || e === 45 ? "listUnordered" : "listOrdered");
    if (o === "listUnordered" ? !t.containerState.marker || e === t.containerState.marker : h(e)) {
      if (t.containerState.type || (t.containerState.type = o, n.enter(o, {
        _container: !0
      })), o === "listUnordered")
        return n.enter("listItemPrefix"), e === 42 || e === 45 ? n.check(d, r, m)(e) : m(e);
      if (!t.interrupt || e === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), p(e);
    }
    return r(e);
  }
  function p(e) {
    return h(e) && ++i < 10 ? (n.consume(e), p) : (!t.interrupt || i < 2) && (t.containerState.marker ? e === t.containerState.marker : e === 41 || e === 46) ? (n.exit("listItemValue"), m(e)) : r(e);
  }
  function m(e) {
    return n.enter("listItemMarker"), n.consume(e), n.exit("listItemMarker"), t.containerState.marker = t.containerState.marker || e, n.check(
      f,
      // Can’t be empty when interrupting.
      t.interrupt ? r : I,
      n.attempt(P, S, x)
    );
  }
  function I(e) {
    return t.containerState.initialBlankLine = !0, a++, S(e);
  }
  function x(e) {
    return k(e) ? (n.enter("listItemPrefixWhitespace"), n.consume(e), n.exit("listItemPrefixWhitespace"), S) : r(e);
  }
  function S(e) {
    return t.containerState.size = a + t.sliceSerialize(n.exit("listItemPrefix"), !0).length, u(e);
  }
}
function y(n, u, r) {
  const t = this;
  return t.containerState._closeFlow = void 0, n.check(f, l, a);
  function l(s) {
    return t.containerState.furtherBlankLines = t.containerState.furtherBlankLines || t.containerState.initialBlankLine, c(n, u, "listItemIndent", t.containerState.size + 1)(s);
  }
  function a(s) {
    return t.containerState.furtherBlankLines || !k(s) ? (t.containerState.furtherBlankLines = void 0, t.containerState.initialBlankLine = void 0, i(s)) : (t.containerState.furtherBlankLines = void 0, t.containerState.initialBlankLine = void 0, n.attempt(L, u, i)(s));
  }
  function i(s) {
    return t.containerState._closeFlow = !0, t.interrupt = void 0, c(n, n.attempt(z, u, r), "linePrefix", t.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function g(n, u, r) {
  const t = this;
  return c(n, l, "listItemIndent", t.containerState.size + 1);
  function l(a) {
    const i = t.events[t.events.length - 1];
    return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === t.containerState.size ? u(a) : r(a);
  }
}
function v(n) {
  n.exit(this.containerState.type);
}
function W(n, u, r) {
  const t = this;
  return c(n, l, "listItemPrefixWhitespace", t.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function l(a) {
    const i = t.events[t.events.length - 1];
    return !k(a) && i && i[1].type === "listItemPrefixWhitespace" ? u(a) : r(a);
  }
}
export {
  z as list
};
//# sourceMappingURL=cori.data.api643.js.map
