import { normalizeUri as o } from "./cori.data.api382.js";
import { revert as p } from "./cori.data.api483.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function m(e, t) {
  const l = String(t.identifier).toUpperCase(), i = e.definitionById.get(l);
  if (!i)
    return p(e, t);
  const r = { src: o(i.url || ""), alt: t.alt };
  i.title !== null && i.title !== void 0 && (r.title = i.title);
  const n = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, n), e.applyData(t, n);
}
export {
  m as imageReference
};
//# sourceMappingURL=cori.data.api364.js.map
