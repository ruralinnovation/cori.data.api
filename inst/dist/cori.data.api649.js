import { SIZE_PREFIX_LENGTH as o } from "./cori.data.api642.js";
import "./cori.data.api570.js";
import "./cori.data.api571.js";
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
  static getRootAsUtf8(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, i) {
    return t.setPosition(t.position() + o), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return s.startUtf8(t), s.endUtf8(t);
  }
}
export {
  s as Utf8
};
//# sourceMappingURL=cori.data.api649.js.map
