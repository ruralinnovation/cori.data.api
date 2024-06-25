import { ObjectExpression as m, Property as n, Literal as c } from "./cori.data.api339.js";
import f from "./cori.data.api342.js";
import s from "./cori.data.api343.js";
import u from "./cori.data.api409.js";
import y from "./cori.data.api332.js";
import w from "./cori.data.api355.js";
import O from "./cori.data.api363.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const B = "row_object";
function a(r, t) {
  r.type = m;
  const e = r.properties = [];
  for (const o of y(t)) {
    const [p, i] = w(o) ? o : [o, o];
    e.push({
      type: n,
      key: { type: c, raw: O(i) },
      value: u({ computed: !0 }, p)
    });
  }
  return r;
}
function b(r) {
  return f(a({}, r));
}
function C(r) {
  return s.expr(b(r));
}
export {
  B as ROW_OBJECT,
  C as rowObjectBuilder,
  b as rowObjectCode,
  a as rowObjectExpression
};
//# sourceMappingURL=cori.data.api324.js.map
