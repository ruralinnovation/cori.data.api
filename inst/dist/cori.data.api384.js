import g from "./cori.data.api481.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const e = (t) => (t < 10 ? "0" : "") + t, C = (t) => t < 0 ? "-" + g(-t, 6) : t > 9999 ? "+" + g(t, 6) : g(t, 4);
function s(t, n, T, o, a, i, f, l, u) {
  const r = l ? "Z" : "";
  return C(t) + "-" + e(n + 1) + "-" + e(T) + (!u || f ? "T" + e(o) + ":" + e(a) + ":" + e(i) + "." + g(f, 3) + r : i ? "T" + e(o) + ":" + e(a) + ":" + e(i) + r : a || o || !l ? "T" + e(o) + ":" + e(a) + r : "");
}
function c(t, n) {
  return isNaN(t) ? "Invalid Date" : s(
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds(),
    !1,
    n
  );
}
function D(t, n) {
  return isNaN(t) ? "Invalid Date" : s(
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds(),
    !0,
    n
  );
}
export {
  c as formatDate,
  s as formatISO,
  D as formatUTCDate
};
//# sourceMappingURL=cori.data.api384.js.map
