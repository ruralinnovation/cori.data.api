import o, { identity as i } from "./cori.data.api247.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var n;
function s(t) {
  const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return r.isIdentity ? i : o(r.a, r.b, r.c, r.d, r.e, r.f);
}
function f(t) {
  return t == null ? i : (n || (n = document.createElementNS("http://www.w3.org/2000/svg", "g")), n.setAttribute("transform", t), (t = n.transform.baseVal.consolidate()) ? (t = t.matrix, o(t.a, t.b, t.c, t.d, t.e, t.f)) : i);
}
export {
  s as parseCss,
  f as parseSvg
};
//# sourceMappingURL=cori.data.api113.js.map
