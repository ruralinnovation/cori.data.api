import { SIZE_PREFIX_LENGTH as s } from "./cori.data.api638.js";
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
  __init(t, o) {
    return this.bb_pos = t, this.bb = o, this;
  }
  static getRootAsBool(t, o) {
    return (o || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, o) {
    return t.setPosition(t.position() + s), (o || new i()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return i.startBool(t), i.endBool(t);
  }
}
export {
  i as Bool
};
//# sourceMappingURL=cori.data.api644.js.map
