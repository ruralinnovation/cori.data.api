import { decodeNumericCharacterReference as Be } from "./cori.data.api367.js";
import { decodeString as Re } from "./cori.data.api368.js";
import { normalizeIdentifier as T } from "./cori.data.api369.js";
import { decodeNamedCharacterReference as Ce } from "./cori.data.api370.js";
import { postprocess as He } from "./cori.data.api371.js";
import { parse as Le } from "./cori.data.api372.js";
import { preprocess as ze } from "./cori.data.api373.js";
import { stringifyPosition as I } from "./cori.data.api374.js";
import { toString as Pe } from "./cori.data.api375.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const M = {}.hasOwnProperty;
function We(o, a, l) {
  return typeof a != "string" && (l = a, a = void 0), Oe(l)(He(Le(l).document().write(ze()(o, a, !0))));
}
function Oe(o) {
  const a = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: r(P),
      autolinkProtocol: p,
      autolinkEmail: p,
      atxHeading: r(H),
      blockQuote: r(me),
      characterEscape: p,
      characterReference: p,
      codeFenced: r(C),
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: h,
      codeIndented: r(C, h),
      codeText: r(xe, h),
      codeTextData: p,
      data: p,
      codeFlowValue: p,
      definition: r(ye),
      definitionDestinationString: h,
      definitionLabelString: h,
      definitionTitleString: h,
      emphasis: r(be),
      hardBreakEscape: r(L),
      hardBreakTrailing: r(L),
      htmlFlow: r(z, h),
      htmlFlowData: p,
      htmlText: r(z, h),
      htmlTextData: p,
      image: r(Se),
      label: h,
      link: r(P),
      listItem: r(we),
      listItemValue: U,
      listOrdered: r(O, N),
      listUnordered: r(O),
      paragraph: r(Ie),
      reference: he,
      referenceString: h,
      resourceDestinationString: h,
      resourceTitleString: h,
      setextHeading: r(H),
      strong: r(Te),
      thematicBreak: r(Fe)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: X,
      autolink: c(),
      autolinkEmail: ge,
      autolinkProtocol: ke,
      blockQuote: c(),
      characterEscapeValue: k,
      characterReferenceMarkerHexadecimal: R,
      characterReferenceMarkerNumeric: R,
      characterReferenceValue: fe,
      characterReference: pe,
      codeFenced: c(W),
      codeFencedFence: A,
      codeFencedFenceInfo: _,
      codeFencedFenceMeta: j,
      codeFlowValue: k,
      codeIndented: c($),
      codeText: c(ie),
      codeTextData: k,
      data: k,
      definition: c(),
      definitionDestinationString: K,
      definitionLabelString: G,
      definitionTitleString: J,
      emphasis: c(),
      hardBreakEscape: c(B),
      hardBreakTrailing: c(B),
      htmlFlow: c(te),
      htmlFlowData: k,
      htmlText: c(ne),
      htmlTextData: k,
      image: c(se),
      label: ce,
      labelText: re,
      lineEnding: ee,
      link: c(ae),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: ue,
      resourceDestinationString: oe,
      resourceTitleString: le,
      resource: de,
      setextHeading: c(v),
      setextHeadingLineSequence: Z,
      setextHeadingText: Y,
      strong: c(),
      thematicBreak: c()
    }
  };
  V(a, (o || {}).mdastExtensions || []);
  const l = {};
  return d;
  function d(e) {
    let t = {
      type: "root",
      children: []
    };
    const n = {
      stack: [t],
      tokenStack: [],
      config: a,
      enter: E,
      exit: F,
      buffer: h,
      resume: q,
      data: l
    }, i = [];
    let s = -1;
    for (; ++s < e.length; )
      if (e[s][1].type === "listOrdered" || e[s][1].type === "listUnordered")
        if (e[s][0] === "enter")
          i.push(s);
        else {
          const f = i.pop();
          s = Q(e, f, s);
        }
    for (s = -1; ++s < e.length; ) {
      const f = a[e[s][0]];
      M.call(f, e[s][1].type) && f[e[s][1].type].call(Object.assign({
        sliceSerialize: e[s][2].sliceSerialize
      }, n), e[s][1]);
    }
    if (n.tokenStack.length > 0) {
      const f = n.tokenStack[n.tokenStack.length - 1];
      (f[1] || D).call(n, void 0, f[0]);
    }
    for (t.position = {
      start: x(e.length > 0 ? e[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: x(e.length > 0 ? e[e.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, s = -1; ++s < a.transforms.length; )
      t = a.transforms[s](t) || t;
    return t;
  }
  function Q(e, t, n) {
    let i = t - 1, s = -1, f = !1, y, g, S, w;
    for (; ++i <= n; ) {
      const u = e[i];
      switch (u[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          u[0] === "enter" ? s++ : s--, w = void 0;
          break;
        }
        case "lineEndingBlank": {
          u[0] === "enter" && (y && !w && !s && !S && (S = i), w = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          w = void 0;
      }
      if (!s && u[0] === "enter" && u[1].type === "listItemPrefix" || s === -1 && u[0] === "exit" && (u[1].type === "listUnordered" || u[1].type === "listOrdered")) {
        if (y) {
          let b = i;
          for (g = void 0; b--; ) {
            const m = e[b];
            if (m[1].type === "lineEnding" || m[1].type === "lineEndingBlank") {
              if (m[0] === "exit")
                continue;
              g && (e[g][1].type = "lineEndingBlank", f = !0), m[1].type = "lineEnding", g = b;
            } else if (!(m[1].type === "linePrefix" || m[1].type === "blockQuotePrefix" || m[1].type === "blockQuotePrefixWhitespace" || m[1].type === "blockQuoteMarker" || m[1].type === "listItemIndent"))
              break;
          }
          S && (!g || S < g) && (y._spread = !0), y.end = Object.assign({}, g ? e[g][1].start : u[1].end), e.splice(g || i, 0, ["exit", y, u[2]]), i++, n++;
        }
        if (u[1].type === "listItemPrefix") {
          const b = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, u[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          y = b, e.splice(i, 0, ["enter", b, u[2]]), i++, n++, S = void 0, w = !0;
        }
      }
    }
    return e[t][1]._spread = f, n;
  }
  function r(e, t) {
    return n;
    function n(i) {
      E.call(this, e(i), i), t && t.call(this, i);
    }
  }
  function h() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function E(e, t, n) {
    this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n]), e.position = {
      start: x(t.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function c(e) {
    return t;
    function t(n) {
      e && e.call(this, n), F.call(this, n);
    }
  }
  function F(e, t) {
    const n = this.stack.pop(), i = this.tokenStack.pop();
    if (i)
      i[0].type !== e.type && (t ? t.call(this, e, i[0]) : (i[1] || D).call(this, e, i[0]));
    else
      throw new Error("Cannot close `" + e.type + "` (" + I({
        start: e.start,
        end: e.end
      }) + "): it’s not open");
    n.position.end = x(e.end);
  }
  function q() {
    return Pe(this.stack.pop());
  }
  function N() {
    this.data.expectingFirstListItemValue = !0;
  }
  function U(e) {
    if (this.data.expectingFirstListItemValue) {
      const t = this.stack[this.stack.length - 2];
      t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function _() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.lang = e;
  }
  function j() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.meta = e;
  }
  function A() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function W() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function $() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.value = e.replace(/(\r?\n|\r)$/g, "");
  }
  function G(e) {
    const t = this.resume(), n = this.stack[this.stack.length - 1];
    n.label = t, n.identifier = T(this.sliceSerialize(e)).toLowerCase();
  }
  function J() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.title = e;
  }
  function K() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.url = e;
  }
  function X(e) {
    const t = this.stack[this.stack.length - 1];
    if (!t.depth) {
      const n = this.sliceSerialize(e).length;
      t.depth = n;
    }
  }
  function Y() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function Z(e) {
    const t = this.stack[this.stack.length - 1];
    t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
  }
  function v() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function p(e) {
    const n = this.stack[this.stack.length - 1].children;
    let i = n[n.length - 1];
    (!i || i.type !== "text") && (i = Ee(), i.position = {
      start: x(e.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, n.push(i)), this.stack.push(i);
  }
  function k(e) {
    const t = this.stack.pop();
    t.value += this.sliceSerialize(e), t.position.end = x(e.end);
  }
  function ee(e) {
    const t = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const n = t.children[t.children.length - 1];
      n.position.end = x(e.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && a.canContainEols.includes(t.type) && (p.call(this, e), k.call(this, e));
  }
  function B() {
    this.data.atHardBreak = !0;
  }
  function te() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function ne() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function ie() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function ae() {
    const e = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const t = this.data.referenceType || "shortcut";
      e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
    } else
      delete e.identifier, delete e.label;
    this.data.referenceType = void 0;
  }
  function se() {
    const e = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const t = this.data.referenceType || "shortcut";
      e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
    } else
      delete e.identifier, delete e.label;
    this.data.referenceType = void 0;
  }
  function re(e) {
    const t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
    n.label = Re(t), n.identifier = T(t).toLowerCase();
  }
  function ce() {
    const e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, n.type === "link") {
      const i = e.children;
      n.children = i;
    } else
      n.alt = t;
  }
  function oe() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.url = e;
  }
  function le() {
    const e = this.resume(), t = this.stack[this.stack.length - 1];
    t.title = e;
  }
  function de() {
    this.data.inReference = void 0;
  }
  function he() {
    this.data.referenceType = "collapsed";
  }
  function ue(e) {
    const t = this.resume(), n = this.stack[this.stack.length - 1];
    n.label = t, n.identifier = T(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
  }
  function R(e) {
    this.data.characterReferenceType = e.type;
  }
  function fe(e) {
    const t = this.sliceSerialize(e), n = this.data.characterReferenceType;
    let i;
    n ? (i = Be(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : i = Ce(t);
    const s = this.stack[this.stack.length - 1];
    s.value += i;
  }
  function pe(e) {
    const t = this.stack.pop();
    t.position.end = x(e.end);
  }
  function ke(e) {
    k.call(this, e);
    const t = this.stack[this.stack.length - 1];
    t.url = this.sliceSerialize(e);
  }
  function ge(e) {
    k.call(this, e);
    const t = this.stack[this.stack.length - 1];
    t.url = "mailto:" + this.sliceSerialize(e);
  }
  function me() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function C() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function xe() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ye() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function be() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function H() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function L() {
    return {
      type: "break"
    };
  }
  function z() {
    return {
      type: "html",
      value: ""
    };
  }
  function Se() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function P() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function O(e) {
    return {
      type: "list",
      ordered: e.type === "listOrdered",
      start: null,
      spread: e._spread,
      children: []
    };
  }
  function we(e) {
    return {
      type: "listItem",
      spread: e._spread,
      checked: null,
      children: []
    };
  }
  function Ie() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Te() {
    return {
      type: "strong",
      children: []
    };
  }
  function Ee() {
    return {
      type: "text",
      value: ""
    };
  }
  function Fe() {
    return {
      type: "thematicBreak"
    };
  }
}
function x(o) {
  return {
    line: o.line,
    column: o.column,
    offset: o.offset
  };
}
function V(o, a) {
  let l = -1;
  for (; ++l < a.length; ) {
    const d = a[l];
    Array.isArray(d) ? V(o, d) : De(o, d);
  }
}
function De(o, a) {
  let l;
  for (l in a)
    if (M.call(a, l))
      switch (l) {
        case "canContainEols": {
          const d = a[l];
          d && o[l].push(...d);
          break;
        }
        case "transforms": {
          const d = a[l];
          d && o[l].push(...d);
          break;
        }
        case "enter":
        case "exit": {
          const d = a[l];
          d && Object.assign(o[l], d);
          break;
        }
      }
}
function D(o, a) {
  throw o ? new Error("Cannot close `" + o.type + "` (" + I({
    start: o.start,
    end: o.end
  }) + "): a different token (`" + a.type + "`, " + I({
    start: a.start,
    end: a.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + a.type + "`, " + I({
    start: a.start,
    end: a.end
  }) + ") is still open");
}
export {
  We as fromMarkdown
};
//# sourceMappingURL=cori.data.api233.js.map
