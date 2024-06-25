/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const b = {
  resolveAll: g()
}, k = x("string"), m = x("text");
function x(r) {
  return {
    tokenize: f,
    resolveAll: g(
      r === "text" ? p : void 0
    )
  };
  function f(t) {
    const i = this, e = this.parser.constructs[r], n = t.attempt(e, s, a);
    return s;
    function s(l) {
      return u(l) ? n(l) : a(l);
    }
    function a(l) {
      if (l === null) {
        t.consume(l);
        return;
      }
      return t.enter("data"), t.consume(l), o;
    }
    function o(l) {
      return u(l) ? (t.exit("data"), n(l)) : (t.consume(l), o);
    }
    function u(l) {
      if (l === null)
        return !0;
      const c = e[l];
      let d = -1;
      if (c)
        for (; ++d < c.length; ) {
          const h = c[d];
          if (!h.previous || h.previous.call(i, i.previous))
            return !0;
        }
      return !1;
    }
  }
}
function g(r) {
  return f;
  function f(t, i) {
    let e = -1, n;
    for (; ++e <= t.length; )
      n === void 0 ? t[e] && t[e][1].type === "data" && (n = e, e++) : (!t[e] || t[e][1].type !== "data") && (e !== n + 2 && (t[n][1].end = t[e - 1][1].end, t.splice(n + 2, e - n - 2), e = n + 2), n = void 0);
    return r ? r(t, i) : t;
  }
}
function p(r, f) {
  let t = 0;
  for (; ++t <= r.length; )
    if ((t === r.length || r[t][1].type === "lineEnding") && r[t - 1][1].type === "data") {
      const i = r[t - 1][1], e = f.sliceStream(i);
      let n = e.length, s = -1, a = 0, o;
      for (; n--; ) {
        const u = e[n];
        if (typeof u == "string") {
          for (s = u.length; u.charCodeAt(s - 1) === 32; )
            a++, s--;
          if (s)
            break;
          s = -1;
        } else if (u === -2)
          o = !0, a++;
        else if (u !== -1) {
          n++;
          break;
        }
      }
      if (a) {
        const u = {
          type: t === r.length || o || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: i.end.line,
            column: i.end.column - a,
            offset: i.end.offset - a,
            _index: i.start._index + n,
            _bufferIndex: n ? s : i.start._bufferIndex + s
          },
          end: Object.assign({}, i.end)
        };
        i.end = Object.assign({}, u.start), i.start.offset === i.end.offset ? Object.assign(i, u) : (r.splice(
          t,
          0,
          ["enter", u, f],
          ["exit", u, f]
        ), t += 2);
      }
      t++;
    }
  return r;
}
export {
  b as resolver,
  k as string,
  m as text
};
//# sourceMappingURL=cori.data.api634.js.map
