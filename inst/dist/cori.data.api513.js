import { Visitor as f } from "./cori.data.api560.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class n extends f {
  compareSchemas(i, o) {
    return i === o || o instanceof i.constructor && this.compareManyFields(i.fields, o.fields);
  }
  compareManyFields(i, o) {
    return i === o || Array.isArray(i) && Array.isArray(o) && i.length === o.length && i.every((u, S) => this.compareFields(u, o[S]));
  }
  compareFields(i, o) {
    return i === o || o instanceof i.constructor && i.name === o.name && i.nullable === o.nullable && this.visit(i.type, o.type);
  }
}
function r(t, i) {
  return i instanceof t.constructor;
}
function c(t, i) {
  return t === i || r(t, i);
}
function e(t, i) {
  return t === i || r(t, i) && t.bitWidth === i.bitWidth && t.isSigned === i.isSigned;
}
function l(t, i) {
  return t === i || r(t, i) && t.precision === i.precision;
}
function F(t, i) {
  return t === i || r(t, i) && t.byteWidth === i.byteWidth;
}
function v(t, i) {
  return t === i || r(t, i) && t.unit === i.unit;
}
function p(t, i) {
  return t === i || r(t, i) && t.unit === i.unit && t.timezone === i.timezone;
}
function a(t, i) {
  return t === i || r(t, i) && t.unit === i.unit && t.bitWidth === i.bitWidth;
}
function M(t, i) {
  return t === i || r(t, i) && t.children.length === i.children.length && s.compareManyFields(t.children, i.children);
}
function D(t, i) {
  return t === i || r(t, i) && t.children.length === i.children.length && s.compareManyFields(t.children, i.children);
}
function m(t, i) {
  return t === i || r(t, i) && t.mode === i.mode && t.typeIds.every((o, u) => o === i.typeIds[u]) && s.compareManyFields(t.children, i.children);
}
function g(t, i) {
  return t === i || r(t, i) && t.id === i.id && t.isOrdered === i.isOrdered && s.visit(t.indices, i.indices) && s.visit(t.dictionary, i.dictionary);
}
function y(t, i) {
  return t === i || r(t, i) && t.unit === i.unit;
}
function d(t, i) {
  return t === i || r(t, i) && t.unit === i.unit;
}
function T(t, i) {
  return t === i || r(t, i) && t.listSize === i.listSize && t.children.length === i.children.length && s.compareManyFields(t.children, i.children);
}
function I(t, i) {
  return t === i || r(t, i) && t.keysSorted === i.keysSorted && t.children.length === i.children.length && s.compareManyFields(t.children, i.children);
}
n.prototype.visitNull = c;
n.prototype.visitBool = c;
n.prototype.visitInt = e;
n.prototype.visitInt8 = e;
n.prototype.visitInt16 = e;
n.prototype.visitInt32 = e;
n.prototype.visitInt64 = e;
n.prototype.visitUint8 = e;
n.prototype.visitUint16 = e;
n.prototype.visitUint32 = e;
n.prototype.visitUint64 = e;
n.prototype.visitFloat = l;
n.prototype.visitFloat16 = l;
n.prototype.visitFloat32 = l;
n.prototype.visitFloat64 = l;
n.prototype.visitUtf8 = c;
n.prototype.visitLargeUtf8 = c;
n.prototype.visitBinary = c;
n.prototype.visitLargeBinary = c;
n.prototype.visitFixedSizeBinary = F;
n.prototype.visitDate = v;
n.prototype.visitDateDay = v;
n.prototype.visitDateMillisecond = v;
n.prototype.visitTimestamp = p;
n.prototype.visitTimestampSecond = p;
n.prototype.visitTimestampMillisecond = p;
n.prototype.visitTimestampMicrosecond = p;
n.prototype.visitTimestampNanosecond = p;
n.prototype.visitTime = a;
n.prototype.visitTimeSecond = a;
n.prototype.visitTimeMillisecond = a;
n.prototype.visitTimeMicrosecond = a;
n.prototype.visitTimeNanosecond = a;
n.prototype.visitDecimal = c;
n.prototype.visitList = M;
n.prototype.visitStruct = D;
n.prototype.visitUnion = m;
n.prototype.visitDenseUnion = m;
n.prototype.visitSparseUnion = m;
n.prototype.visitDictionary = g;
n.prototype.visitInterval = y;
n.prototype.visitIntervalDayTime = y;
n.prototype.visitIntervalYearMonth = y;
n.prototype.visitDuration = d;
n.prototype.visitDurationSecond = d;
n.prototype.visitDurationMillisecond = d;
n.prototype.visitDurationMicrosecond = d;
n.prototype.visitDurationNanosecond = d;
n.prototype.visitFixedSizeList = T;
n.prototype.visitMap = I;
const s = new n();
function b(t, i) {
  return s.compareSchemas(t, i);
}
export {
  n as TypeComparator,
  b as compareSchemas,
  s as instance
};
//# sourceMappingURL=cori.data.api513.js.map
