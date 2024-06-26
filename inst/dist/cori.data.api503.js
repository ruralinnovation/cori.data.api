import { Vector as _ } from "./cori.data.api406.js";
import { makeData as c } from "./cori.data.api504.js";
import { MapRow as v, kKeys as y } from "./cori.data.api505.js";
import { strideForType as m } from "./cori.data.api407.js";
import { createIsValidFunction as V } from "./cori.data.api506.js";
import { BitmapBufferBuilder as L, DataBufferBuilder as B, OffsetsBufferBuilder as b } from "./cori.data.api507.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class r {
  /** @nocollapse */
  // @ts-ignore
  static throughNode(e) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  // @ts-ignore
  static throughDOM(e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  /**
   * Construct a builder with the given Arrow DataType with optional null values,
   * which will be interpreted as "null" when set or appended to the `Builder`.
   * @param {{ type: T, nullValues?: any[] }} options A `BuilderOptions` object used to create this `Builder`.
   */
  constructor({ type: e, nullValues: t }) {
    this.length = 0, this.finished = !1, this.type = e, this.children = [], this.nullValues = t, this.stride = m(e), this._nulls = new L(), t && t.length > 0 && (this._isValid = V(t));
  }
  /**
   * Flush the `Builder` and return a `Vector<T>`.
   * @returns {Vector<T>} A `Vector<T>` of the flushed values.
   */
  toVector() {
    return new _([this.flush()]);
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get nullCount() {
    return this._nulls.numInvalid;
  }
  get numChildren() {
    return this.children.length;
  }
  /**
   * @returns The aggregate length (in bytes) of the values that have been written.
   */
  get byteLength() {
    let e = 0;
    const { _offsets: t, _values: s, _nulls: i, _typeIds: h, children: n } = this;
    return t && (e += t.byteLength), s && (e += s.byteLength), i && (e += i.byteLength), h && (e += h.byteLength), n.reduce((o, d) => o + d.byteLength, e);
  }
  /**
   * @returns The aggregate number of rows that have been reserved to write new values.
   */
  get reservedLength() {
    return this._nulls.reservedLength;
  }
  /**
   * @returns The aggregate length (in bytes) that has been reserved to write new values.
   */
  get reservedByteLength() {
    let e = 0;
    return this._offsets && (e += this._offsets.reservedByteLength), this._values && (e += this._values.reservedByteLength), this._nulls && (e += this._nulls.reservedByteLength), this._typeIds && (e += this._typeIds.reservedByteLength), this.children.reduce((t, s) => t + s.reservedByteLength, e);
  }
  get valueOffsets() {
    return this._offsets ? this._offsets.buffer : null;
  }
  get values() {
    return this._values ? this._values.buffer : null;
  }
  get nullBitmap() {
    return this._nulls ? this._nulls.buffer : null;
  }
  get typeIds() {
    return this._typeIds ? this._typeIds.buffer : null;
  }
  /**
   * Appends a value (or null) to this `Builder`.
   * This is equivalent to `builder.set(builder.length, value)`.
   * @param {T['TValue'] | TNull } value The value to append.
   */
  append(e) {
    return this.set(this.length, e);
  }
  /**
   * Validates whether a value is valid (true), or null (false)
   * @param {T['TValue'] | TNull } value The value to compare against null the value representations
   */
  isValid(e) {
    return this._isValid(e);
  }
  /**
   * Write a value (or null-value sentinel) at the supplied index.
   * If the value matches one of the null-value representations, a 1-bit is
   * written to the null `BitmapBufferBuilder`. Otherwise, a 0 is written to
   * the null `BitmapBufferBuilder`, and the value is passed to
   * `Builder.prototype.setValue()`.
   * @param {number} index The index of the value to write.
   * @param {T['TValue'] | TNull } value The value to write at the supplied index.
   * @returns {this} The updated `Builder` instance.
   */
  set(e, t) {
    return this.setValid(e, this.isValid(t)) && this.setValue(e, t), this;
  }
  /**
   * Write a value to the underlying buffers at the supplied index, bypassing
   * the null-value check. This is a low-level method that
   * @param {number} index
   * @param {T['TValue'] | TNull } value
   */
  setValue(e, t) {
    this._setValue(this, e, t);
  }
  setValid(e, t) {
    return this.length = this._nulls.set(e, +t).length, t;
  }
  // @ts-ignore
  addChild(e, t = `${this.numChildren}`) {
    throw new Error(`Cannot append children to non-nested type "${this.type}"`);
  }
  /**
   * Retrieve the child `Builder` at the supplied `index`, or null if no child
   * exists at that index.
   * @param {number} index The index of the child `Builder` to retrieve.
   * @returns {Builder | null} The child Builder at the supplied index or null.
   */
  getChildAt(e) {
    return this.children[e] || null;
  }
  /**
   * Commit all the values that have been written to their underlying
   * ArrayBuffers, including any child Builders if applicable, and reset
   * the internal `Builder` state.
   * @returns A `Data<T>` of the buffers and children representing the values written.
   */
  flush() {
    let e, t, s, i;
    const { type: h, length: n, nullCount: o, _typeIds: d, _offsets: l, _values: u, _nulls: f } = this;
    (t = d == null ? void 0 : d.flush(n)) ? i = l == null ? void 0 : l.flush(n) : (i = l == null ? void 0 : l.flush(n)) ? e = u == null ? void 0 : u.flush(l.last()) : e = u == null ? void 0 : u.flush(n), o > 0 && (s = f == null ? void 0 : f.flush(n));
    const p = this.children.map((g) => g.flush());
    return this.clear(), c({
      type: h,
      length: n,
      nullCount: o,
      children: p,
      child: p[0],
      data: e,
      typeIds: t,
      nullBitmap: s,
      valueOffsets: i
    });
  }
  /**
   * Finalize this `Builder`, and child builders if applicable.
   * @returns {this} The finalized `Builder` instance.
   */
  finish() {
    this.finished = !0;
    for (const e of this.children)
      e.finish();
    return this;
  }
  /**
   * Clear this Builder's internal state, including child Builders if applicable, and reset the length to 0.
   * @returns {this} The cleared `Builder` instance.
   */
  clear() {
    var e, t, s, i;
    this.length = 0, (e = this._nulls) === null || e === void 0 || e.clear(), (t = this._values) === null || t === void 0 || t.clear(), (s = this._offsets) === null || s === void 0 || s.clear(), (i = this._typeIds) === null || i === void 0 || i.clear();
    for (const h of this.children)
      h.clear();
    return this;
  }
}
r.prototype.length = 1;
r.prototype.stride = 1;
r.prototype.children = null;
r.prototype.finished = !1;
r.prototype.nullValues = null;
r.prototype._isValid = () => !0;
class D extends r {
  constructor(e) {
    super(e), this._values = new B(this.ArrayType, 0, this.stride);
  }
  setValue(e, t) {
    const s = this._values;
    return s.reserve(e - s.length + 1), super.setValue(e, t);
  }
}
class T extends r {
  constructor(e) {
    super(e), this._pendingLength = 0, this._offsets = new b(e.type);
  }
  setValue(e, t) {
    const s = this._pending || (this._pending = /* @__PURE__ */ new Map()), i = s.get(e);
    i && (this._pendingLength -= i.length), this._pendingLength += t instanceof v ? t[y].length : t.length, s.set(e, t);
  }
  setValid(e, t) {
    return super.setValid(e, t) ? !0 : ((this._pending || (this._pending = /* @__PURE__ */ new Map())).set(e, void 0), !1);
  }
  clear() {
    return this._pendingLength = 0, this._pending = void 0, super.clear();
  }
  flush() {
    return this._flush(), super.flush();
  }
  finish() {
    return this._flush(), super.finish();
  }
  _flush() {
    const e = this._pending, t = this._pendingLength;
    return this._pendingLength = 0, this._pending = void 0, e && e.size > 0 && this._flushPending(e, t), this;
  }
}
export {
  r as Builder,
  D as FixedWidthBuilder,
  T as VariableWidthBuilder
};
//# sourceMappingURL=cori.data.api503.js.map
