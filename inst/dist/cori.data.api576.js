import { ByteBuffer as c } from "./cori.data.api577.js";
import { SIZEOF_INT as a, SIZEOF_SHORT as o, FILE_IDENTIFIER_LENGTH as f, SIZE_PREFIX_LENGTH as p } from "./cori.data.api665.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class b {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
    let s;
    t ? s = t : s = 1024, this.bb = c.allocate(s), this.space = s;
  }
  clear() {
    this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
  }
  /**
   * In order to save space, fields that are set to their default value
   * don't get serialized into the buffer. Forcing defaults provides a
   * way to manually disable this optimization.
   *
   * @param forceDefaults true always serializes default values
   */
  forceDefaults(t) {
    this.force_defaults = t;
  }
  /**
   * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
   * called finish(). The actual data starts at the ByteBuffer's current position,
   * not necessarily at 0.
   */
  dataBuffer() {
    return this.bb;
  }
  /**
   * Get the bytes representing the FlatBuffer. Only call this after you've
   * called finish().
   */
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  /**
   * Prepare to write an element of `size` after `additional_bytes` have been
   * written, e.g. if you write a string, you need to align such the int length
   * field is aligned to 4 bytes, and the string data follows it directly. If all
   * you need to do is alignment, `additional_bytes` will be 0.
   *
   * @param size This is the of the new element to write
   * @param additional_bytes The padding size
   */
  prep(t, s) {
    t > this.minalign && (this.minalign = t);
    const e = ~(this.bb.capacity() - this.space + s) + 1 & t - 1;
    for (; this.space < e + t + s; ) {
      const i = this.bb.capacity();
      this.bb = b.growByteBuffer(this.bb), this.space += this.bb.capacity() - i;
    }
    this.pad(e);
  }
  pad(t) {
    for (let s = 0; s < t; s++)
      this.bb.writeInt8(--this.space, 0);
  }
  writeInt8(t) {
    this.bb.writeInt8(this.space -= 1, t);
  }
  writeInt16(t) {
    this.bb.writeInt16(this.space -= 2, t);
  }
  writeInt32(t) {
    this.bb.writeInt32(this.space -= 4, t);
  }
  writeInt64(t) {
    this.bb.writeInt64(this.space -= 8, t);
  }
  writeFloat32(t) {
    this.bb.writeFloat32(this.space -= 4, t);
  }
  writeFloat64(t) {
    this.bb.writeFloat64(this.space -= 8, t);
  }
  /**
   * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int8` to add the buffer.
   */
  addInt8(t) {
    this.prep(1, 0), this.writeInt8(t);
  }
  /**
   * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int16` to add the buffer.
   */
  addInt16(t) {
    this.prep(2, 0), this.writeInt16(t);
  }
  /**
   * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int32` to add the buffer.
   */
  addInt32(t) {
    this.prep(4, 0), this.writeInt32(t);
  }
  /**
   * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int64` to add the buffer.
   */
  addInt64(t) {
    this.prep(8, 0), this.writeInt64(t);
  }
  /**
   * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float32` to add the buffer.
   */
  addFloat32(t) {
    this.prep(4, 0), this.writeFloat32(t);
  }
  /**
   * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float64` to add the buffer.
   */
  addFloat64(t) {
    this.prep(8, 0), this.writeFloat64(t);
  }
  addFieldInt8(t, s, e) {
    (this.force_defaults || s != e) && (this.addInt8(s), this.slot(t));
  }
  addFieldInt16(t, s, e) {
    (this.force_defaults || s != e) && (this.addInt16(s), this.slot(t));
  }
  addFieldInt32(t, s, e) {
    (this.force_defaults || s != e) && (this.addInt32(s), this.slot(t));
  }
  addFieldInt64(t, s, e) {
    (this.force_defaults || s !== e) && (this.addInt64(s), this.slot(t));
  }
  addFieldFloat32(t, s, e) {
    (this.force_defaults || s != e) && (this.addFloat32(s), this.slot(t));
  }
  addFieldFloat64(t, s, e) {
    (this.force_defaults || s != e) && (this.addFloat64(s), this.slot(t));
  }
  addFieldOffset(t, s, e) {
    (this.force_defaults || s != e) && (this.addOffset(s), this.slot(t));
  }
  /**
   * Structs are stored inline, so nothing additional is being added. `d` is always 0.
   */
  addFieldStruct(t, s, e) {
    s != e && (this.nested(s), this.slot(t));
  }
  /**
   * Structures are always stored inline, they need to be created right
   * where they're used.  You'll get this assertion failure if you
   * created it elsewhere.
   */
  nested(t) {
    if (t != this.offset())
      throw new TypeError("FlatBuffers: struct must be serialized inline.");
  }
  /**
   * Should not be creating any other object, string or vector
   * while an object is being constructed
   */
  notNested() {
    if (this.isNested)
      throw new TypeError("FlatBuffers: object serialization must not be nested.");
  }
  /**
   * Set the current vtable at `voffset` to the current location in the buffer.
   */
  slot(t) {
    this.vtable !== null && (this.vtable[t] = this.offset());
  }
  /**
   * @returns Offset relative to the end of the buffer.
   */
  offset() {
    return this.bb.capacity() - this.space;
  }
  /**
   * Doubles the size of the backing ByteBuffer and copies the old data towards
   * the end of the new buffer (since we build the buffer backwards).
   *
   * @param bb The current buffer with the existing data
   * @returns A new byte buffer with the old data copied
   * to it. The data is located at the end of the buffer.
   *
   * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
   * it a uint8Array we need to suppress the type check:
   * @suppress {checkTypes}
   */
  static growByteBuffer(t) {
    const s = t.capacity();
    if (s & 3221225472)
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    const e = s << 1, i = c.allocate(e);
    return i.setPosition(e - s), i.bytes().set(t.bytes(), e - s), i;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(a, 0), this.writeInt32(this.offset() - t + a);
  }
  /**
   * Start encoding a new object in the buffer.  Users will not usually need to
   * call this directly. The FlatBuffers compiler will generate helper methods
   * that call this method internally.
   */
  startObject(t) {
    this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
    for (let s = 0; s < t; s++)
      this.vtable[s] = 0;
    this.isNested = !0, this.object_start = this.offset();
  }
  /**
   * Finish off writing the object that is under construction.
   *
   * @returns The offset to the object inside `dataBuffer`
   */
  endObject() {
    if (this.vtable == null || !this.isNested)
      throw new Error("FlatBuffers: endObject called without startObject");
    this.addInt32(0);
    const t = this.offset();
    let s = this.vtable_in_use - 1;
    for (; s >= 0 && this.vtable[s] == 0; s--)
      ;
    const e = s + 1;
    for (; s >= 0; s--)
      this.addInt16(this.vtable[s] != 0 ? t - this.vtable[s] : 0);
    const i = 2;
    this.addInt16(t - this.object_start);
    const r = (e + i) * o;
    this.addInt16(r);
    let h = 0;
    const d = this.space;
    t:
      for (s = 0; s < this.vtables.length; s++) {
        const l = this.bb.capacity() - this.vtables[s];
        if (r == this.bb.readInt16(l)) {
          for (let n = o; n < r; n += o)
            if (this.bb.readInt16(d + n) != this.bb.readInt16(l + n))
              continue t;
          h = this.vtables[s];
          break;
        }
      }
    return h ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, h - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t;
  }
  /**
   * Finalize a buffer, poiting to the given `root_table`.
   */
  finish(t, s, e) {
    const i = e ? p : 0;
    if (s) {
      const r = s;
      if (this.prep(this.minalign, a + f + i), r.length != f)
        throw new TypeError("FlatBuffers: file identifier must be length " + f);
      for (let h = f - 1; h >= 0; h--)
        this.writeInt8(r.charCodeAt(h));
    }
    this.prep(this.minalign, a + i), this.addOffset(t), i && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  /**
   * Finalize a size prefixed buffer, pointing to the given `root_table`.
   */
  finishSizePrefixed(t, s) {
    this.finish(t, s, !0);
  }
  /**
   * This checks a required field has been set in a given table that has
   * just been constructed.
   */
  requiredField(t, s) {
    const e = this.bb.capacity() - t, i = e - this.bb.readInt32(e);
    if (!(s < this.bb.readInt16(i) && this.bb.readInt16(i + s) != 0))
      throw new TypeError("FlatBuffers: field " + s + " must be set");
  }
  /**
   * Start a new array/vector of objects.  Users usually will not call
   * this directly. The FlatBuffers compiler will create a start/end
   * method for vector types in generated code.
   *
   * @param elem_size The size of each element in the array
   * @param num_elems The number of elements in the array
   * @param alignment The alignment of the array
   */
  startVector(t, s, e) {
    this.notNested(), this.vector_num_elems = s, this.prep(a, t * s), this.prep(e, t * s);
  }
  /**
   * Finish off the creation of an array and all its elements. The array must be
   * created with `startVector`.
   *
   * @returns The offset at which the newly created array
   * starts.
   */
  endVector() {
    return this.writeInt32(this.vector_num_elems), this.offset();
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If the string passed has
   * already been seen, we return the offset of the already written string
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createSharedString(t) {
    if (!t)
      return 0;
    if (this.string_maps || (this.string_maps = /* @__PURE__ */ new Map()), this.string_maps.has(t))
      return this.string_maps.get(t);
    const s = this.createString(t);
    return this.string_maps.set(t, s), s;
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
   * instead of a string, it is assumed to contain valid UTF-8 encoded data.
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createString(t) {
    if (t == null)
      return 0;
    let s;
    t instanceof Uint8Array ? s = t : s = this.text_encoder.encode(t), this.addInt8(0), this.startVector(1, s.length, 1), this.bb.setPosition(this.space -= s.length);
    for (let e = 0, i = this.space, r = this.bb.bytes(); e < s.length; e++)
      r[i++] = s[e];
    return this.endVector();
  }
  /**
   * A helper function to pack an object
   *
   * @returns offset of obj
   */
  createObjectOffset(t) {
    return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this);
  }
  /**
   * A helper function to pack a list of object
   *
   * @returns list of offsets of each non null object
   */
  createObjectOffsetList(t) {
    const s = [];
    for (let e = 0; e < t.length; ++e) {
      const i = t[e];
      if (i !== null)
        s.push(this.createObjectOffset(i));
      else
        throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return s;
  }
  createStructOffsetList(t, s) {
    return s(this, t.length), this.createObjectOffsetList(t.slice().reverse()), this.endVector();
  }
}
export {
  b as Builder
};
//# sourceMappingURL=cori.data.api576.js.map
