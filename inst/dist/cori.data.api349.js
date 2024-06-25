import { SIZE_PREFIX_LENGTH as e } from "./cori.data.api392.js";
import "./cori.data.api327.js";
import "./cori.data.api328.js";
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
  static getRootAsFixedSizeBinary(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, i) {
    return t.setPosition(t.position() + e), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of bytes per value
   */
  byteWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeBinary(t) {
    t.startObject(1);
  }
  static addByteWidth(t, i) {
    t.addFieldInt32(0, i, 0);
  }
  static endFixedSizeBinary(t) {
    return t.endObject();
  }
  static createFixedSizeBinary(t, i) {
    return s.startFixedSizeBinary(t), s.addByteWidth(t, i), s.endFixedSizeBinary(t);
  }
}
export {
  s as FixedSizeBinary
};
//# sourceMappingURL=cori.data.api349.js.map
