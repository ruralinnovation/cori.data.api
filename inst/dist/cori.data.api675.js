import { labelEnd as o } from "./cori.data.api677.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const b = {
  name: "labelStartLink",
  tokenize: k,
  resolveAll: o.resolveAll
};
function k(n, r, e) {
  const l = this;
  return a;
  function a(t) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(t), n.exit("labelMarker"), n.exit("labelLink"), i;
  }
  function i(t) {
    return t === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? e(t) : r(t);
  }
}
export {
  b as labelStartLink
};
//# sourceMappingURL=cori.data.api675.js.map
