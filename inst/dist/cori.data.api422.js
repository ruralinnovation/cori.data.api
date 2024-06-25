import { formatDate as f, formatUTCDate as D } from "./cori.data.api401.js";
import l from "./cori.data.api517.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const m = 6e4, T = 864e5, g = 6048e5, e = /* @__PURE__ */ new Date(), o = /* @__PURE__ */ new Date(), s = (t) => (e.setTime(typeof t == "string" ? l(t) : t), e);
function C(t, n, a, r, u, c, i) {
  return arguments.length ? new Date(
    t,
    n || 0,
    a ?? 1,
    r || 0,
    u || 0,
    c || 0,
    i || 0
  ) : new Date(Date.now());
}
function U(t, n, a, r, u, c, i) {
  return arguments.length ? new Date(Date.UTC(
    t,
    n || 0,
    a ?? 1,
    r || 0,
    u || 0,
    c || 0,
    i || 0
  )) : new Date(Date.now());
}
function h(t) {
  o.setTime(+t), o.setHours(0, 0, 0, 0), e.setTime(+o), e.setMonth(0), e.setDate(1);
  const n = (o.getTimezoneOffset() - e.getTimezoneOffset()) * m;
  return Math.floor(1 + (o - e - n) / T);
}
function M(t) {
  o.setTime(+t), o.setUTCHours(0, 0, 0, 0);
  const n = Date.UTC(o.getUTCFullYear(), 0, 1);
  return Math.floor(1 + (o - n) / T);
}
function y(t, n) {
  const a = n || 0;
  o.setTime(+t), o.setDate(o.getDate() - (o.getDay() + 7 - a) % 7), o.setHours(0, 0, 0, 0), e.setTime(+t), e.setMonth(0), e.setDate(1), e.setDate(1 - (e.getDay() + 7 - a) % 7), e.setHours(0, 0, 0, 0);
  const r = (o.getTimezoneOffset() - e.getTimezoneOffset()) * m;
  return Math.floor((1 + (o - e) - r) / g);
}
function d(t, n) {
  const a = n || 0;
  return o.setTime(+t), o.setUTCDate(o.getUTCDate() - (o.getUTCDay() + 7 - a) % 7), o.setUTCHours(0, 0, 0, 0), e.setTime(+t), e.setUTCMonth(0), e.setUTCDate(1), e.setUTCDate(1 - (e.getUTCDay() + 7 - a) % 7), e.setUTCHours(0, 0, 0, 0), Math.floor((1 + (o - e)) / g);
}
const p = {
  format_date: (t, n) => f(s(t), !n),
  format_utcdate: (t, n) => D(s(t), !n),
  timestamp: (t) => +s(t),
  year: (t) => s(t).getFullYear(),
  quarter: (t) => Math.floor(s(t).getMonth() / 3),
  month: (t) => s(t).getMonth(),
  date: (t) => s(t).getDate(),
  dayofweek: (t) => s(t).getDay(),
  hours: (t) => s(t).getHours(),
  minutes: (t) => s(t).getMinutes(),
  seconds: (t) => s(t).getSeconds(),
  milliseconds: (t) => s(t).getMilliseconds(),
  utcyear: (t) => s(t).getUTCFullYear(),
  utcquarter: (t) => Math.floor(s(t).getUTCMonth() / 3),
  utcmonth: (t) => s(t).getUTCMonth(),
  utcdate: (t) => s(t).getUTCDate(),
  utcdayofweek: (t) => s(t).getUTCDay(),
  utchours: (t) => s(t).getUTCHours(),
  utcminutes: (t) => s(t).getUTCMinutes(),
  utcseconds: (t) => s(t).getUTCSeconds(),
  utcmilliseconds: (t) => s(t).getUTCMilliseconds(),
  datetime: C,
  dayofyear: h,
  week: y,
  utcdatetime: U,
  utcdayofyear: M,
  utcweek: d,
  now: Date.now
};
export {
  p as default
};
//# sourceMappingURL=cori.data.api422.js.map
