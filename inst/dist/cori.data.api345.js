/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function r(p, e) {
  const t = {
    type: "element",
    tagName: "h" + e.depth,
    properties: {},
    children: p.all(e)
  };
  return p.patch(e, t), p.applyData(e, t);
}
export {
  r as heading
};
//# sourceMappingURL=cori.data.api345.js.map
