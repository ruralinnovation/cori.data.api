import a from "./cori.data.api411.js";
import o from "./cori.data.api281.js";
import c from "./cori.data.api407.js";
import l from "./cori.data.api389.js";
import y from "./cori.data.api495.js";
import { Type as r } from "./cori.data.api496.js";
import { Field as m } from "./cori.data.api497.js";
import { FixedSizeList as u, List as d, Struct as x } from "./cori.data.api413.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function U(t, n) {
  const i = f();
  return t(n, i.add), i;
}
function f() {
  const t = {
    count: 0,
    nulls: 0,
    bools: 0,
    nums: 0,
    ints: 0,
    bigints: 0,
    min: 1 / 0,
    max: -1 / 0,
    digits: 0,
    dates: 0,
    utcdays: 0,
    strings: 0,
    strlen: 0,
    arrays: 0,
    minlen: 1 / 0,
    maxlen: 0,
    structs: 0,
    add(n) {
      if (++t.count, n == null) {
        ++t.nulls;
        return;
      }
      const i = typeof n;
      if (i === "string")
        ++t.strings;
      else if (i === "number")
        ++t.nums, n < t.min && (t.min = n), n > t.max && (t.max = n), Number.isInteger(n) && ++t.ints;
      else if (i === "boolean")
        ++t.bools;
      else if (i === "object")
        if (l(n))
          ++t.dates, y(n) && ++t.utcdays;
        else if (c(n)) {
          ++t.arrays, n.length < t.minlen && (t.minlen = n.length), n.length > t.maxlen && (t.maxlen = n.length);
          const e = t.array_prof || (t.array_prof = f());
          n.forEach(e.add);
        } else {
          ++t.structs;
          const e = t.struct_prof || (t.struct_prof = {});
          for (const s in n)
            (e[s] || (e[s] = f())).add(n[s]);
        }
      else
        i === "bigint" && (++t.bigints, n < t.min && (t.min = n), n > t.max && (t.max = n));
    },
    type() {
      return a(g(t));
    }
  };
  return t;
}
function g(t) {
  const n = t.count - t.nulls;
  if (n === 0)
    return r.Null;
  if (t.ints === n) {
    const i = Math.max(Math.abs(t.min) - 1, t.max);
    return t.min < 0 ? i >= 2 ** 31 ? r.Float64 : i < 128 ? r.Int8 : i < 32768 ? r.Int16 : r.Int32 : i >= 2 ** 32 ? r.Float64 : i < 256 ? r.Uint8 : i < 65536 ? r.Uint16 : r.Uint32;
  } else {
    if (t.nums === n)
      return r.Float64;
    if (t.bigints === n) {
      const i = -t.min > t.max ? -t.min - 1n : t.max;
      return t.min < 0 ? i < 2 ** 63 ? r.Int64 : o(`BigInt exceeds 64 bits: ${i}`) : t.max < 2 ** 64 ? r.Uint64 : o(`BigInt exceeds 64 bits: ${t.max}`);
    } else {
      if (t.bools === n)
        return r.Bool;
      if (t.utcdays === n)
        return r.DateDay;
      if (t.dates === n)
        return r.DateMillisecond;
      if (t.arrays === n) {
        const i = m.new("value", t.array_prof.type(), !0);
        return t.minlen === t.maxlen ? new u(t.minlen, i) : new d(i);
      } else if (t.structs === n) {
        const i = t.struct_prof;
        return new x(
          Object.keys(i).map((e) => m.new(e, i[e].type(), !0))
        );
      } else {
        if (t.strings > 0)
          return r.Dictionary;
        o("Type inference failure");
      }
    }
  }
}
export {
  U as profile,
  f as profiler
};
//# sourceMappingURL=cori.data.api410.js.map
