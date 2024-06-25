import n from "./cori.data.api525.js";
import f from "./cori.data.api526.js";
import u from "./cori.data.api356.js";
import c from "./cori.data.api524.js";
import { array_agg_distinct as s } from "./cori.data.api36.js";
import a from "./cori.data.api333.js";
import g from "./cori.data.api381.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function S(r, o, m = {}) {
  if (o = u(o, { table: r }), o.names.forEach(
    (t) => r.column(t) ? 0 : a(`Invalid impute column ${g(t)}`)
  ), m.expand) {
    const t = { preparse: d, aggronly: !0 }, p = c("impute", r, m.expand, t), i = f(r.ungroup(), p);
    return n(
      r,
      o,
      p.names,
      p.names.map((e) => i.get(e, 0))
    );
  } else
    return n(r, o);
}
function d(r) {
  r.forEach(
    (o, m) => o.field ? r.set(m, s(o + "")) : 0
  );
}
export {
  S as default
};
//# sourceMappingURL=cori.data.api468.js.map
