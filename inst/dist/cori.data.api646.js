import { SIZE_PREFIX_LENGTH as n } from "./cori.data.api642.js";
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
  static getRootAsBinary(t, i) {
    return (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, i) {
    return t.setPosition(t.position() + n), (i || new s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return s.startBinary(t), s.endBinary(t);
  }
}
export {
  s as Binary
};
//# sourceMappingURL=cori.data.api646.js.map
