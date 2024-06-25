import { Column as u, Literal as l, Dictionary as s } from "./cori.data.api339.js";
import m from "./cori.data.api319.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const c = {
  "==": 1,
  "!=": 1,
  "===": 1,
  "!==": 1
};
function w(t, n, r = 0, a, e) {
  if (t.type = u, t.name = n, t.table = r, e && a && m(a.keyFor)) {
    const i = c[e.operator] ? e.left === t ? e.right : e.left : e.callee && e.callee.name === "equal" ? e.arguments[e.arguments[0] === t ? 1 : 0] : null;
    i && i.type === l && f(e, t, i, a.keyFor(i.value));
  }
  return t;
}
function f(t, n, r, a) {
  return a < 0 ? (t.type = l, t.value = !1, t.raw = "false") : (n.type = s, r.value = a, r.raw = a + ""), !0;
}
export {
  w as default
};
//# sourceMappingURL=cori.data.api409.js.map
