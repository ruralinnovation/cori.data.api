import { SIZE_PREFIX_LENGTH as e } from "./cori.data.api392.js";
import "./cori.data.api327.js";
import "./cori.data.api328.js";
import { DateUnit as o } from "./cori.data.api323.js";
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
  static getRootAsDate(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, i) {
    return t.setPosition(t.position() + e), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : o.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, i) {
    t.addFieldInt16(0, i, o.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, i) {
    return s.startDate(t), s.addUnit(t, i), s.endDate(t);
  }
}
export {
  s as Date
};
//# sourceMappingURL=cori.data.api343.js.map
