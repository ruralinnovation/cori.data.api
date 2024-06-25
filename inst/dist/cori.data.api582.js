import { SIZE_PREFIX_LENGTH as o } from "./cori.data.api639.js";
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
  static getRootAsKeyValue(t, s) {
    return (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, s) {
    return t.setPosition(t.position() + o), (s || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  key(t) {
    const s = this.bb.__offset(this.bb_pos, 4);
    return s ? this.bb.__string(this.bb_pos + s, t) : null;
  }
  value(t) {
    const s = this.bb.__offset(this.bb_pos, 6);
    return s ? this.bb.__string(this.bb_pos + s, t) : null;
  }
  static startKeyValue(t) {
    t.startObject(2);
  }
  static addKey(t, s) {
    t.addFieldOffset(0, s, 0);
  }
  static addValue(t, s) {
    t.addFieldOffset(1, s, 0);
  }
  static endKeyValue(t) {
    return t.endObject();
  }
  static createKeyValue(t, s, e) {
    return i.startKeyValue(t), i.addKey(t, s), i.addValue(t, e), i.endKeyValue(t);
  }
}
export {
  i as KeyValue
};
//# sourceMappingURL=cori.data.api582.js.map
