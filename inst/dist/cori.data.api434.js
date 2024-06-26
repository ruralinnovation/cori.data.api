import _ from "./cori.data.api532.js";
import a from "./cori.data.api295.js";
import l from "./cori.data.api280.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function g(r, e, { before: c, after: i } = {}) {
  const t = c != null, s = i != null;
  t || s || l("relocate requires a before or after option."), t && s && l("relocate accepts only one of the before or after options."), e = a(r, e);
  const n = [...a(r, t ? c : i).keys()], u = t ? n[0] : n.pop(), f = /* @__PURE__ */ new Map();
  return r.columnNames().forEach((o) => {
    const p = !e.has(o);
    if (o === u) {
      s && p && f.set(o, o);
      for (const [h, y] of e)
        f.set(h, y);
      if (s)
        return;
    }
    p && f.set(o, o);
  }), _(r, f);
}
export {
  g as default
};
//# sourceMappingURL=cori.data.api434.js.map
