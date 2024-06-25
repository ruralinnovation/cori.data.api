import { Type as c } from "./cori.data.api497.js";
import { clampRange as k } from "./cori.data.api553.js";
import { strideForType as S, DataType as y } from "./cori.data.api411.js";
import { Data as V } from "./cori.data.api503.js";
import { computeChunkOffsets as D, isChunkedValid as v, computeChunkNullable as j, computeChunkNullCounts as N, sliceChunks as x, wrapChunkedCall1 as p, wrapChunkedCall2 as z, wrapChunkedIndexOf as A } from "./cori.data.api554.js";
import { instance as m } from "./cori.data.api555.js";
import { instance as g } from "./cori.data.api556.js";
import { instance as b } from "./cori.data.api557.js";
import { instance as F } from "./cori.data.api558.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var w;
const I = {}, O = {};
class o {
  constructor(e) {
    var t, s, n;
    const r = e[0] instanceof o ? e.flatMap((a) => a.data) : e;
    if (r.length === 0 || r.some((a) => !(a instanceof V)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const i = (t = r[0]) === null || t === void 0 ? void 0 : t.type;
    switch (r.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: l, indexOf: T } = I[i.typeId], u = r[0];
        this.isValid = (h) => v(u, h), this.get = (h) => a(u, h), this.set = (h, C) => l(u, h, C), this.indexOf = (h) => T(u, h), this._offsets = [0, u.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, O[i.typeId]), this._offsets = D(r);
        break;
    }
    this.data = r, this.type = i, this.stride = S(i), this.numChildren = (n = (s = i.children) === null || s === void 0 ? void 0 : s.length) !== null && n !== void 0 ? n : 0, this.length = this._offsets.at(-1);
  }
  /**
   * The aggregate size (in bytes) of this Vector's buffers and/or child Vectors.
   */
  get byteLength() {
    return this.data.reduce((e, t) => e + t.byteLength, 0);
  }
  /**
   * Whether this Vector's elements can contain null values.
   */
  get nullable() {
    return j(this.data);
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return N(this.data);
  }
  /**
   * The Array or TypedArray constructor used for the JS representation
   *  of the element's values in {@link Vector.prototype.toArray `toArray()`}.
   */
  get ArrayType() {
    return this.type.ArrayType;
  }
  /**
   * The name that should be printed when the Vector is logged in a message.
   */
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  /**
   * The name of this Vector.
   */
  get VectorName() {
    return `${c[this.type.typeId]}Vector`;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(e) {
    return !1;
  }
  /**
   * Get an element value by position.
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(e) {
    return null;
  }
  /**
   * Set an element value by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(e, t) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(e, t) {
    return -1;
  }
  includes(e, t) {
    return this.indexOf(e, t) > -1;
  }
  /**
   * Iterator for the Vector's elements.
   */
  [Symbol.iterator]() {
    return F.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...e) {
    return new o(this.data.concat(e.flatMap((t) => t.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(e, t) {
    return new o(k(this, e, t, ({ data: s, _offsets: n }, r, i) => x(s, n, r, i)));
  }
  toJSON() {
    return [...this];
  }
  /**
   * Return a JavaScript Array or TypedArray of the Vector's elements.
   *
   * @note If this Vector contains a single Data chunk and the Vector's type is a
   *  primitive numeric type corresponding to one of the JavaScript TypedArrays, this
   *  method returns a zero-copy slice of the underlying TypedArray values. If there's
   *  more than one chunk, the resulting TypedArray will be a copy of the data from each
   *  chunk's underlying TypedArray values.
   *
   * @returns An Array or TypedArray of the Vector's elements, based on the Vector's DataType.
   */
  toArray() {
    const { type: e, data: t, length: s, stride: n, ArrayType: r } = this;
    switch (e.typeId) {
      case c.Int:
      case c.Float:
      case c.Decimal:
      case c.Time:
      case c.Timestamp:
        switch (t.length) {
          case 0:
            return new r();
          case 1:
            return t[0].values.subarray(0, s * n);
          default:
            return t.reduce((i, { values: a, length: l }) => (i.array.set(a.subarray(0, l * n), i.offset), i.offset += l * n, i), { array: new r(s * n), offset: 0 }).array;
        }
    }
    return [...this];
  }
  /**
   * Returns a string representation of the Vector.
   *
   * @returns A string representation of the Vector.
   */
  toString() {
    return `[${[...this].join(",")}]`;
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(e) {
    var t;
    return this.getChildAt((t = this.type.children) === null || t === void 0 ? void 0 : t.findIndex((s) => s.name === e));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(e) {
    return e > -1 && e < this.numChildren ? new o(this.data.map(({ children: t }) => t[e])) : null;
  }
  get isMemoized() {
    return y.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
  }
  /**
   * Adds memoization to the Vector's {@link get} method. For dictionary
   * vectors, this method return a vector that memoizes only the dictionary
   * values.
   *
   * Memoization is very useful when decoding a value is expensive such as
   * Utf8. The memoization creates a cache of the size of the Vector and
   * therefore increases memory usage.
   *
   * @returns A new vector that memoizes calls to {@link get}.
   */
  memoize() {
    if (y.isDictionary(this.type)) {
      const e = new f(this.data[0].dictionary), t = this.data.map((s) => {
        const n = s.clone();
        return n.dictionary = e, n;
      });
      return new o(t);
    }
    return new f(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A new vector without memoization.
   */
  unmemoize() {
    if (y.isDictionary(this.type) && this.isMemoized) {
      const e = this.data[0].dictionary.unmemoize(), t = this.data.map((s) => {
        const n = s.clone();
        return n.dictionary = e, n;
      });
      return new o(t);
    }
    return this;
  }
}
w = Symbol.toStringTag;
o[w] = ((d) => {
  d.type = y.prototype, d.data = [], d.length = 0, d.stride = 1, d.numChildren = 0, d._offsets = new Uint32Array([0]), d[Symbol.isConcatSpreadable] = !0;
  const e = Object.keys(c).map((t) => c[t]).filter((t) => typeof t == "number" && t !== c.NONE);
  for (const t of e) {
    const s = m.getVisitFnByTypeId(t), n = g.getVisitFnByTypeId(t), r = b.getVisitFnByTypeId(t);
    I[t] = { get: s, set: n, indexOf: r }, O[t] = Object.create(d, {
      isValid: { value: p(v) },
      get: { value: p(m.getVisitFnByTypeId(t)) },
      set: { value: z(g.getVisitFnByTypeId(t)) },
      indexOf: { value: A(b.getVisitFnByTypeId(t)) }
    });
  }
  return "Vector";
})(o.prototype);
class f extends o {
  constructor(e) {
    super(e.data);
    const t = this.get, s = this.set, n = this.slice, r = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(i) {
        const a = r[i];
        if (a !== void 0)
          return a;
        const l = t.call(this, i);
        return r[i] = l, l;
      }
    }), Object.defineProperty(this, "set", {
      value(i, a) {
        s.call(this, i, a), r[i] = a;
      }
    }), Object.defineProperty(this, "slice", {
      value: (i, a) => new f(n.call(this, i, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new o(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}
export {
  o as Vector
};
//# sourceMappingURL=cori.data.api410.js.map
