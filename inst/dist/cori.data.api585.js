import { SIZE_PREFIX_LENGTH as n } from "./cori.data.api639.js";
import "./cori.data.api567.js";
import "./cori.data.api568.js";
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
  static getRootAsDecimal(t, s) {
    return (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, s) {
    return t.setPosition(t.position() + n), (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Total number of decimal digits
   */
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of digits after the decimal point "."
   */
  scale() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of bits per value. The only accepted widths are 128 and 256.
   * We use bitWidth for consistency with Int::bitWidth.
   */
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readInt32(this.bb_pos + t) : 128;
  }
  static startDecimal(t) {
    t.startObject(3);
  }
  static addPrecision(t, s) {
    t.addFieldInt32(0, s, 0);
  }
  static addScale(t, s) {
    t.addFieldInt32(1, s, 0);
  }
  static addBitWidth(t, s) {
    t.addFieldInt32(2, s, 128);
  }
  static endDecimal(t) {
    return t.endObject();
  }
  static createDecimal(t, s, o, e) {
    return i.startDecimal(t), i.addPrecision(t, s), i.addScale(t, o), i.addBitWidth(t, e), i.endDecimal(t);
  }
}
export {
  i as Decimal
};
//# sourceMappingURL=cori.data.api585.js.map
