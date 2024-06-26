/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(t, e) {
  const p = { type: "text", value: e.value.replace(/\r?\n|\r/g, " ") };
  t.patch(e, p);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [p]
  };
  return t.patch(e, r), t.applyData(e, r);
}
export {
  a as inlineCode
};
//# sourceMappingURL=cori.data.api358.js.map
