import c from "./cori.data.api214.js";
import d from "./cori.data.api280.js";
import l from "./cori.data.api136.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(e, f, r = {}) {
  const m = d(e, l(f, { table: e }), r);
  return r.drop || r.before == null && r.after == null ? m : c(
    m,
    Object.keys(f).filter((t) => !e.column(t)),
    r
  );
}
export {
  i as default
};
//# sourceMappingURL=cori.data.api204.js.map
