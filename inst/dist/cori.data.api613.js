import { float64ToUint16 as a } from "./cori.data.api614.js";
import { FixedWidthBuilder as d } from "./cori.data.api502.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class l extends d {
  setValue(s, t) {
    this._values.set(s, t);
  }
}
class r extends l {
  setValue(s, t) {
    super.setValue(s, a(t));
  }
}
class u extends l {
}
class x extends l {
}
export {
  r as Float16Builder,
  u as Float32Builder,
  x as Float64Builder,
  l as FloatBuilder
};
//# sourceMappingURL=cori.data.api613.js.map
