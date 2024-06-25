import { SIZE_PREFIX_LENGTH as e } from "./cori.data.api665.js";
import "./cori.data.api574.js";
import "./cori.data.api575.js";
import { TimeUnit as o } from "./cori.data.api570.js";
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
  static getRootAsTime(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, i) {
    return t.setPosition(t.position() + e), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : o.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, i) {
    t.addFieldInt16(0, i, o.MILLISECOND);
  }
  static addBitWidth(t, i) {
    t.addFieldInt32(1, i, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, i, n) {
    return s.startTime(t), s.addUnit(t, i), s.addBitWidth(t, n), s.endTime(t);
  }
}
export {
  s as Time
};
//# sourceMappingURL=cori.data.api591.js.map
