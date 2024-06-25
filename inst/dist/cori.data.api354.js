/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(p, r) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: p.all(r)
  };
  return p.patch(r, a), p.applyData(r, a);
}
export {
  e as paragraph
};
//# sourceMappingURL=cori.data.api354.js.map
