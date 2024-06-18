import { VERSION as b } from "./cori.data.api27.js";
import o from "./cori.data.api29.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const u = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, r) => {
  u[t] = function(a) {
    return typeof a === t || "a" + (r < 1 ? "n " : " ") + t;
  };
});
const l = {};
u.transitional = function(r, i, a) {
  function s(e, n) {
    return "[Axios v" + b + "] Transitional option '" + e + "'" + n + (a ? ". " + a : "");
  }
  return (e, n, c) => {
    if (r === !1)
      throw new o(
        s(n, " has been removed" + (i ? " in " + i : "")),
        o.ERR_DEPRECATED
      );
    return i && !l[n] && (l[n] = !0, console.warn(
      s(
        n,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), r ? r(e, n, c) : !0;
  };
};
function d(t, r, i) {
  if (typeof t != "object")
    throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(t);
  let s = a.length;
  for (; s-- > 0; ) {
    const e = a[s], n = r[e];
    if (n) {
      const c = t[e], f = c === void 0 || n(c, e, t);
      if (f !== !0)
        throw new o("option " + e + " must be " + f, o.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new o("Unknown option " + e, o.ERR_BAD_OPTION);
  }
}
const h = {
  assertOptions: d,
  validators: u
};
export {
  h as default
};
