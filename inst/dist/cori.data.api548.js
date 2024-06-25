import { splice as y } from "./cori.data.api638.js";
import { SpliceBuffer as w } from "./cori.data.api663.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function E(u) {
  const c = {};
  let e = -1, p, r, n, o, f, s, h;
  const l = new w(u);
  for (; ++e < l.length; ) {
    for (; e in c; )
      e = c[e];
    if (p = l.get(e), e && p[1].type === "chunkFlow" && l.get(e - 1)[1].type === "listItemPrefix" && (s = p[1]._tokenizer.events, n = 0, n < s.length && s[n][1].type === "lineEndingBlank" && (n += 2), n < s.length && s[n][1].type === "content"))
      for (; ++n < s.length && s[n][1].type !== "content"; )
        s[n][1].type === "chunkText" && (s[n][1]._isInFirstContentOfListItem = !0, n++);
    if (p[0] === "enter")
      p[1].contentType && (Object.assign(c, _(l, e)), e = c[e], h = !0);
    else if (p[1]._container) {
      for (n = e, r = void 0; n-- && (o = l.get(n), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank"); )
        o[0] === "enter" && (r && (l.get(r)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", r = n);
      r && (p[1].end = Object.assign({}, l.get(r)[1].start), f = l.slice(r, e), f.unshift(p), l.splice(r, e - r + 1, f));
    }
  }
  return y(u, 0, Number.POSITIVE_INFINITY, l.slice(0)), !h;
}
function _(u, c) {
  const e = u.get(c)[1], p = u.get(c)[2];
  let r = c - 1;
  const n = [], o = e._tokenizer || p.parser[e.contentType](e.start), f = o.events, s = [], h = {};
  let l, m, i = -1, t = e, a = 0, d = 0;
  const g = [d];
  for (; t; ) {
    for (; u.get(++r)[1] !== t; )
      ;
    n.push(r), t._tokenizer || (l = p.sliceStream(t), t.next || l.push(null), m && o.defineSkip(t.start), t._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(l), t._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), m = t, t = t.next;
  }
  for (t = e; ++i < f.length; )
    // Find a void token that includes a break.
    f[i][0] === "exit" && f[i - 1][0] === "enter" && f[i][1].type === f[i - 1][1].type && f[i][1].start.line !== f[i][1].end.line && (d = i + 1, g.push(d), t._tokenizer = void 0, t.previous = void 0, t = t.next);
  for (o.events = [], t ? (t._tokenizer = void 0, t.previous = void 0) : g.pop(), i = g.length; i--; ) {
    const I = f.slice(g[i], g[i + 1]), k = n.pop();
    s.push([k, k + I.length - 1]), u.splice(k, 2, I);
  }
  for (s.reverse(), i = -1; ++i < s.length; )
    h[a + s[i][0]] = a + s[i][1], a += s[i][1] - s[i][0] - 1;
  return h;
}
export {
  w as SpliceBuffer,
  E as subtokenize
};
//# sourceMappingURL=cori.data.api548.js.map
