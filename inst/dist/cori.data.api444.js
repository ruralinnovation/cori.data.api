import e from "./cori.data.api521.js";
import t from "./cori.data.api526.js";
import p from "./cori.data.api534.js";
import n from "./cori.data.api296.js";
import u from "./cori.data.api274.js";
import f from "./cori.data.api320.js";
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
//# sourceMappingURL=cori.data.api444.js.map
