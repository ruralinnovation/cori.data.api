import { SIZE_PREFIX_LENGTH as o } from "./cori.data.api392.js";
import "./cori.data.api327.js";
import "./cori.data.api328.js";
import { IntervalUnit as n } from "./cori.data.api325.js";
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
  static getRootAsInterval(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, i) {
    return t.setPosition(t.position() + o), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : n.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, i) {
    t.addFieldInt16(0, i, n.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, i) {
    return s.startInterval(t), s.addUnit(t, i), s.endInterval(t);
  }
}
export {
  s as Interval
};
//# sourceMappingURL=cori.data.api346.js.map
