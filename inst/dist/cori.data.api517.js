import { memcpy as E } from "./cori.data.api512.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(i, t) {
  const s = Math.ceil(i) * t - 1;
  return (s - s % 64 + 64 || 64) / t;
}
function f(i, t = 0) {
  return i.length >= t ? i.subarray(0, t) : E(new i.constructor(t), i, 0);
}
class c {
  constructor(t, s = 0, e = 1) {
    this.length = Math.ceil(s / e), this.buffer = new t(this.length), this.stride = e, this.BYTES_PER_ELEMENT = t.BYTES_PER_ELEMENT, this.ArrayType = t;
  }
  get byteLength() {
    return Math.ceil(this.length * this.stride) * this.BYTES_PER_ELEMENT;
  }
  get reservedLength() {
    return this.buffer.length / this.stride;
  }
  get reservedByteLength() {
    return this.buffer.byteLength;
  }
  // @ts-ignore
  set(t, s) {
    return this;
  }
  append(t) {
    return this.set(this.length, t);
  }
  reserve(t) {
    if (t > 0) {
      this.length += t;
      const s = this.stride, e = this.length * s, r = this.buffer.length;
      e >= r && this._resize(r === 0 ? n(e * 1, this.BYTES_PER_ELEMENT) : n(e * 2, this.BYTES_PER_ELEMENT));
    }
    return this;
  }
  flush(t = this.length) {
    t = n(t * this.stride, this.BYTES_PER_ELEMENT);
    const s = f(this.buffer, t);
    return this.clear(), s;
  }
  clear() {
    return this.length = 0, this.buffer = new this.ArrayType(), this;
  }
  _resize(t) {
    return this.buffer = f(this.buffer, t);
  }
}
class l extends c {
  last() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.buffer[t];
  }
  set(t, s) {
    return this.reserve(t - this.length + 1), this.buffer[t * this.stride] = s, this;
  }
}
class g extends l {
  constructor() {
    super(Uint8Array, 0, 1 / 8), this.numValid = 0;
  }
  get numInvalid() {
    return this.length - this.numValid;
  }
  get(t) {
    return this.buffer[t >> 3] >> t % 8 & 1;
  }
  set(t, s) {
    const { buffer: e } = this.reserve(t - this.length + 1), r = t >> 3, h = t % 8, u = e[r] >> h & 1;
    return s ? u === 0 && (e[r] |= 1 << h, ++this.numValid) : u === 1 && (e[r] &= ~(1 << h), --this.numValid), this;
  }
  clear() {
    return this.numValid = 0, super.clear();
  }
}
class o extends l {
  constructor(t) {
    super(t.OffsetArrayType, 1, 1);
  }
  append(t) {
    return this.set(this.length - 1, t);
  }
  set(t, s) {
    const e = this.length - 1, r = this.reserve(t - e + 1).buffer;
    return e < t++ && e >= 0 && r.fill(r[e], e, t), r[t] = r[t - 1] + s, this;
  }
  flush(t = this.length - 1) {
    return t > this.length && this.set(t - 1, this.BYTES_PER_ELEMENT > 4 ? BigInt(0) : 0), super.flush(t + 1);
  }
}
export {
  g as BitmapBufferBuilder,
  c as BufferBuilder,
  l as DataBufferBuilder,
  o as OffsetsBufferBuilder
};
//# sourceMappingURL=cori.data.api517.js.map
