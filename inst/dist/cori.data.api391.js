import { formatUTCDate as f, formatDate as n } from "./cori.data.api389.js";
import m from "./cori.data.api383.js";
import s from "./cori.data.api264.js";
import u from "./cori.data.api393.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function x(t, r = {}) {
  if (s(r))
    return r(t) + "";
  const o = typeof t;
  if (o === "object") {
    if (m(t))
      return r.utc ? f(t) : n(t);
    {
      const e = JSON.stringify(
        t,
        (l, i) => u(i) ? Array.from(i) : i
      ), a = r.maxlen || 30;
      return e.length > a ? e.slice(0, 28) + "…" + (e[0] === "[" ? "]" : "}") : e;
    }
  } else if (o === "number") {
    const e = r.digits || 0;
    let a;
    return t !== 0 && ((a = Math.abs(t)) >= 1e18 || a < Math.pow(10, -e)) ? t.toExponential(e) : t.toFixed(e);
  } else
    return t + "";
}
export {
  x as default
};
//# sourceMappingURL=cori.data.api391.js.map
