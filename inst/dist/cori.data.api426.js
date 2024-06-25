import n from "./cori.data.api513.js";
import f from "./cori.data.api514.js";
import u from "./cori.data.api289.js";
import c from "./cori.data.api512.js";
import { array_agg_distinct as s } from "./cori.data.api30.js";
import a from "./cori.data.api266.js";
import g from "./cori.data.api314.js";
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
//# sourceMappingURL=cori.data.api426.js.map
