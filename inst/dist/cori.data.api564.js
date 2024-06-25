import { Type as e } from "./cori.data.api497.js";
import { DataType as u } from "./cori.data.api444.js";
import { UnionMode as o } from "./cori.data.api565.js";
import { TimeUnit as s } from "./cori.data.api570.js";
import { IntervalUnit as p } from "./cori.data.api571.js";
import { DateUnit as m } from "./cori.data.api569.js";
import { Precision as c } from "./cori.data.api568.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class r {
  visitMany(i, ...a) {
    return i.map((n, d) => this.visit(n, ...a.map((v) => v[d])));
  }
  visit(...i) {
    return this.getVisitFn(i[0], !1).apply(this, i);
  }
  getVisitFn(i, a = !0) {
    return y(this, i, a);
  }
  getVisitFnByTypeId(i, a = !0) {
    return l(this, i, a);
  }
  visitNull(i, ...a) {
    return null;
  }
  visitBool(i, ...a) {
    return null;
  }
  visitInt(i, ...a) {
    return null;
  }
  visitFloat(i, ...a) {
    return null;
  }
  visitUtf8(i, ...a) {
    return null;
  }
  visitLargeUtf8(i, ...a) {
    return null;
  }
  visitBinary(i, ...a) {
    return null;
  }
  visitLargeBinary(i, ...a) {
    return null;
  }
  visitFixedSizeBinary(i, ...a) {
    return null;
  }
  visitDate(i, ...a) {
    return null;
  }
  visitTimestamp(i, ...a) {
    return null;
  }
  visitTime(i, ...a) {
    return null;
  }
  visitDecimal(i, ...a) {
    return null;
  }
  visitList(i, ...a) {
    return null;
  }
  visitStruct(i, ...a) {
    return null;
  }
  visitUnion(i, ...a) {
    return null;
  }
  visitDictionary(i, ...a) {
    return null;
  }
  visitInterval(i, ...a) {
    return null;
  }
  visitDuration(i, ...a) {
    return null;
  }
  visitFixedSizeList(i, ...a) {
    return null;
  }
  visitMap(i, ...a) {
    return null;
  }
}
function y(t, i, a = !0) {
  return typeof i == "number" ? l(t, i, a) : typeof i == "string" && i in e ? l(t, e[i], a) : i && i instanceof u ? l(t, D(i), a) : i != null && i.type && i.type instanceof u ? l(t, D(i.type), a) : l(t, e.NONE, a);
}
function l(t, i, a = !0) {
  let n = null;
  switch (i) {
    case e.Null:
      n = t.visitNull;
      break;
    case e.Bool:
      n = t.visitBool;
      break;
    case e.Int:
      n = t.visitInt;
      break;
    case e.Int8:
      n = t.visitInt8 || t.visitInt;
      break;
    case e.Int16:
      n = t.visitInt16 || t.visitInt;
      break;
    case e.Int32:
      n = t.visitInt32 || t.visitInt;
      break;
    case e.Int64:
      n = t.visitInt64 || t.visitInt;
      break;
    case e.Uint8:
      n = t.visitUint8 || t.visitInt;
      break;
    case e.Uint16:
      n = t.visitUint16 || t.visitInt;
      break;
    case e.Uint32:
      n = t.visitUint32 || t.visitInt;
      break;
    case e.Uint64:
      n = t.visitUint64 || t.visitInt;
      break;
    case e.Float:
      n = t.visitFloat;
      break;
    case e.Float16:
      n = t.visitFloat16 || t.visitFloat;
      break;
    case e.Float32:
      n = t.visitFloat32 || t.visitFloat;
      break;
    case e.Float64:
      n = t.visitFloat64 || t.visitFloat;
      break;
    case e.Utf8:
      n = t.visitUtf8;
      break;
    case e.LargeUtf8:
      n = t.visitLargeUtf8;
      break;
    case e.Binary:
      n = t.visitBinary;
      break;
    case e.LargeBinary:
      n = t.visitLargeBinary;
      break;
    case e.FixedSizeBinary:
      n = t.visitFixedSizeBinary;
      break;
    case e.Date:
      n = t.visitDate;
      break;
    case e.DateDay:
      n = t.visitDateDay || t.visitDate;
      break;
    case e.DateMillisecond:
      n = t.visitDateMillisecond || t.visitDate;
      break;
    case e.Timestamp:
      n = t.visitTimestamp;
      break;
    case e.TimestampSecond:
      n = t.visitTimestampSecond || t.visitTimestamp;
      break;
    case e.TimestampMillisecond:
      n = t.visitTimestampMillisecond || t.visitTimestamp;
      break;
    case e.TimestampMicrosecond:
      n = t.visitTimestampMicrosecond || t.visitTimestamp;
      break;
    case e.TimestampNanosecond:
      n = t.visitTimestampNanosecond || t.visitTimestamp;
      break;
    case e.Time:
      n = t.visitTime;
      break;
    case e.TimeSecond:
      n = t.visitTimeSecond || t.visitTime;
      break;
    case e.TimeMillisecond:
      n = t.visitTimeMillisecond || t.visitTime;
      break;
    case e.TimeMicrosecond:
      n = t.visitTimeMicrosecond || t.visitTime;
      break;
    case e.TimeNanosecond:
      n = t.visitTimeNanosecond || t.visitTime;
      break;
    case e.Decimal:
      n = t.visitDecimal;
      break;
    case e.List:
      n = t.visitList;
      break;
    case e.Struct:
      n = t.visitStruct;
      break;
    case e.Union:
      n = t.visitUnion;
      break;
    case e.DenseUnion:
      n = t.visitDenseUnion || t.visitUnion;
      break;
    case e.SparseUnion:
      n = t.visitSparseUnion || t.visitUnion;
      break;
    case e.Dictionary:
      n = t.visitDictionary;
      break;
    case e.Interval:
      n = t.visitInterval;
      break;
    case e.IntervalDayTime:
      n = t.visitIntervalDayTime || t.visitInterval;
      break;
    case e.IntervalYearMonth:
      n = t.visitIntervalYearMonth || t.visitInterval;
      break;
    case e.Duration:
      n = t.visitDuration;
      break;
    case e.DurationSecond:
      n = t.visitDurationSecond || t.visitDuration;
      break;
    case e.DurationMillisecond:
      n = t.visitDurationMillisecond || t.visitDuration;
      break;
    case e.DurationMicrosecond:
      n = t.visitDurationMicrosecond || t.visitDuration;
      break;
    case e.DurationNanosecond:
      n = t.visitDurationNanosecond || t.visitDuration;
      break;
    case e.FixedSizeList:
      n = t.visitFixedSizeList;
      break;
    case e.Map:
      n = t.visitMap;
      break;
  }
  if (typeof n == "function")
    return n;
  if (!a)
    return () => null;
  throw new Error(`Unrecognized type '${e[i]}'`);
}
function D(t) {
  switch (t.typeId) {
    case e.Null:
      return e.Null;
    case e.Int: {
      const { bitWidth: i, isSigned: a } = t;
      switch (i) {
        case 8:
          return a ? e.Int8 : e.Uint8;
        case 16:
          return a ? e.Int16 : e.Uint16;
        case 32:
          return a ? e.Int32 : e.Uint32;
        case 64:
          return a ? e.Int64 : e.Uint64;
      }
      return e.Int;
    }
    case e.Float:
      switch (t.precision) {
        case c.HALF:
          return e.Float16;
        case c.SINGLE:
          return e.Float32;
        case c.DOUBLE:
          return e.Float64;
      }
      return e.Float;
    case e.Binary:
      return e.Binary;
    case e.LargeBinary:
      return e.LargeBinary;
    case e.Utf8:
      return e.Utf8;
    case e.LargeUtf8:
      return e.LargeUtf8;
    case e.Bool:
      return e.Bool;
    case e.Decimal:
      return e.Decimal;
    case e.Time:
      switch (t.unit) {
        case s.SECOND:
          return e.TimeSecond;
        case s.MILLISECOND:
          return e.TimeMillisecond;
        case s.MICROSECOND:
          return e.TimeMicrosecond;
        case s.NANOSECOND:
          return e.TimeNanosecond;
      }
      return e.Time;
    case e.Timestamp:
      switch (t.unit) {
        case s.SECOND:
          return e.TimestampSecond;
        case s.MILLISECOND:
          return e.TimestampMillisecond;
        case s.MICROSECOND:
          return e.TimestampMicrosecond;
        case s.NANOSECOND:
          return e.TimestampNanosecond;
      }
      return e.Timestamp;
    case e.Date:
      switch (t.unit) {
        case m.DAY:
          return e.DateDay;
        case m.MILLISECOND:
          return e.DateMillisecond;
      }
      return e.Date;
    case e.Interval:
      switch (t.unit) {
        case p.DAY_TIME:
          return e.IntervalDayTime;
        case p.YEAR_MONTH:
          return e.IntervalYearMonth;
      }
      return e.Interval;
    case e.Duration:
      switch (t.unit) {
        case s.SECOND:
          return e.DurationSecond;
        case s.MILLISECOND:
          return e.DurationMillisecond;
        case s.MICROSECOND:
          return e.DurationMicrosecond;
        case s.NANOSECOND:
          return e.DurationNanosecond;
      }
      return e.Duration;
    case e.Map:
      return e.Map;
    case e.List:
      return e.List;
    case e.Struct:
      return e.Struct;
    case e.Union:
      switch (t.mode) {
        case o.Dense:
          return e.DenseUnion;
        case o.Sparse:
          return e.SparseUnion;
      }
      return e.Union;
    case e.FixedSizeBinary:
      return e.FixedSizeBinary;
    case e.FixedSizeList:
      return e.FixedSizeList;
    case e.Dictionary:
      return e.Dictionary;
  }
  throw new Error(`Unrecognized type '${e[t.typeId]}'`);
}
r.prototype.visitInt8 = null;
r.prototype.visitInt16 = null;
r.prototype.visitInt32 = null;
r.prototype.visitInt64 = null;
r.prototype.visitUint8 = null;
r.prototype.visitUint16 = null;
r.prototype.visitUint32 = null;
r.prototype.visitUint64 = null;
r.prototype.visitFloat16 = null;
r.prototype.visitFloat32 = null;
r.prototype.visitFloat64 = null;
r.prototype.visitDateDay = null;
r.prototype.visitDateMillisecond = null;
r.prototype.visitTimestampSecond = null;
r.prototype.visitTimestampMillisecond = null;
r.prototype.visitTimestampMicrosecond = null;
r.prototype.visitTimestampNanosecond = null;
r.prototype.visitTimeSecond = null;
r.prototype.visitTimeMillisecond = null;
r.prototype.visitTimeMicrosecond = null;
r.prototype.visitTimeNanosecond = null;
r.prototype.visitDenseUnion = null;
r.prototype.visitSparseUnion = null;
r.prototype.visitIntervalDayTime = null;
r.prototype.visitIntervalYearMonth = null;
r.prototype.visitDuration = null;
r.prototype.visitDurationSecond = null;
r.prototype.visitDurationMillisecond = null;
r.prototype.visitDurationMicrosecond = null;
r.prototype.visitDurationNanosecond = null;
export {
  r as Visitor
};
//# sourceMappingURL=cori.data.api564.js.map
