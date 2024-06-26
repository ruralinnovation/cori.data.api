/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(e, r) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(r)
  };
  return e.patch(r, t), e.applyData(r, t);
}
export {
  l as strikethrough
};
//# sourceMappingURL=cori.data.api348.js.map
