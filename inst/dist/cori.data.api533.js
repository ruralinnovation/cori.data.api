import { factorySpace as I } from "./cori.data.api629.js";
import { markdownLineEnding as N } from "./cori.data.api388.js";
import { splice as F } from "./cori.data.api628.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const A = {
  tokenize: T
}, y = {
  tokenize: E
};
function T(i) {
  const e = this, l = [];
  let s = 0, t, a, d;
  return w;
  function w(n) {
    if (s < l.length) {
      const o = l[s];
      return e.containerState = o[1], i.attempt(
        o[0].continuation,
        b,
        p
      )(n);
    }
    return p(n);
  }
  function b(n) {
    if (s++, e.containerState._closeFlow) {
      e.containerState._closeFlow = void 0, t && x();
      const o = e.events.length;
      let u = o, r;
      for (; u--; )
        if (e.events[u][0] === "exit" && e.events[u][1].type === "chunkFlow") {
          r = e.events[u][1].end;
          break;
        }
      f(s);
      let c = o;
      for (; c < e.events.length; )
        e.events[c][1].end = Object.assign({}, r), c++;
      return F(
        e.events,
        u + 1,
        0,
        e.events.slice(o)
      ), e.events.length = c, p(n);
    }
    return w(n);
  }
  function p(n) {
    if (s === l.length) {
      if (!t)
        return m(n);
      if (t.currentConstruct && t.currentConstruct.concrete)
        return v(n);
      e.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
    }
    return e.containerState = {}, i.check(
      y,
      z,
      B
    )(n);
  }
  function z(n) {
    return t && x(), f(s), m(n);
  }
  function B(n) {
    return e.parser.lazy[e.now().line] = s !== l.length, d = e.now().offset, v(n);
  }
  function m(n) {
    return e.containerState = {}, i.attempt(
      y,
      _,
      v
    )(n);
  }
  function _(n) {
    return s++, l.push([e.currentConstruct, e.containerState]), m(n);
  }
  function v(n) {
    if (n === null) {
      t && x(), f(0), i.consume(n);
      return;
    }
    return t = t || e.parser.flow(e.now()), i.enter("chunkFlow", {
      contentType: "flow",
      previous: a,
      _tokenizer: t
    }), g(n);
  }
  function g(n) {
    if (n === null) {
      C(i.exit("chunkFlow"), !0), f(0), i.consume(n);
      return;
    }
    return N(n) ? (i.consume(n), C(i.exit("chunkFlow")), s = 0, e.interrupt = void 0, w) : (i.consume(n), g);
  }
  function C(n, o) {
    const u = e.sliceStream(n);
    if (o && u.push(null), n.previous = a, a && (a.next = n), a = n, t.defineSkip(n.start), t.write(u), e.parser.lazy[n.start.line]) {
      let r = t.events.length;
      for (; r--; )
        if (
          // The token starts before the line ending…
          t.events[r][1].start.offset < d && // …and either is not ended yet…
          (!t.events[r][1].end || // …or ends after it.
          t.events[r][1].end.offset > d)
        )
          return;
      const c = e.events.length;
      let h = c, k, S;
      for (; h--; )
        if (e.events[h][0] === "exit" && e.events[h][1].type === "chunkFlow") {
          if (k) {
            S = e.events[h][1].end;
            break;
          }
          k = !0;
        }
      for (f(s), r = c; r < e.events.length; )
        e.events[r][1].end = Object.assign({}, S), r++;
      F(
        e.events,
        h + 1,
        0,
        e.events.slice(c)
      ), e.events.length = r;
    }
  }
  function f(n) {
    let o = l.length;
    for (; o-- > n; ) {
      const u = l[o];
      e.containerState = u[1], u[0].exit.call(e, i);
    }
    l.length = n;
  }
  function x() {
    t.write([null]), a = void 0, t = void 0, e.containerState._closeFlow = void 0;
  }
}
function E(i, e, l) {
  return I(
    i,
    i.attempt(this.parser.constructs.document, e, l),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
export {
  A as document
};
//# sourceMappingURL=cori.data.api533.js.map
