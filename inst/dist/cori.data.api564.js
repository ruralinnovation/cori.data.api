import { SIZE_PREFIX_LENGTH as o } from "./cori.data.api628.js";
import "./cori.data.api556.js";
import "./cori.data.api557.js";
import { RecordBatch as e } from "./cori.data.api563.js";
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
  static getRootAsDictionaryBatch(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, i) {
    return t.setPosition(t.position() + o), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (t || new e()).__init(this.bb.__indirect(this.bb_pos + i), this.bb) : null;
  }
  /**
   * If isDelta is true the values in the dictionary are to be appended to a
   * dictionary with the indicated id. If isDelta is false this dictionary
   * should replace the existing dictionary.
   */
  isDelta() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startDictionaryBatch(t) {
    t.startObject(3);
  }
  static addId(t, i) {
    t.addFieldInt64(0, i, BigInt("0"));
  }
  static addData(t, i) {
    t.addFieldOffset(1, i, 0);
  }
  static addIsDelta(t, i) {
    t.addFieldInt8(2, +i, 0);
  }
  static endDictionaryBatch(t) {
    return t.endObject();
  }
}
export {
  s as DictionaryBatch
};
//# sourceMappingURL=cori.data.api564.js.map
