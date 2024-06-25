import { SIZE_PREFIX_LENGTH as e } from "./cori.data.api642.js";
import "./cori.data.api569.js";
import "./cori.data.api570.js";
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
  static getRootAsLargeUtf8(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, i) {
    return t.setPosition(t.position() + e), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return s.startLargeUtf8(t), s.endLargeUtf8(t);
  }
}
export {
  s as LargeUtf8
};
//# sourceMappingURL=cori.data.api650.js.map
