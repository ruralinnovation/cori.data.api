import { SIZE_PREFIX_LENGTH as o } from "./cori.data.api653.js";
import "./cori.data.api580.js";
import "./cori.data.api581.js";
import { DictionaryKind as n } from "./cori.data.api696.js";
import { Int as e } from "./cori.data.api585.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class s {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, i) {
    return this.bb_pos = t, this.bb = i, this;
  }
  static getRootAsDictionaryEncoding(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, i) {
    return t.setPosition(t.position() + o), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * The known dictionary id in the application where this data is used. In
   * the file or streaming formats, the dictionary ids are found in the
   * DictionaryBatch messages
   */
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  /**
   * The dictionary indices are constrained to be non-negative integers. If
   * this field is null, the indices must be signed int32. To maximize
   * cross-language compatibility and performance, implementations are
   * recommended to prefer signed integer types over unsigned integer types
   * and to avoid uint64 indices unless they are required by an application.
   */
  indexType(t) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (t || new e()).__init(this.bb.__indirect(this.bb_pos + i), this.bb) : null;
  }
  /**
   * By default, dictionaries are not ordered, or the order does not have
   * semantic meaning. In some statistical, applications, dictionary-encoding
   * is used to represent ordered categorical data, and we provide a way to
   * preserve that metadata here
   */
  isOrdered() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  dictionaryKind() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt16(this.bb_pos + t) : n.DenseArray;
  }
  static startDictionaryEncoding(t) {
    t.startObject(4);
  }
  static addId(t, i) {
    t.addFieldInt64(0, i, BigInt("0"));
  }
  static addIndexType(t, i) {
    t.addFieldOffset(1, i, 0);
  }
  static addIsOrdered(t, i) {
    t.addFieldInt8(2, +i, 0);
  }
  static addDictionaryKind(t, i) {
    t.addFieldInt16(3, i, n.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
export {
  s as DictionaryEncoding
};
//# sourceMappingURL=cori.data.api655.js.map
