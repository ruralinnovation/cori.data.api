import { markdownLineEnding as V } from "./cori.data.api486.js";
import { push as W, splice as X } from "./cori.data.api653.js";
import { resolveAll as Y } from "./cori.data.api657.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function re(d, u, a) {
  let n = Object.assign(
    a ? Object.assign({}, a) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const f = {}, o = [];
  let s = [], h = [];
  const O = {
    consume: D,
    enter: G,
    exit: H,
    attempt: I(J),
    check: I(P),
    interrupt: I(P, {
      interrupt: !0
    })
  }, t = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: d,
    sliceStream: j,
    sliceSerialize: M,
    now: v,
    defineSkip: R,
    write: L
  };
  let S = u.tokenize.call(t, O);
  return u.resolveAll && o.push(u), t;
  function L(e) {
    return s = W(s, e), q(), s[s.length - 1] !== null ? [] : (T(u, 0), t.events = Y(o, t.events, t), t.events);
  }
  function M(e, r) {
    return $(j(e), r);
  }
  function j(e) {
    return Z(s, e);
  }
  function v() {
    const { line: e, column: r, offset: l, _index: c, _bufferIndex: p } = n;
    return {
      line: e,
      column: r,
      offset: l,
      _index: c,
      _bufferIndex: p
    };
  }
  function R(e) {
    f[e.line] = e.column, g();
  }
  function q() {
    let e;
    for (; n._index < s.length; ) {
      const r = s[n._index];
      if (typeof r == "string")
        for (e = n._index, n._bufferIndex < 0 && (n._bufferIndex = 0); n._index === e && n._bufferIndex < r.length; )
          z(r.charCodeAt(n._bufferIndex));
      else
        z(r);
    }
  }
  function z(e) {
    S = S(e);
  }
  function D(e) {
    V(e) ? (n.line++, n.column = 1, n.offset += e === -3 ? 2 : 1, g()) : e !== -1 && (n.column++, n.offset++), n._bufferIndex < 0 ? n._index++ : (n._bufferIndex++, n._bufferIndex === s[n._index].length && (n._bufferIndex = -1, n._index++)), t.previous = e;
  }
  function G(e, r) {
    const l = r || {};
    return l.type = e, l.start = v(), t.events.push(["enter", l, t]), h.push(l), l;
  }
  function H(e) {
    const r = h.pop();
    return r.end = v(), t.events.push(["exit", r, t]), r;
  }
  function J(e, r) {
    T(e, r.from);
  }
  function P(e, r) {
    r.restore();
  }
  function I(e, r) {
    return l;
    function l(c, p, _) {
      let C, b, B, y;
      return Array.isArray(c) ? A(c) : "tokenize" in c ? (
        // @ts-expect-error Looks like a construct.
        A([c])
      ) : N(c);
      function N(i) {
        return w;
        function w(x) {
          const k = x !== null && i[x], m = x !== null && i.null, U = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(k) ? k : k ? [k] : [],
            ...Array.isArray(m) ? m : m ? [m] : []
          ];
          return A(U)(x);
        }
      }
      function A(i) {
        return C = i, b = 0, i.length === 0 ? _ : E(i[b]);
      }
      function E(i) {
        return w;
        function w(x) {
          return y = K(), B = i, i.partial || (t.currentConstruct = i), i.name && t.parser.constructs.disable.null.includes(i.name) ? F() : i.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            r ? Object.assign(Object.create(t), r) : t,
            O,
            Q,
            F
          )(x);
        }
      }
      function Q(i) {
        return e(B, y), p;
      }
      function F(i) {
        return y.restore(), ++b < C.length ? E(C[b]) : _;
      }
    }
  }
  function T(e, r) {
    e.resolveAll && !o.includes(e) && o.push(e), e.resolve && X(
      t.events,
      r,
      t.events.length - r,
      e.resolve(t.events.slice(r), t)
    ), e.resolveTo && (t.events = e.resolveTo(t.events, t));
  }
  function K() {
    const e = v(), r = t.previous, l = t.currentConstruct, c = t.events.length, p = Array.from(h);
    return {
      restore: _,
      from: c
    };
    function _() {
      n = e, t.previous = r, t.currentConstruct = l, t.events.length = c, h = p, g();
    }
  }
  function g() {
    n.line in f && n.column < 2 && (n.column = f[n.line], n.offset += f[n.line] - 1);
  }
}
function Z(d, u) {
  const a = u.start._index, n = u.start._bufferIndex, f = u.end._index, o = u.end._bufferIndex;
  let s;
  if (a === f)
    s = [d[a].slice(n, o)];
  else {
    if (s = d.slice(a, f), n > -1) {
      const h = s[0];
      typeof h == "string" ? s[0] = h.slice(n) : s.shift();
    }
    o > 0 && s.push(d[f].slice(0, o));
  }
  return s;
}
function $(d, u) {
  let a = -1;
  const n = [];
  let f;
  for (; ++a < d.length; ) {
    const o = d[a];
    let s;
    if (typeof o == "string")
      s = o;
    else
      switch (o) {
        case -5: {
          s = "\r";
          break;
        }
        case -4: {
          s = `
`;
          break;
        }
        case -3: {
          s = `\r
`;
          break;
        }
        case -2: {
          s = u ? " " : "	";
          break;
        }
        case -1: {
          if (!u && f)
            continue;
          s = " ";
          break;
        }
        default:
          s = String.fromCharCode(o);
      }
    f = o === -2, n.push(s);
  }
  return n.join("");
}
export {
  re as createTokenizer
};
//# sourceMappingURL=cori.data.api634.js.map
