import { SIZE_PREFIX_LENGTH as a } from "./cori.data.api655.js";
import "./cori.data.api564.js";
import "./cori.data.api565.js";
import { Endianness as o } from "./cori.data.api577.js";
import { Field as f } from "./cori.data.api573.js";
import { KeyValue as c } from "./cori.data.api576.js";
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
  static getRootAsSchema(t, s) {
    return (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, s) {
    return t.setPosition(t.position() + a), (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : o.Little;
  }
  fields(t, s) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (s || new f()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + e) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, s) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? (s || new c()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + e) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Features used in the stream/file.
   */
  features(t) {
    const s = this.bb.__offset(this.bb_pos, 10);
    return s ? this.bb.readInt64(this.bb.__vector(this.bb_pos + s) + t * 8) : BigInt(0);
  }
  featuresLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startSchema(t) {
    t.startObject(4);
  }
  static addEndianness(t, s) {
    t.addFieldInt16(0, s, o.Little);
  }
  static addFields(t, s) {
    t.addFieldOffset(1, s, 0);
  }
  static createFieldsVector(t, s) {
    t.startVector(4, s.length, 4);
    for (let e = s.length - 1; e >= 0; e--)
      t.addOffset(s[e]);
    return t.endVector();
  }
  static startFieldsVector(t, s) {
    t.startVector(4, s, 4);
  }
  static addCustomMetadata(t, s) {
    t.addFieldOffset(2, s, 0);
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
  static addFeatures(t, s) {
    t.addFieldOffset(3, s, 0);
  }
  static createFeaturesVector(t, s) {
    t.startVector(8, s.length, 8);
    for (let e = s.length - 1; e >= 0; e--)
      t.addInt64(s[e]);
    return t.endVector();
  }
  static startFeaturesVector(t, s) {
    t.startVector(8, s, 8);
  }
  static endSchema(t) {
    return t.endObject();
  }
  static finishSchemaBuffer(t, s) {
    t.finish(s);
  }
  static finishSizePrefixedSchemaBuffer(t, s) {
    t.finish(s, void 0, !0);
  }
  static createSchema(t, s, e, r, n) {
    return i.startSchema(t), i.addEndianness(t, s), i.addFields(t, e), i.addCustomMetadata(t, r), i.addFeatures(t, n), i.endSchema(t);
  }
}
export {
  i as Schema
};
//# sourceMappingURL=cori.data.api568.js.map
