import e from "./cori.data.api206.js";
import n from "./cori.data.api216.js";
import r from "./cori.data.api304.js";
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
//# sourceMappingURL=cori.data.api303.js.map
