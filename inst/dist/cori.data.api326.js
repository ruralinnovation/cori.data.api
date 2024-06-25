import a from "./cori.data.api324.js";
import { rowObjectCode as p } from "./cori.data.api305.js";
import n from "./cori.data.api296.js";
import c from "./cori.data.api407.js";
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
//# sourceMappingURL=cori.data.api326.js.map
