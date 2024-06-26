import { normalizeUri as e } from "./cori.data.api374.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(l, t) {
  const i = { href: e(t.url) };
  t.title !== null && t.title !== void 0 && (i.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: i,
    children: l.all(t)
  };
  return l.patch(t, r), l.applyData(t, r);
}
export {
  a as link
};
//# sourceMappingURL=cori.data.api360.js.map
