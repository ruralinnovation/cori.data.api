import c from "./cori.data.api162.js";
import { xhtml as n } from "./cori.data.api163.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === n && t.documentElement.namespaceURI === n ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function a(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function i(e) {
  var t = c(e);
  return (t.local ? a : o)(t);
}
export {
  i as default
};
//# sourceMappingURL=cori.data.api161.js.map
