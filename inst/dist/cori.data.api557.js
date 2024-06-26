import { Visitor as v } from "./cori.data.api559.js";
import { Type as l } from "./cori.data.api497.js";
import { Int as c, Time as m, Float as d } from "./cori.data.api411.js";
import { ChunkedIterator as a } from "./cori.data.api553.js";
import { Precision as u } from "./cori.data.api563.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class t extends v {
}
function i(o) {
  const { type: e } = o;
  if (o.nullCount === 0 && o.stride === 1 && (e.typeId === l.Timestamp || e instanceof c && e.bitWidth !== 64 || e instanceof m && e.bitWidth !== 64 || e instanceof d && e.precision !== u.HALF))
    return new a(o.data.length, (r) => {
      const s = o.data[r];
      return s.values.subarray(0, s.length)[Symbol.iterator]();
    });
  let p = 0;
  return new a(o.data.length, (r) => {
    const n = o.data[r].length, y = o.slice(p, p + n);
    return p += n, new h(y);
  });
}
class h {
  constructor(e) {
    this.vector = e, this.index = 0;
  }
  next() {
    return this.index < this.vector.length ? {
      value: this.vector.get(this.index++)
    } : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
t.prototype.visitNull = i;
t.prototype.visitBool = i;
t.prototype.visitInt = i;
t.prototype.visitInt8 = i;
t.prototype.visitInt16 = i;
t.prototype.visitInt32 = i;
t.prototype.visitInt64 = i;
t.prototype.visitUint8 = i;
t.prototype.visitUint16 = i;
t.prototype.visitUint32 = i;
t.prototype.visitUint64 = i;
t.prototype.visitFloat = i;
t.prototype.visitFloat16 = i;
t.prototype.visitFloat32 = i;
t.prototype.visitFloat64 = i;
t.prototype.visitUtf8 = i;
t.prototype.visitLargeUtf8 = i;
t.prototype.visitBinary = i;
t.prototype.visitLargeBinary = i;
t.prototype.visitFixedSizeBinary = i;
t.prototype.visitDate = i;
t.prototype.visitDateDay = i;
t.prototype.visitDateMillisecond = i;
t.prototype.visitTimestamp = i;
t.prototype.visitTimestampSecond = i;
t.prototype.visitTimestampMillisecond = i;
t.prototype.visitTimestampMicrosecond = i;
t.prototype.visitTimestampNanosecond = i;
t.prototype.visitTime = i;
t.prototype.visitTimeSecond = i;
t.prototype.visitTimeMillisecond = i;
t.prototype.visitTimeMicrosecond = i;
t.prototype.visitTimeNanosecond = i;
t.prototype.visitDecimal = i;
t.prototype.visitList = i;
t.prototype.visitStruct = i;
t.prototype.visitUnion = i;
t.prototype.visitDenseUnion = i;
t.prototype.visitSparseUnion = i;
t.prototype.visitDictionary = i;
t.prototype.visitInterval = i;
t.prototype.visitIntervalDayTime = i;
t.prototype.visitIntervalYearMonth = i;
t.prototype.visitDuration = i;
t.prototype.visitDurationSecond = i;
t.prototype.visitDurationMillisecond = i;
t.prototype.visitDurationMicrosecond = i;
t.prototype.visitDurationNanosecond = i;
t.prototype.visitFixedSizeList = i;
t.prototype.visitMap = i;
const M = new t();
export {
  t as IteratorVisitor,
  M as instance
};
//# sourceMappingURL=cori.data.api557.js.map
