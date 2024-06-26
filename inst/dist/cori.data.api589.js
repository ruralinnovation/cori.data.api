import { SIZE_PREFIX_LENGTH as n } from "./cori.data.api653.js";
import "./cori.data.api579.js";
import "./cori.data.api580.js";
import { DictionaryEncoding as r } from "./cori.data.api655.js";
import { KeyValue as b } from "./cori.data.api592.js";
import { Type as o } from "./cori.data.api591.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class i {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, s) {
    return this.bb_pos = t, this.bb = s, this;
  }
  static getRootAsField(t, s) {
    return (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, s) {
    return t.setPosition(t.position() + n), (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  name(t) {
    const s = this.bb.__offset(this.bb_pos, 4);
    return s ? this.bb.__string(this.bb_pos + s, t) : null;
  }
  /**
   * Whether or not this field can contain nulls. Should be true in general.
   */
  nullable() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  typeType() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readUint8(this.bb_pos + t) : o.NONE;
  }
  /**
   * This is the type of the decoded value if the field is dictionary encoded.
   */
  type(t) {
    const s = this.bb.__offset(this.bb_pos, 10);
    return s ? this.bb.__union(t, this.bb_pos + s) : null;
  }
  /**
   * Present only if the field is dictionary encoded.
   */
  dictionary(t) {
    const s = this.bb.__offset(this.bb_pos, 12);
    return s ? (t || new r()).__init(this.bb.__indirect(this.bb_pos + s), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, s) {
    const e = this.bb.__offset(this.bb_pos, 14);
    return e ? (s || new i()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + e) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, s) {
    const e = this.bb.__offset(this.bb_pos, 16);
    return e ? (s || new b()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + e) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 16);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startField(t) {
    t.startObject(7);
  }
  static addName(t, s) {
    t.addFieldOffset(0, s, 0);
  }
  static addNullable(t, s) {
    t.addFieldInt8(1, +s, 0);
  }
  static addTypeType(t, s) {
    t.addFieldInt8(2, s, o.NONE);
  }
  static addType(t, s) {
    t.addFieldOffset(3, s, 0);
  }
  static addDictionary(t, s) {
    t.addFieldOffset(4, s, 0);
  }
  static addChildren(t, s) {
    t.addFieldOffset(5, s, 0);
  }
  static createChildrenVector(t, s) {
    t.startVector(4, s.length, 4);
    for (let e = s.length - 1; e >= 0; e--)
      t.addOffset(s[e]);
    return t.endVector();
  }
  static startChildrenVector(t, s) {
    t.startVector(4, s, 4);
  }
  static addCustomMetadata(t, s) {
    t.addFieldOffset(6, s, 0);
  }
  static createCustomMetadataVector(t, s) {
    t.startVector(4, s.length, 4);
    for (let e = s.length - 1; e >= 0; e--)
      t.addOffset(s[e]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, s) {
    t.startVector(4, s, 4);
  }
  static endField(t) {
    return t.endObject();
  }
}
export {
  i as Field
};
//# sourceMappingURL=cori.data.api589.js.map
