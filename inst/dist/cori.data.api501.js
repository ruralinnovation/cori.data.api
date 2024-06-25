import { Vector as A } from "./cori.data.api418.js";
import { Type as I, BufferType as d } from "./cori.data.api495.js";
import { DataType as y, strideForType as c } from "./cori.data.api419.js";
import { popcnt_bit_range as b, truncateBitmap as v } from "./cori.data.api554.js";
import { Visitor as p } from "./cori.data.api555.js";
import { toUint8Array as h, toArrayBufferView as f, toInt32Array as m, toBigInt64Array as T } from "./cori.data.api499.js";
import { UnionMode as w } from "./cori.data.api556.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const U = -1;
class o {
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get nullable() {
    if (this._nullCount !== 0) {
      const { type: t } = this;
      return y.isSparseUnion(t) ? this.children.some((n) => n.nullable) : y.isDenseUnion(t) ? this.children.some((n) => n.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
    }
    return !0;
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: n, values: l, nullBitmap: i, typeIds: e } = this;
    return n && (t += n.byteLength), l && (t += l.byteLength), i && (t += i.byteLength), e && (t += e.byteLength), this.children.reduce((u, s) => u + s.byteLength, t);
  }
  get nullCount() {
    if (y.isUnion(this.type))
      return this.children.reduce((l, i) => l + i.nullCount, 0);
    let t = this._nullCount, n;
    return t <= U && (n = this.nullBitmap) && (this._nullCount = t = this.length - b(n, this.offset, this.offset + this.length)), t;
  }
  constructor(t, n, l, i, e, u = [], s) {
    this.type = t, this.children = u, this.dictionary = s, this.offset = Math.floor(Math.max(n || 0, 0)), this.length = Math.floor(Math.max(l || 0, 0)), this._nullCount = Math.floor(Math.max(i || 0, -1));
    let a;
    e instanceof o ? (this.stride = e.stride, this.values = e.values, this.typeIds = e.typeIds, this.nullBitmap = e.nullBitmap, this.valueOffsets = e.valueOffsets) : (this.stride = c(t), e && ((a = e[0]) && (this.valueOffsets = a), (a = e[1]) && (this.values = a), (a = e[2]) && (this.nullBitmap = a), (a = e[3]) && (this.typeIds = a)));
  }
  getValid(t) {
    const { type: n } = this;
    if (y.isUnion(n)) {
      const l = n, i = this.children[l.typeIdToChildIndex[this.typeIds[t]]], e = l.mode === w.Dense ? this.valueOffsets[t] : t;
      return i.getValid(e);
    }
    if (this.nullable && this.nullCount > 0) {
      const l = this.offset + t;
      return (this.nullBitmap[l >> 3] & 1 << l % 8) !== 0;
    }
    return !0;
  }
  setValid(t, n) {
    let l;
    const { type: i } = this;
    if (y.isUnion(i)) {
      const e = i, u = this.children[e.typeIdToChildIndex[this.typeIds[t]]], s = e.mode === w.Dense ? this.valueOffsets[t] : t;
      l = u.getValid(s), u.setValid(s, n);
    } else {
      let { nullBitmap: e } = this;
      const { offset: u, length: s } = this, a = u + t, r = 1 << a % 8, B = a >> 3;
      (!e || e.byteLength <= B) && (e = new Uint8Array((u + s + 63 & -64) >> 3).fill(255), this.nullCount > 0 && e.set(v(u, s, this.nullBitmap), 0), Object.assign(this, { nullBitmap: e, _nullCount: -1 }));
      const C = e[B];
      l = (C & r) !== 0, n ? e[B] = C | r : e[B] = C & ~r;
    }
    return l !== !!n && (this._nullCount = this.nullCount + (n ? -1 : 1)), n;
  }
  clone(t = this.type, n = this.offset, l = this.length, i = this._nullCount, e = this, u = this.children) {
    return new o(t, n, l, i, e, u, this.dictionary);
  }
  slice(t, n) {
    const { stride: l, typeId: i, children: e } = this, u = +(this._nullCount === 0) - 1, s = i === 16 ? l : 1, a = this._sliceBuffers(t, n, l, i);
    return this.clone(
      this.type,
      this.offset + t,
      n,
      u,
      a,
      // Don't slice children if we have value offsets (the variable-width types)
      e.length === 0 || this.valueOffsets ? e : this._sliceChildren(e, s * t, s * n)
    );
  }
  _changeLengthAndBackfillNullBitmap(t) {
    if (this.typeId === I.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: n, nullCount: l } = this, i = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, n >> 3);
    i[n >> 3] = (1 << n - (n & -8)) - 1, l > 0 && i.set(v(this.offset, n, this.nullBitmap), 0);
    const e = this.buffers;
    return e[d.VALIDITY] = i, this.clone(this.type, 0, t, l + (t - n), e);
  }
  _sliceBuffers(t, n, l, i) {
    let e;
    const { buffers: u } = this;
    return (e = u[d.TYPE]) && (u[d.TYPE] = e.subarray(t, t + n)), (e = u[d.OFFSET]) && (u[d.OFFSET] = e.subarray(t, t + n + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (e = u[d.DATA]) && (u[d.DATA] = i === 6 ? e : e.subarray(l * t, l * (t + n))), u;
  }
  _sliceChildren(t, n, l) {
    return t.map((i) => i.slice(n, l));
  }
}
o.prototype.children = Object.freeze([]);
class g extends p {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: n, ["offset"]: l = 0, ["length"]: i = 0 } = t;
    return new o(n, l, i, i);
  }
  visitBool(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length >> 3, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitInt(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitFloat(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitUtf8(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.data), e = h(t.nullBitmap), u = m(t.valueOffsets), { ["length"]: s = u.length - 1, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, s, a, [u, i, e]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.data), e = h(t.nullBitmap), u = T(t.valueOffsets), { ["length"]: s = u.length - 1, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, s, a, [u, i, e]);
  }
  visitBinary(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.data), e = h(t.nullBitmap), u = m(t.valueOffsets), { ["length"]: s = u.length - 1, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, s, a, [u, i, e]);
  }
  visitLargeBinary(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.data), e = h(t.nullBitmap), u = T(t.valueOffsets), { ["length"]: s = u.length - 1, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, s, a, [u, i, e]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length / c(n), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitDate(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length / c(n), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitTimestamp(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length / c(n), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitTime(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length / c(n), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitDecimal(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length / c(n), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitList(t) {
    const { ["type"]: n, ["offset"]: l = 0, ["child"]: i } = t, e = h(t.nullBitmap), u = m(t.valueOffsets), { ["length"]: s = u.length - 1, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, s, a, [u, void 0, e], [i]);
  }
  visitStruct(t) {
    const { ["type"]: n, ["offset"]: l = 0, ["children"]: i = [] } = t, e = h(t.nullBitmap), { length: u = i.reduce((a, { length: r }) => Math.max(a, r), 0), nullCount: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, void 0, e], i);
  }
  visitUnion(t) {
    const { ["type"]: n, ["offset"]: l = 0, ["children"]: i = [] } = t, e = f(n.ArrayType, t.typeIds), { ["length"]: u = e.length, ["nullCount"]: s = -1 } = t;
    if (y.isSparseUnion(n))
      return new o(n, l, u, s, [void 0, void 0, void 0, e], i);
    const a = m(t.valueOffsets);
    return new o(n, l, u, s, [a, void 0, void 0, e], i);
  }
  visitDictionary(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.indices.ArrayType, t.data), { ["dictionary"]: u = new A([new g().visit({ type: n.dictionary })]) } = t, { ["length"]: s = e.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, s, a, [void 0, e, i], [], u);
  }
  visitInterval(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length / c(n), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitDuration(t) {
    const { ["type"]: n, ["offset"]: l = 0 } = t, i = h(t.nullBitmap), e = f(n.ArrayType, t.data), { ["length"]: u = e.length, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, e, i]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: n, ["offset"]: l = 0, ["child"]: i = new g().visit({ type: n.valueType }) } = t, e = h(t.nullBitmap), { ["length"]: u = i.length / c(n), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, u, s, [void 0, void 0, e], [i]);
  }
  visitMap(t) {
    const { ["type"]: n, ["offset"]: l = 0, ["child"]: i = new g().visit({ type: n.childType }) } = t, e = h(t.nullBitmap), u = m(t.valueOffsets), { ["length"]: s = u.length - 1, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new o(n, l, s, a, [u, void 0, e], [i]);
  }
}
const L = new g();
function k(O) {
  return L.visit(O);
}
export {
  o as Data,
  U as kUnknownNullCount,
  k as makeData
};
//# sourceMappingURL=cori.data.api501.js.map
