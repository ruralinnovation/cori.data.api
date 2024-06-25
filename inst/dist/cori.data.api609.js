import { FixedWidthBuilder as t } from "./cori.data.api501.js";
import { setTimestamp as o, setTimestampSecond as i, setTimestampMillisecond as m, setTimestampMicrosecond as p, setTimestampNanosecond as a } from "./cori.data.api553.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class e extends t {
}
e.prototype._setValue = o;
class d extends e {
}
d.prototype._setValue = i;
class l extends e {
}
l.prototype._setValue = m;
class r extends e {
}
r.prototype._setValue = p;
class c extends e {
}
c.prototype._setValue = a;
export {
  e as TimestampBuilder,
  r as TimestampMicrosecondBuilder,
  l as TimestampMillisecondBuilder,
  c as TimestampNanosecondBuilder,
  d as TimestampSecondBuilder
};
//# sourceMappingURL=cori.data.api609.js.map
