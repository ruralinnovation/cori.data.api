import a from "./cori.data.api266.js";
import c from "./cori.data.api314.js";
import { DataType as o, Utf8 as t, Uint64 as i, Uint32 as s, Uint16 as u, Uint8 as l, TimeSecond as w, TimeNanosecond as m, TimeMillisecond as d, TimeMicrosecond as I, Null as T, IntervalYearMonth as D, IntervalDayTime as U, Int64 as f, Int32 as r, Int16 as y, Int8 as p, Float64 as M, Float32 as F, Float16 as v, Dictionary as B, DateMillisecond as N, DateDay as h, Bool as S, Binary as Y } from "./cori.data.api402.js";
import { Type as e } from "./cori.data.api485.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function j(n) {
  if (n instanceof o || n == null)
    return n;
  switch (n) {
    case e.Binary:
      return new Y();
    case e.Bool:
      return new S();
    case e.DateDay:
      return new h();
    case e.DateMillisecond:
    case e.Date:
      return new N();
    case e.Dictionary:
      return new B(new t(), new r());
    case e.Float16:
      return new v();
    case e.Float32:
      return new F();
    case e.Float64:
    case e.Float:
      return new M();
    case e.Int8:
      return new p();
    case e.Int16:
      return new y();
    case e.Int32:
    case e.Int:
      return new r();
    case e.Int64:
      return new f();
    case e.IntervalDayTime:
      return new U();
    case e.Interval:
    case e.IntervalYearMonth:
      return new D();
    case e.Null:
      return new T();
    case e.TimeMicrosecond:
      return new I();
    case e.TimeMillisecond:
    case e.Time:
      return new d();
    case e.TimeNanosecond:
      return new m();
    case e.TimeSecond:
      return new w();
    case e.Uint8:
      return new l();
    case e.Uint16:
      return new u();
    case e.Uint32:
      return new s();
    case e.Uint64:
      return new i();
    case e.Utf8:
      return new t();
    default:
      a(
        `Unsupported type code: ${c(n)}. Use a data type constructor instead?`
      );
  }
}
export {
  j as default
};
//# sourceMappingURL=cori.data.api400.js.map
