import { normalizeUri as f } from "./cori.data.api374.js";
import { revert as o } from "./cori.data.api475.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function m(i, e) {
  const l = String(e.identifier).toUpperCase(), t = i.definitionById.get(l);
  if (!t)
    return o(i, e);
  const r = { href: f(t.url || "") };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const n = {
    type: "element",
    tagName: "a",
    properties: r,
    children: i.all(e)
  };
  return i.patch(e, n), i.applyData(e, n);
}
export {
  m as linkReference
};
//# sourceMappingURL=cori.data.api359.js.map
