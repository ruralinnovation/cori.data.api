import { rowLookup as g } from "./cori.data.api622.js";
import { aggregateGet as _ } from "./cori.data.api530.js";
import $ from "./cori.data.api322.js";
import k from "./cori.data.api445.js";
import w from "./cori.data.api623.js";
import h from "./cori.data.api484.js";
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
//# sourceMappingURL=cori.data.api520.js.map
