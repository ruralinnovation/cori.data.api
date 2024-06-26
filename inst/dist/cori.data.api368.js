/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(e, l) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(l)
  };
  return e.patch(l, t), e.applyData(l, t);
}
export {
  p as tableCell
};
//# sourceMappingURL=cori.data.api368.js.map
