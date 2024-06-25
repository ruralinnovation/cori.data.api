import { SIZE_PREFIX_LENGTH as n } from "./cori.data.api655.js";
import "./cori.data.api564.js";
import "./cori.data.api565.js";
import { Block as o } from "./cori.data.api592.js";
import { KeyValue as _ } from "./cori.data.api576.js";
import { MetadataVersion as r } from "./cori.data.api508.js";
import { Schema as a } from "./cori.data.api568.js";
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
  static getRootAsFooter(t, s) {
    return (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, s) {
    return t.setPosition(t.position() + n), (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : r.V1;
  }
  schema(t) {
    const s = this.bb.__offset(this.bb_pos, 6);
    return s ? (t || new a()).__init(this.bb.__indirect(this.bb_pos + s), this.bb) : null;
  }
  dictionaries(t, s) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? (s || new o()).__init(this.bb.__vector(this.bb_pos + e) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, s) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? (s || new o()).__init(this.bb.__vector(this.bb_pos + e) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, s) {
    const e = this.bb.__offset(this.bb_pos, 12);
    return e ? (s || new _()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + e) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, s) {
    t.addFieldInt16(0, s, r.V1);
  }
  static addSchema(t, s) {
    t.addFieldOffset(1, s, 0);
  }
  static addDictionaries(t, s) {
    t.addFieldOffset(2, s, 0);
  }
  static startDictionariesVector(t, s) {
    t.startVector(24, s, 8);
  }
  static addRecordBatches(t, s) {
    t.addFieldOffset(3, s, 0);
  }
  static startRecordBatchesVector(t, s) {
    t.startVector(24, s, 8);
  }
  static addCustomMetadata(t, s) {
    t.addFieldOffset(4, s, 0);
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
  static endFooter(t) {
    return t.endObject();
  }
  static finishFooterBuffer(t, s) {
    t.finish(s);
  }
  static finishSizePrefixedFooterBuffer(t, s) {
    t.finish(s, void 0, !0);
  }
}
export {
  i as Footer
};
//# sourceMappingURL=cori.data.api593.js.map
