import { SIZE_PREFIX_LENGTH as o } from "./cori.data.api392.js";
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
  static getRootAsNull(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, i) {
    return t.setPosition(t.position() + o), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return s.startNull(t), s.endNull(t);
  }
}
export {
  s as Null
};
//# sourceMappingURL=cori.data.api395.js.map
