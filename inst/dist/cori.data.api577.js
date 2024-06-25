import { SIZE_PREFIX_LENGTH as n } from "./cori.data.api628.js";
import "./cori.data.api556.js";
import "./cori.data.api557.js";
import { TimeUnit as o } from "./cori.data.api552.js";
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
  static getRootAsDuration(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDuration(t, i) {
    return t.setPosition(t.position() + n), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : o.MILLISECOND;
  }
  static startDuration(t) {
    t.startObject(1);
  }
  static addUnit(t, i) {
    t.addFieldInt16(0, i, o.MILLISECOND);
  }
  static endDuration(t) {
    return t.endObject();
  }
  static createDuration(t, i) {
    return s.startDuration(t), s.addUnit(t, i), s.endDuration(t);
  }
}
export {
  s as Duration
};
//# sourceMappingURL=cori.data.api577.js.map
