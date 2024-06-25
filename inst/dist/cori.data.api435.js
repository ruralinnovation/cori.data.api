import e from "./cori.data.api509.js";
import t from "./cori.data.api514.js";
import p from "./cori.data.api522.js";
import n from "./cori.data.api289.js";
import u from "./cori.data.api267.js";
import f from "./cori.data.api313.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function N(o, r, m = {}) {
  return p(
    o,
    c(o, r),
    l(o, m.weight),
    m
  );
}
const i = (o) => (r) => o.get(r) || 0;
function c(o, r) {
  return u(r) ? () => r : i(t(o, n({ size: r }, { table: o, window: !1 })).column("size"));
}
function l(o, r) {
  return r == null ? null : (r = u(r) ? o.columnName(r) : r, i(
    f(r) ? o.column(r) : e(o, n({ w: r }, { table: o }), { drop: !0 }).column("w")
  ));
}
export {
  N as default
};
//# sourceMappingURL=cori.data.api435.js.map
