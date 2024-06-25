import c from "./cori.data.api443.js";
import d from "./cori.data.api520.js";
import l from "./cori.data.api304.js";
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
//# sourceMappingURL=cori.data.api433.js.map
