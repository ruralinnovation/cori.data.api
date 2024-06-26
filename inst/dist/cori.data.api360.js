/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function t(e, p) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(p)
  };
  return e.patch(p, r), e.applyData(p, r);
}
export {
  t as emphasis
};
//# sourceMappingURL=cori.data.api360.js.map
