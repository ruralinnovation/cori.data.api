import { trimLines as p } from "./cori.data.api484.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(r, t) {
  const e = { type: "text", value: p(String(t.value)) };
  return r.patch(t, e), r.applyData(t, e);
}
export {
  i as text
};
//# sourceMappingURL=cori.data.api377.js.map
