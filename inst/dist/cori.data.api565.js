/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class d {
  constructor(n = 0, e) {
    this.numChunks = n, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
  }
  next() {
    for (; this.chunkIndex < this.numChunks; ) {
      const n = this.chunkIterator.next();
      if (!n.done)
        return n;
      ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
    }
    return { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function k(u) {
  return u.some((n) => n.nullable);
}
function C(u) {
  return u.reduce((n, e) => n + e.nullCount, 0);
}
function m(u) {
  return u.reduce((n, e, r) => (n[r + 1] = n[r] + e.length, n), new Uint32Array(u.length + 1));
}
function I(u, n, e, r) {
  const t = [];
  for (let h = -1, i = u.length; ++h < i; ) {
    const c = u[h], o = n[h], { length: s } = c;
    if (o >= r)
      break;
    if (e >= o + s)
      continue;
    if (o >= e && o + s <= r) {
      t.push(c);
      continue;
    }
    const l = Math.max(0, e - o), a = Math.min(r - o, s);
    t.push(c.slice(l, a - l));
  }
  return t.length === 0 && t.push(u[0].slice(0, 0)), t;
}
function f(u, n, e, r) {
  let t = 0, h = 0, i = n.length - 1;
  do {
    if (t >= i - 1)
      return e < n[i] ? r(u, t, e - n[t]) : null;
    h = t + Math.trunc((i - t) * 0.5), e < n[h] ? i = h : t = h;
  } while (t < i);
}
function g(u, n) {
  return u.getValid(n);
}
function p(u) {
  function n(e, r, t) {
    return u(e[r], t);
  }
  return function(e) {
    const r = this.data;
    return f(r, this._offsets, e, n);
  };
}
function x(u) {
  let n;
  function e(r, t, h) {
    return u(r[t], h, n);
  }
  return function(r, t) {
    const h = this.data;
    n = t;
    const i = f(h, this._offsets, r, e);
    return n = void 0, i;
  };
}
function w(u) {
  let n;
  function e(r, t, h) {
    let i = h, c = 0, o = 0;
    for (let s = t - 1, l = r.length; ++s < l; ) {
      const a = r[s];
      if (~(c = u(a, n, i)))
        return o + c;
      i = 0, o += a.length;
    }
    return -1;
  }
  return function(r, t) {
    n = r;
    const h = this.data, i = typeof t != "number" ? e(h, 0, 0) : f(h, this._offsets, t, e);
    return n = void 0, i;
  };
}
export {
  d as ChunkedIterator,
  f as binarySearch,
  C as computeChunkNullCounts,
  k as computeChunkNullable,
  m as computeChunkOffsets,
  g as isChunkedValid,
  I as sliceChunks,
  p as wrapChunkedCall1,
  x as wrapChunkedCall2,
  w as wrapChunkedIndexOf
};
//# sourceMappingURL=cori.data.api565.js.map
