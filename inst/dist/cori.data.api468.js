import d from "./cori.data.api528.js";
import p from "./cori.data.api529.js";
import f from "./cori.data.api358.js";
import u from "./cori.data.api315.js";
import s from "./cori.data.api319.js";
import l from "./cori.data.api344.js";
import x from "./cori.data.api316.js";
import y from "./cori.data.api362.js";
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
//# sourceMappingURL=cori.data.api468.js.map
