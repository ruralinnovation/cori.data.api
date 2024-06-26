import { SIZE_PREFIX_LENGTH as n } from "./cori.data.api653.js";
import "./cori.data.api580.js";
import "./cori.data.api581.js";
import { TimeUnit as o } from "./cori.data.api577.js";
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
  static getRootAsTimestamp(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, i) {
    return t.setPosition(t.position() + n), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : o.SECOND;
  }
  timezone(t) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? this.bb.__string(this.bb_pos + i, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, i) {
    t.addFieldInt16(0, i, o.SECOND);
  }
  static addTimezone(t, i) {
    t.addFieldOffset(1, i, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, i, e) {
    return s.startTimestamp(t), s.addUnit(t, i), s.addTimezone(t, e), s.endTimestamp(t);
  }
}
export {
  s as Timestamp
};
//# sourceMappingURL=cori.data.api598.js.map
