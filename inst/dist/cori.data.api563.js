/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function b(r, t, n, i) {
  return (n & 1 << i) !== 0;
}
function y(r, t, n, i) {
  return (n & 1 << i) >> i;
}
function f(r, t, n) {
  const i = n.byteLength + 7 & -8;
  if (r > 0 || n.byteLength < i) {
    const e = new Uint8Array(i);
    return e.set(r % 8 === 0 ? n.subarray(r >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      x(new h(n, r, t, null, b)).subarray(0, i)
    )), e;
  }
  return n;
}
function x(r) {
  const t = [];
  let n = 0, i = 0, e = 0;
  for (const s of r)
    s && (e |= 1 << i), ++i === 8 && (t[n++] = e, e = i = 0);
  (n === 0 || i > 0) && (t[n++] = e);
  const o = new Uint8Array(t.length + 7 & -8);
  return o.set(t), o;
}
class h {
  constructor(t, n, i, e, o) {
    this.bytes = t, this.length = i, this.context = e, this.get = o, this.bit = n % 8, this.byteIndex = n >> 3, this.byte = t[this.byteIndex++], this.index = 0;
  }
  next() {
    return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), {
      value: this.get(this.context, this.index++, this.byte, this.bit++)
    }) : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function c(r, t, n) {
  if (n - t <= 0)
    return 0;
  if (n - t < 8) {
    let o = 0;
    for (const s of new h(r, t, n - t, r, y))
      o += s;
    return o;
  }
  const i = n >> 3 << 3, e = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    c(r, t, e) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    c(r, i, n) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    l(r, e >> 3, i - e >> 3)
  );
}
function l(r, t, n) {
  let i = 0, e = Math.trunc(t);
  const o = new DataView(r.buffer, r.byteOffset, r.byteLength), s = n === void 0 ? r.byteLength : e + n;
  for (; s - e >= 4; )
    i += u(o.getUint32(e)), e += 4;
  for (; s - e >= 2; )
    i += u(o.getUint16(e)), e += 2;
  for (; s - e >= 1; )
    i += u(o.getUint8(e)), e += 1;
  return i;
}
function u(r) {
  let t = Math.trunc(r);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
export {
  h as BitIterator,
  y as getBit,
  b as getBool,
  x as packBools,
  l as popcnt_array,
  c as popcnt_bit_range,
  u as popcnt_uint32,
  f as truncateBitmap
};
//# sourceMappingURL=cori.data.api563.js.map
