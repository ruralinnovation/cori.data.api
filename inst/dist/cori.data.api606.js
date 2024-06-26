import { Visitor as T } from "./cori.data.api569.js";
import { Null as v } from "./cori.data.api656.js";
import { Int as a } from "./cori.data.api585.js";
import { FloatingPoint as m } from "./cori.data.api594.js";
import { Binary as B } from "./cori.data.api657.js";
import { LargeBinary as S } from "./cori.data.api658.js";
import { Bool as g } from "./cori.data.api659.js";
import { Utf8 as I } from "./cori.data.api660.js";
import { LargeUtf8 as L } from "./cori.data.api661.js";
import { Decimal as n } from "./cori.data.api595.js";
import { Date as u } from "./cori.data.api596.js";
import { Time as o } from "./cori.data.api597.js";
import { Timestamp as s } from "./cori.data.api598.js";
import { Interval as p } from "./cori.data.api599.js";
import { Duration as f } from "./cori.data.api600.js";
import { List as U } from "./cori.data.api662.js";
import { Struct_ as D } from "./cori.data.api663.js";
import { Union as e } from "./cori.data.api601.js";
import { DictionaryEncoding as d } from "./cori.data.api655.js";
import { FixedSizeBinary as l } from "./cori.data.api602.js";
import { FixedSizeList as c } from "./cori.data.api603.js";
import { Map as y } from "./cori.data.api604.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class z extends T {
  visit(i, t) {
    return i == null || t == null ? void 0 : super.visit(i, t);
  }
  visitNull(i, t) {
    return v.startNull(t), v.endNull(t);
  }
  visitInt(i, t) {
    return a.startInt(t), a.addBitWidth(t, i.bitWidth), a.addIsSigned(t, i.isSigned), a.endInt(t);
  }
  visitFloat(i, t) {
    return m.startFloatingPoint(t), m.addPrecision(t, i.precision), m.endFloatingPoint(t);
  }
  visitBinary(i, t) {
    return B.startBinary(t), B.endBinary(t);
  }
  visitLargeBinary(i, t) {
    return S.startLargeBinary(t), S.endLargeBinary(t);
  }
  visitBool(i, t) {
    return g.startBool(t), g.endBool(t);
  }
  visitUtf8(i, t) {
    return I.startUtf8(t), I.endUtf8(t);
  }
  visitLargeUtf8(i, t) {
    return L.startLargeUtf8(t), L.endLargeUtf8(t);
  }
  visitDecimal(i, t) {
    return n.startDecimal(t), n.addScale(t, i.scale), n.addPrecision(t, i.precision), n.addBitWidth(t, i.bitWidth), n.endDecimal(t);
  }
  visitDate(i, t) {
    return u.startDate(t), u.addUnit(t, i.unit), u.endDate(t);
  }
  visitTime(i, t) {
    return o.startTime(t), o.addUnit(t, i.unit), o.addBitWidth(t, i.bitWidth), o.endTime(t);
  }
  visitTimestamp(i, t) {
    const r = i.timezone && t.createString(i.timezone) || void 0;
    return s.startTimestamp(t), s.addUnit(t, i.unit), r !== void 0 && s.addTimezone(t, r), s.endTimestamp(t);
  }
  visitInterval(i, t) {
    return p.startInterval(t), p.addUnit(t, i.unit), p.endInterval(t);
  }
  visitDuration(i, t) {
    return f.startDuration(t), f.addUnit(t, i.unit), f.endDuration(t);
  }
  visitList(i, t) {
    return U.startList(t), U.endList(t);
  }
  visitStruct(i, t) {
    return D.startStruct_(t), D.endStruct_(t);
  }
  visitUnion(i, t) {
    e.startTypeIdsVector(t, i.typeIds.length);
    const r = e.createTypeIdsVector(t, i.typeIds);
    return e.startUnion(t), e.addMode(t, i.mode), e.addTypeIds(t, r), e.endUnion(t);
  }
  visitDictionary(i, t) {
    const r = this.visit(i.indices, t);
    return d.startDictionaryEncoding(t), d.addId(t, BigInt(i.id)), d.addIsOrdered(t, i.isOrdered), r !== void 0 && d.addIndexType(t, r), d.endDictionaryEncoding(t);
  }
  visitFixedSizeBinary(i, t) {
    return l.startFixedSizeBinary(t), l.addByteWidth(t, i.byteWidth), l.endFixedSizeBinary(t);
  }
  visitFixedSizeList(i, t) {
    return c.startFixedSizeList(t), c.addListSize(t, i.listSize), c.endFixedSizeList(t);
  }
  visitMap(i, t) {
    return y.startMap(t), y.addKeysSorted(t, i.keysSorted), y.endMap(t);
  }
}
const X = new z();
export {
  z as TypeAssembler,
  X as instance
};
//# sourceMappingURL=cori.data.api606.js.map
