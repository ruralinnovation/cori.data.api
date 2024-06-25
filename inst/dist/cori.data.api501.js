import { __asyncGenerator as d, __await as o, __asyncDelegator as c, __asyncValues as h } from "./cori.data.api500.js";
import { encodeUtf8 as U } from "./cori.data.api572.js";
import { isIteratorResult as p, isFlatbuffersByteBuffer as _, isIterable as I, isPromise as B, isAsyncIterable as x } from "./cori.data.api516.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const m = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function O(n) {
  const e = n[0] ? [n[0]] : [];
  let t, r, l, f;
  for (let i, y, a = 0, s = 0, b = n.length; ++a < b; ) {
    if (i = e[s], y = n[a], !i || !y || i.buffer !== y.buffer || y.byteOffset < i.byteOffset) {
      y && (e[++s] = y);
      continue;
    }
    if ({ byteOffset: t, byteLength: l } = i, { byteOffset: r, byteLength: f } = y, t + l < r || r + f < t) {
      y && (e[++s] = y);
      continue;
    }
    e[s] = new Uint8Array(i.buffer, t, r - t + f);
  }
  return e;
}
function A(n, e, t = 0, r = e.byteLength) {
  const l = n.byteLength, f = new Uint8Array(n.buffer, n.byteOffset, l), i = new Uint8Array(e.buffer, e.byteOffset, Math.min(r, l));
  return f.set(i, t), n;
}
function T(n, e) {
  const t = O(n), r = t.reduce((b, L) => b + L.byteLength, 0);
  let l, f, i, y = 0, a = -1;
  const s = Math.min(e || Number.POSITIVE_INFINITY, r);
  for (const b = t.length; ++a < b; ) {
    if (l = t[a], f = l.subarray(0, Math.min(l.length, s - y)), s <= y + f.length) {
      f.length < l.length ? t[a] = l.subarray(f.length) : f.length === l.length && a++, i ? A(i, f, y) : i = f;
      break;
    }
    A(i || (i = new Uint8Array(s)), f, y), y += f.length;
  }
  return [i || new Uint8Array(0), t.slice(a), r - (i ? i.byteLength : 0)];
}
function u(n, e) {
  let t = p(e) ? e.value : e;
  return t instanceof n ? n === Uint8Array ? new n(t.buffer, t.byteOffset, t.byteLength) : t : t ? (typeof t == "string" && (t = U(t)), t instanceof ArrayBuffer ? new n(t) : t instanceof m ? new n(t) : _(t) ? u(n, t.bytes()) : ArrayBuffer.isView(t) ? t.byteLength <= 0 ? new n(0) : new n(t.buffer, t.byteOffset, t.byteLength / n.BYTES_PER_ELEMENT) : n.from(t)) : new n(0);
}
const P = (n) => u(Int32Array, n), R = (n) => u(BigInt64Array, n), j = (n) => u(Uint8Array, n), g = (n) => (n.next(), n);
function* S(n, e) {
  const t = function* (l) {
    yield l;
  }, r = typeof e == "string" || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || e instanceof m ? t(e) : I(e) ? e : t(e);
  return yield* g(function* (l) {
    let f = null;
    do
      f = l.next(yield u(n, f));
    while (!f.done);
  }(r[Symbol.iterator]())), new n();
}
const F = (n) => S(Uint8Array, n);
function w(n, e) {
  return d(this, arguments, function* () {
    if (B(e))
      return yield o(yield o(yield* c(h(w(n, yield o(e))))));
    const r = function(i) {
      return d(this, arguments, function* () {
        yield yield o(yield o(i));
      });
    }, l = function(i) {
      return d(this, arguments, function* () {
        yield o(yield* c(h(g(function* (y) {
          let a = null;
          do
            a = y.next(yield a == null ? void 0 : a.value);
          while (!a.done);
        }(i[Symbol.iterator]())))));
      });
    }, f = typeof e == "string" || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || e instanceof m ? r(e) : I(e) ? l(e) : x(e) ? e : r(e);
    return yield o(
      // otherwise if AsyncIterable, use it
      yield* c(h(g(function(i) {
        return d(this, arguments, function* () {
          let y = null;
          do
            y = yield o(i.next(yield yield o(u(n, y))));
          while (!y.done);
        });
      }(f[Symbol.asyncIterator]()))))
    ), yield o(new n());
  });
}
const Y = (n) => w(Uint8Array, n);
function v(n, e, t) {
  if (n !== 0) {
    t = t.slice(0, e);
    for (let r = -1, l = t.length; ++r < l; )
      t[r] += n;
  }
  return t.subarray(0, e);
}
function D(n, e) {
  let t = 0;
  const r = n.length;
  if (r !== e.length)
    return !1;
  if (r > 0)
    do
      if (n[t] !== e[t])
        return !1;
    while (++t < r);
  return !0;
}
export {
  D as compareArrayLike,
  T as joinUint8Arrays,
  A as memcpy,
  v as rebaseValueOffsets,
  u as toArrayBufferView,
  w as toArrayBufferViewAsyncIterator,
  S as toArrayBufferViewIterator,
  R as toBigInt64Array,
  P as toInt32Array,
  j as toUint8Array,
  Y as toUint8ArrayAsyncIterator,
  F as toUint8ArrayIterator
};
//# sourceMappingURL=cori.data.api501.js.map
