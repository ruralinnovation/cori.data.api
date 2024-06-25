import { labelEnd as u } from "./cori.data.api651.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const g = {
  name: "labelStartImage",
  tokenize: m,
  resolveAll: u.resolveAll
};
function m(r, a, t) {
  const n = this;
  return l;
  function l(e) {
    return r.enter("labelImage"), r.enter("labelImageMarker"), r.consume(e), r.exit("labelImageMarker"), o;
  }
  function o(e) {
    return e === 91 ? (r.enter("labelMarker"), r.consume(e), r.exit("labelMarker"), r.exit("labelImage"), i) : t(e);
  }
  function i(e) {
    return e === 94 && "_hiddenFootnoteSupport" in n.parser.constructs ? t(e) : a(e);
  }
}
export {
  g as labelStartImage
};
//# sourceMappingURL=cori.data.api645.js.map
