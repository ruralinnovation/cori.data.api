import { SIZEOF_INT as h, FILE_IDENTIFIER_LENGTH as _ } from "./cori.data.api639.js";
import { int32 as e, float32 as I, isLittleEndian as a, float64 as d } from "./cori.data.api567.js";
import { Encoding as o } from "./cori.data.api568.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class u {
  /**
   * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
   */
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  /**
   * Create and allocate a new ByteBuffer with a given size.
   */
  static allocate(t) {
    return new u(new Uint8Array(t));
  }
  clear() {
    this.position_ = 0;
  }
  /**
   * Get the underlying `Uint8Array`.
   */
  bytes() {
    return this.bytes_;
  }
  /**
   * Get the buffer's position.
   */
  position() {
    return this.position_;
  }
  /**
   * Set the buffer's position.
   */
  setPosition(t) {
    this.position_ = t;
  }
  /**
   * Get the buffer's capacity.
   */
  capacity() {
    return this.bytes_.length;
  }
  readInt8(t) {
    return this.readUint8(t) << 24 >> 24;
  }
  readUint8(t) {
    return this.bytes_[t];
  }
  readInt16(t) {
    return this.readUint16(t) << 16 >> 16;
  }
  readUint16(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8;
  }
  readInt32(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24;
  }
  readUint32(t) {
    return this.readInt32(t) >>> 0;
  }
  readInt64(t) {
    return BigInt.asIntN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readUint64(t) {
    return BigInt.asUintN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readFloat32(t) {
    return e[0] = this.readInt32(t), I[0];
  }
  readFloat64(t) {
    return e[a ? 0 : 1] = this.readInt32(t), e[a ? 1 : 0] = this.readInt32(t + 4), d[0];
  }
  writeInt8(t, i) {
    this.bytes_[t] = i;
  }
  writeUint8(t, i) {
    this.bytes_[t] = i;
  }
  writeInt16(t, i) {
    this.bytes_[t] = i, this.bytes_[t + 1] = i >> 8;
  }
  writeUint16(t, i) {
    this.bytes_[t] = i, this.bytes_[t + 1] = i >> 8;
  }
  writeInt32(t, i) {
    this.bytes_[t] = i, this.bytes_[t + 1] = i >> 8, this.bytes_[t + 2] = i >> 16, this.bytes_[t + 3] = i >> 24;
  }
  writeUint32(t, i) {
    this.bytes_[t] = i, this.bytes_[t + 1] = i >> 8, this.bytes_[t + 2] = i >> 16, this.bytes_[t + 3] = i >> 24;
  }
  writeInt64(t, i) {
    this.writeInt32(t, Number(BigInt.asIntN(32, i))), this.writeInt32(t + 4, Number(BigInt.asIntN(32, i >> BigInt(32))));
  }
  writeUint64(t, i) {
    this.writeUint32(t, Number(BigInt.asUintN(32, i))), this.writeUint32(t + 4, Number(BigInt.asUintN(32, i >> BigInt(32))));
  }
  writeFloat32(t, i) {
    I[0] = i, this.writeInt32(t, e[0]);
  }
  writeFloat64(t, i) {
    d[0] = i, this.writeInt32(t, e[a ? 0 : 1]), this.writeInt32(t + 4, e[a ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + h + _)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let i = 0; i < _; i++)
      t += String.fromCharCode(this.readInt8(this.position_ + h + i));
    return t;
  }
  /**
   * Look up a field in the vtable, return an offset into the object, or 0 if the
   * field is not present.
   */
  __offset(t, i) {
    const r = t - this.readInt32(t);
    return i < this.readInt16(r) ? this.readInt16(r + i) : 0;
  }
  /**
   * Initialize any Table-derived type to point to the union at the given offset.
   */
  __union(t, i) {
    return t.bb_pos = i + this.readInt32(i), t.bb = this, t;
  }
  /**
   * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
   * This allocates a new string and converts to wide chars upon each access.
   *
   * To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
   * "optionalEncoding" argument. This is useful for avoiding conversion when
   * the data will just be packaged back up in another FlatBuffer later on.
   *
   * @param offset
   * @param opt_encoding Defaults to UTF16_STRING
   */
  __string(t, i) {
    t += this.readInt32(t);
    const r = this.readInt32(t);
    t += h;
    const n = this.bytes_.subarray(t, t + r);
    return i === o.UTF8_BYTES ? n : this.text_decoder_.decode(n);
  }
  /**
   * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
   * if a string then return a new one
   *
   * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
   * makes the behaviour of __union_with_string different compared to __union
   */
  __union_with_string(t, i) {
    return typeof t == "string" ? this.__string(i) : this.__union(t, i);
  }
  /**
   * Retrieve the relative offset stored at "offset"
   */
  __indirect(t) {
    return t + this.readInt32(t);
  }
  /**
   * Get the start of data of a vector whose offset is stored at "offset" in this object.
   */
  __vector(t) {
    return t + this.readInt32(t) + h;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != _)
      throw new Error("FlatBuffers: file identifier must be length " + _);
    for (let i = 0; i < _; i++)
      if (t.charCodeAt(i) != this.readInt8(this.position() + h + i))
        return !1;
    return !0;
  }
  /**
   * A helper function for generating list for obj api
   */
  createScalarList(t, i) {
    const r = [];
    for (let n = 0; n < i; ++n) {
      const s = t(n);
      s !== null && r.push(s);
    }
    return r;
  }
  /**
   * A helper function for generating list for obj api
   * @param listAccessor function that accepts an index and return data at that index
   * @param listLength listLength
   * @param res result list
   */
  createObjList(t, i) {
    const r = [];
    for (let n = 0; n < i; ++n) {
      const s = t(n);
      s !== null && r.push(s.unpack());
    }
    return r;
  }
}
export {
  u as ByteBuffer
};
//# sourceMappingURL=cori.data.api570.js.map
