/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(r, t) {
  const e = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: r.all(t)
  };
  return r.patch(t, e), r.applyData(t, e);
}
export {
  p as strong
};
//# sourceMappingURL=cori.data.api362.js.map
