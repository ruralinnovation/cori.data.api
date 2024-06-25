import { SIZE_PREFIX_LENGTH as e } from "./cori.data.api642.js";
import "./cori.data.api570.js";
import "./cori.data.api571.js";
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
  static getRootAsInt(t, s) {
    return (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, s) {
    return t.setPosition(t.position() + e), (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  isSigned() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startInt(t) {
    t.startObject(2);
  }
  static addBitWidth(t, s) {
    t.addFieldInt32(0, s, 0);
  }
  static addIsSigned(t, s) {
    t.addFieldInt8(1, +s, 0);
  }
  static endInt(t) {
    return t.endObject();
  }
  static createInt(t, s, o) {
    return i.startInt(t), i.addBitWidth(t, s), i.addIsSigned(t, o), i.endInt(t);
  }
}
export {
  i as Int
};
//# sourceMappingURL=cori.data.api578.js.map
