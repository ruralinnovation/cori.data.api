import d from "./cori.data.api297.js";
import p from "./cori.data.api298.js";
import f from "./cori.data.api156.js";
import u from "./cori.data.api113.js";
import s from "./cori.data.api117.js";
import l from "./cori.data.api142.js";
import x from "./cori.data.api114.js";
import y from "./cori.data.api160.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function E(e, i) {
  return d(e, b(e, i));
}
function b(e, i) {
  let m = -1;
  const t = /* @__PURE__ */ new Map(), n = (r) => t.set(++m + "", r);
  return i.forEach((r) => {
    const o = r.expr != null ? r.expr : r;
    if (l(o) && !s(o))
      for (const c in o)
        n(o[c]);
    else
      n(
        x(o) ? f(r, e.columnName(o)) : y(o) ? f(r) : s(o) ? r : u(`Invalid orderby field: ${r + ""}`)
      );
  }), p(e, t);
}
export {
  E as default
};
//# sourceMappingURL=cori.data.api223.js.map
