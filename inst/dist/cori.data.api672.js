import { push as d, splice as m } from "./cori.data.api654.js";
import { classifyCharacter as g } from "./cori.data.api687.js";
import { resolveAll as S } from "./cori.data.api658.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const k = {
  name: "attention",
  tokenize: q,
  resolveAll: b
};
function b(t, r) {
  let e = -1, i, o, a, c, l, n, s, f;
  for (; ++e < t.length; )
    if (t[e][0] === "enter" && t[e][1].type === "attentionSequence" && t[e][1]._close) {
      for (i = e; i--; )
        if (t[i][0] === "exit" && t[i][1].type === "attentionSequence" && t[i][1]._open && // If the markers are the same:
        r.sliceSerialize(t[i][1]).charCodeAt(0) === r.sliceSerialize(t[e][1]).charCodeAt(0)) {
          if ((t[i][1]._close || t[e][1]._open) && (t[e][1].end.offset - t[e][1].start.offset) % 3 && !((t[i][1].end.offset - t[i][1].start.offset + t[e][1].end.offset - t[e][1].start.offset) % 3))
            continue;
          n = t[i][1].end.offset - t[i][1].start.offset > 1 && t[e][1].end.offset - t[e][1].start.offset > 1 ? 2 : 1;
          const u = Object.assign({}, t[i][1].end), p = Object.assign({}, t[e][1].start);
          h(u, -n), h(p, n), c = {
            type: n > 1 ? "strongSequence" : "emphasisSequence",
            start: u,
            end: Object.assign({}, t[i][1].end)
          }, l = {
            type: n > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, t[e][1].start),
            end: p
          }, a = {
            type: n > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, t[i][1].end),
            end: Object.assign({}, t[e][1].start)
          }, o = {
            type: n > 1 ? "strong" : "emphasis",
            start: Object.assign({}, c.start),
            end: Object.assign({}, l.end)
          }, t[i][1].end = Object.assign({}, c.start), t[e][1].start = Object.assign({}, l.end), s = [], t[i][1].end.offset - t[i][1].start.offset && (s = d(s, [["enter", t[i][1], r], ["exit", t[i][1], r]])), s = d(s, [["enter", o, r], ["enter", c, r], ["exit", c, r], ["enter", a, r]]), s = d(s, S(r.parser.constructs.insideSpan.null, t.slice(i + 1, e), r)), s = d(s, [["exit", a, r], ["enter", l, r], ["exit", l, r], ["exit", o, r]]), t[e][1].end.offset - t[e][1].start.offset ? (f = 2, s = d(s, [["enter", t[e][1], r], ["exit", t[e][1], r]])) : f = 0, m(t, i - 1, e - i + 3, s), e = i + s.length - f - 2;
          break;
        }
    }
  for (e = -1; ++e < t.length; )
    t[e][1].type === "attentionSequence" && (t[e][1].type = "data");
  return t;
}
function q(t, r) {
  const e = this.parser.constructs.attentionMarkers.null, i = this.previous, o = g(i);
  let a;
  return c;
  function c(n) {
    return a = n, t.enter("attentionSequence"), l(n);
  }
  function l(n) {
    if (n === a)
      return t.consume(n), l;
    const s = t.exit("attentionSequence"), f = g(n), u = !f || f === 2 && o || e.includes(n), p = !o || o === 2 && f || e.includes(i);
    return s._open = !!(a === 42 ? u : u && (o || !p)), s._close = !!(a === 42 ? p : p && (f || !u)), r(n);
  }
}
function h(t, r) {
  t.column += r, t.offset += r, t._bufferIndex += r;
}
export {
  k as attention
};
//# sourceMappingURL=cori.data.api672.js.map
