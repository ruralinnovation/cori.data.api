import e from "./cori.data.api19.js";
import n from "./cori.data.api29.js";
import r from "./cori.data.api43.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function c(o, i) {
  return n(o, new r.classes.URLSearchParams(), Object.assign({
    visitor: function(t, s, f, a) {
      return r.isNode && e.isBuffer(t) ? (this.append(s, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
export {
  c as default
};
//# sourceMappingURL=cori.data.api42.js.map
