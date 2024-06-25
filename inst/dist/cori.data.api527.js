import { rowLookup as g } from "./cori.data.api623.js";
import { aggregateGet as _ } from "./cori.data.api537.js";
import $ from "./cori.data.api303.js";
import k from "./cori.data.api460.js";
import w from "./cori.data.api624.js";
import h from "./cori.data.api492.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function S(r, a, [n, p], { names: c, exprs: s, ops: d }) {
  const m = $(r), i = r.totalRows();
  c.forEach((o) => m.add(o, Array(i).fill(k)));
  const u = g(a, p), l = h(
    ["lr", "rr", "data"],
    "{" + w(c, (o, t) => `_[${t}][lr] = $[${t}](rr, data);`) + "}",
    c.map((o) => m.data[o]),
    _(a, d, s)
  ), e = a.data();
  return r.scan((o, t) => {
    const f = u.get(n(o, t));
    f >= 0 && l(o, f, e);
  }), r.create(m);
}
export {
  S as default
};
//# sourceMappingURL=cori.data.api527.js.map
