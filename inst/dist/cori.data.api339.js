/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(e, r) {
  const l = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(r), !0)
  };
  return e.patch(r, l), e.applyData(r, l);
}
export {
  p as blockquote
};
//# sourceMappingURL=cori.data.api339.js.map
