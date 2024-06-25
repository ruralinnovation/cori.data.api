import { Type as v } from "./cori.data.api497.js";
import { Visitor as u } from "./cori.data.api560.js";
import { instance as l } from "./cori.data.api555.js";
import { BitIterator as f, getBool as m } from "./cori.data.api559.js";
import { createElementComparator as c } from "./cori.data.api553.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class t extends u {
}
function d(o, e) {
  return e === null && o.length > 0 ? 0 : -1;
}
function D(o, e) {
  const { nullBitmap: p } = o;
  if (!p || o.nullCount <= 0)
    return -1;
  let n = 0;
  for (const s of new f(p, o.offset + (e || 0), o.length, p, m)) {
    if (!s)
      return n;
    ++n;
  }
  return -1;
}
function i(o, e, p) {
  if (e === void 0)
    return -1;
  if (e === null)
    switch (o.typeId) {
      case v.Union:
        break;
      case v.Dictionary:
        break;
      default:
        return D(o, p);
    }
  const n = l.getVisitFn(o), s = c(e);
  for (let r = (p || 0) - 1, y = o.length; ++r < y; )
    if (s(n(o, r)))
      return r;
  return -1;
}
function a(o, e, p) {
  const n = l.getVisitFn(o), s = c(e);
  for (let r = (p || 0) - 1, y = o.length; ++r < y; )
    if (s(n(o, r)))
      return r;
  return -1;
}
t.prototype.visitNull = d;
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
t.prototype.visitDenseUnion = a;
t.prototype.visitSparseUnion = a;
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
const x = new t();
export {
  t as IndexOfVisitor,
  x as instance
};
//# sourceMappingURL=cori.data.api557.js.map
