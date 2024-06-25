import { SIZE_PREFIX_LENGTH as s } from "./cori.data.api655.js";
import "./cori.data.api564.js";
import "./cori.data.api565.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class r {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, i) {
    return this.bb_pos = t, this.bb = i, this;
  }
  static getRootAsLargeBinary(t, i) {
    return (i || new r()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, i) {
    return t.setPosition(t.position() + s), (i || new r()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return r.startLargeBinary(t), r.endLargeBinary(t);
  }
}
export {
  r as LargeBinary
};
//# sourceMappingURL=cori.data.api660.js.map
