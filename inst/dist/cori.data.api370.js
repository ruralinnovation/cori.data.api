import { normalizeUri as e } from "./cori.data.api387.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(i, t) {
  const l = { src: e(t.url) };
  t.alt !== null && t.alt !== void 0 && (l.alt = t.alt), t.title !== null && t.title !== void 0 && (l.title = t.title);
  const r = { type: "element", tagName: "img", properties: l, children: [] };
  return i.patch(t, r), i.applyData(t, r);
}
export {
  p as image
};
//# sourceMappingURL=cori.data.api370.js.map
