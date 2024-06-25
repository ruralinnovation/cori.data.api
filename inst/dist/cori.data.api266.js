import { footer as i } from "./cori.data.api327.js";
import { createState as s } from "./cori.data.api328.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function p(o, c) {
  const e = s(o, c), t = e.one(o, void 0), r = i(e), n = Array.isArray(t) ? { type: "root", children: t } : t || { type: "root", children: [] };
  return r && n.children.push({ type: "text", value: `
` }, r), n;
}
export {
  p as toHast
};
//# sourceMappingURL=cori.data.api266.js.map
