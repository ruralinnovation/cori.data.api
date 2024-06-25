import { factoryDestination as y } from "./cori.data.api677.js";
import { factoryLabel as d } from "./cori.data.api678.js";
import { factoryTitle as M } from "./cori.data.api679.js";
import { factoryWhitespace as f } from "./cori.data.api680.js";
import { markdownLineEndingOrSpace as m } from "./cori.data.api469.js";
import { push as k, splice as L } from "./cori.data.api643.js";
import { normalizeIdentifier as g } from "./cori.data.api448.js";
import { resolveAll as h } from "./cori.data.api647.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const W = {
  name: "labelEnd",
  tokenize: D,
  resolveTo: S,
  resolveAll: O
}, E = {
  tokenize: T
}, z = {
  tokenize: w
}, x = {
  tokenize: C
};
function O(e) {
  let u = -1;
  for (; ++u < e.length; ) {
    const i = e[u][1];
    (i.type === "labelImage" || i.type === "labelLink" || i.type === "labelEnd") && (e.splice(u + 1, i.type === "labelImage" ? 4 : 2), i.type = "data", u++);
  }
  return e;
}
function S(e, u) {
  let i = e.length, l = 0, a, n, o, t;
  for (; i--; )
    if (a = e[i][1], n) {
      if (a.type === "link" || a.type === "labelLink" && a._inactive)
        break;
      e[i][0] === "enter" && a.type === "labelLink" && (a._inactive = !0);
    } else if (o) {
      if (e[i][0] === "enter" && (a.type === "labelImage" || a.type === "labelLink") && !a._balanced && (n = i, a.type !== "labelLink")) {
        l = 2;
        break;
      }
    } else
      a.type === "labelEnd" && (o = i);
  const p = {
    type: e[n][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[n][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, b = {
    type: "label",
    start: Object.assign({}, e[n][1].start),
    end: Object.assign({}, e[o][1].end)
  }, c = {
    type: "labelText",
    start: Object.assign({}, e[n + l + 2][1].end),
    end: Object.assign({}, e[o - 2][1].start)
  };
  return t = [["enter", p, u], ["enter", b, u]], t = k(t, e.slice(n + 1, n + l + 3)), t = k(t, [["enter", c, u]]), t = k(t, h(u.parser.constructs.insideSpan.null, e.slice(n + l + 4, o - 3), u)), t = k(t, [["exit", c, u], e[o - 2], e[o - 1], ["exit", b, u]]), t = k(t, e.slice(o + 1)), t = k(t, [["exit", p, u]]), L(e, n, e.length, t), e;
}
function D(e, u, i) {
  const l = this;
  let a = l.events.length, n, o;
  for (; a--; )
    if ((l.events[a][1].type === "labelImage" || l.events[a][1].type === "labelLink") && !l.events[a][1]._balanced) {
      n = l.events[a][1];
      break;
    }
  return t;
  function t(s) {
    return n ? n._inactive ? r(s) : (o = l.parser.defined.includes(g(l.sliceSerialize({
      start: n.end,
      end: l.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelEnd"), p) : i(s);
  }
  function p(s) {
    return s === 40 ? e.attempt(E, c, o ? c : r)(s) : s === 91 ? e.attempt(z, c, o ? b : r)(s) : o ? c(s) : r(s);
  }
  function b(s) {
    return e.attempt(x, c, r)(s);
  }
  function c(s) {
    return u(s);
  }
  function r(s) {
    return n._balanced = !0, i(s);
  }
}
function T(e, u, i) {
  return l;
  function l(r) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), a;
  }
  function a(r) {
    return m(r) ? f(e, n)(r) : n(r);
  }
  function n(r) {
    return r === 41 ? c(r) : y(e, o, t, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(r);
  }
  function o(r) {
    return m(r) ? f(e, p)(r) : c(r);
  }
  function t(r) {
    return i(r);
  }
  function p(r) {
    return r === 34 || r === 39 || r === 40 ? M(e, b, i, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(r) : c(r);
  }
  function b(r) {
    return m(r) ? f(e, c)(r) : c(r);
  }
  function c(r) {
    return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), u) : i(r);
  }
}
function w(e, u, i) {
  const l = this;
  return a;
  function a(t) {
    return d.call(l, e, n, o, "reference", "referenceMarker", "referenceString")(t);
  }
  function n(t) {
    return l.parser.defined.includes(g(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))) ? u(t) : i(t);
  }
  function o(t) {
    return i(t);
  }
}
function C(e, u, i) {
  return l;
  function l(n) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(n), e.exit("referenceMarker"), a;
  }
  function a(n) {
    return n === 93 ? (e.enter("referenceMarker"), e.consume(n), e.exit("referenceMarker"), e.exit("reference"), u) : i(n);
  }
}
export {
  W as labelEnd
};
//# sourceMappingURL=cori.data.api666.js.map
