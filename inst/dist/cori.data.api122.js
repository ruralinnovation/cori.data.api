import { ObjectExpression as m, Property as n, Literal as c } from "./cori.data.api137.js";
import f from "./cori.data.api140.js";
import s from "./cori.data.api141.js";
import u from "./cori.data.api181.js";
import y from "./cori.data.api130.js";
import w from "./cori.data.api153.js";
import O from "./cori.data.api161.js";
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
//# sourceMappingURL=cori.data.api122.js.map
