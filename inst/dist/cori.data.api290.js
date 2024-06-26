import a from "./cori.data.api288.js";
import { rowObjectCode as p } from "./cori.data.api269.js";
import n from "./cori.data.api260.js";
import c from "./cori.data.api395.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const s = "Escaped functions are not valid as rollup or pivot values.";
function u(o, r, e) {
  o.aggronly && n(s);
  const t = "(row,data)=>fn(" + p(o.table.columnNames()) + ",$)";
  return { escape: a.escape(t, c(r.expr), e) };
}
export {
  u as default
};
//# sourceMappingURL=cori.data.api290.js.map
