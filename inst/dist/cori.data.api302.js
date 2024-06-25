import { commonjsGlobal as u } from "./cori.data.api116.js";
import { __exports as l } from "./cori.data.api405.js";
import { i as p } from "./cori.data.api406.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var s = u && u.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(l, "__esModule", { value: !0 });
var _ = s(p);
function v(e, f) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  var n = (0, _.default)(e), i = typeof f == "function";
  return n.forEach(function(t) {
    if (t.type === "declaration") {
      var o = t.property, a = t.value;
      i ? f(o, a, t) : a && (r = r || {}, r[o] = a);
    }
  }), r;
}
var j = l.default = v;
export {
  j as default
};
//# sourceMappingURL=cori.data.api302.js.map
