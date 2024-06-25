import { Visitor as i } from "./cori.data.api318.js";
import { BinaryBuilder as r } from "./cori.data.api374.js";
import { LargeBinaryBuilder as t } from "./cori.data.api376.js";
import { BoolBuilder as e } from "./cori.data.api360.js";
import { DateBuilder as n, DateDayBuilder as o, DateMillisecondBuilder as u } from "./cori.data.api362.js";
import { DecimalBuilder as s } from "./cori.data.api363.js";
import { DictionaryBuilder as l } from "./cori.data.api364.js";
import { FixedSizeBinaryBuilder as d } from "./cori.data.api365.js";
import { FixedSizeListBuilder as m } from "./cori.data.api378.js";
import { FloatBuilder as a, Float16Builder as B, Float32Builder as v, Float64Builder as c } from "./cori.data.api366.js";
import { IntervalBuilder as p, IntervalDayTimeBuilder as f, IntervalYearMonthBuilder as D } from "./cori.data.api371.js";
import { DurationBuilder as T, DurationSecondBuilder as M, DurationMillisecondBuilder as U, DurationMicrosecondBuilder as I, DurationNanosecondBuilder as S } from "./cori.data.api372.js";
import { IntBuilder as y, Int8Builder as F, Int16Builder as L, Int32Builder as N, Int64Builder as x, Uint8Builder as g, Uint16Builder as z, Uint32Builder as h, Uint64Builder as Y } from "./cori.data.api368.js";
import { ListBuilder as w } from "./cori.data.api377.js";
import { MapBuilder as C } from "./cori.data.api379.js";
import { NullBuilder as G } from "./cori.data.api361.js";
import { StructBuilder as V } from "./cori.data.api380.js";
import { TimestampBuilder as b, TimestampSecondBuilder as j, TimestampMillisecondBuilder as k, TimestampMicrosecondBuilder as q, TimestampNanosecondBuilder as A } from "./cori.data.api370.js";
import { TimeBuilder as E, TimeSecondBuilder as H, TimeMillisecondBuilder as J, TimeMicrosecondBuilder as K, TimeNanosecondBuilder as O } from "./cori.data.api369.js";
import { UnionBuilder as P, DenseUnionBuilder as Q, SparseUnionBuilder as R } from "./cori.data.api381.js";
import { Utf8Builder as W } from "./cori.data.api373.js";
import { LargeUtf8Builder as X } from "./cori.data.api375.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class Z extends i {
  visitNull() {
    return G;
  }
  visitBool() {
    return e;
  }
  visitInt() {
    return y;
  }
  visitInt8() {
    return F;
  }
  visitInt16() {
    return L;
  }
  visitInt32() {
    return N;
  }
  visitInt64() {
    return x;
  }
  visitUint8() {
    return g;
  }
  visitUint16() {
    return z;
  }
  visitUint32() {
    return h;
  }
  visitUint64() {
    return Y;
  }
  visitFloat() {
    return a;
  }
  visitFloat16() {
    return B;
  }
  visitFloat32() {
    return v;
  }
  visitFloat64() {
    return c;
  }
  visitUtf8() {
    return W;
  }
  visitLargeUtf8() {
    return X;
  }
  visitBinary() {
    return r;
  }
  visitLargeBinary() {
    return t;
  }
  visitFixedSizeBinary() {
    return d;
  }
  visitDate() {
    return n;
  }
  visitDateDay() {
    return o;
  }
  visitDateMillisecond() {
    return u;
  }
  visitTimestamp() {
    return b;
  }
  visitTimestampSecond() {
    return j;
  }
  visitTimestampMillisecond() {
    return k;
  }
  visitTimestampMicrosecond() {
    return q;
  }
  visitTimestampNanosecond() {
    return A;
  }
  visitTime() {
    return E;
  }
  visitTimeSecond() {
    return H;
  }
  visitTimeMillisecond() {
    return J;
  }
  visitTimeMicrosecond() {
    return K;
  }
  visitTimeNanosecond() {
    return O;
  }
  visitDecimal() {
    return s;
  }
  visitList() {
    return w;
  }
  visitStruct() {
    return V;
  }
  visitUnion() {
    return P;
  }
  visitDenseUnion() {
    return Q;
  }
  visitSparseUnion() {
    return R;
  }
  visitDictionary() {
    return l;
  }
  visitInterval() {
    return p;
  }
  visitIntervalDayTime() {
    return f;
  }
  visitIntervalYearMonth() {
    return D;
  }
  visitDuration() {
    return T;
  }
  visitDurationSecond() {
    return M;
  }
  visitDurationMillisecond() {
    return U;
  }
  visitDurationMicrosecond() {
    return I;
  }
  visitDurationNanosecond() {
    return S;
  }
  visitFixedSizeList() {
    return m;
  }
  visitMap() {
    return C;
  }
}
const Ii = new Z();
export {
  Z as GetBuilderCtor,
  Ii as instance
};
//# sourceMappingURL=cori.data.api358.js.map
