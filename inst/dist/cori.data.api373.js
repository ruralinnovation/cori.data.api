import { deserialize as t } from "./cori.data.api477.js";
import { serialize as u } from "./cori.data.api478.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const s = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (r, e) => e && ("json" in e || "lossy" in e) ? t(u(r, e)) : structuredClone(r)
) : (r, e) => t(u(r, e));
export {
  s as default,
  t as deserialize,
  u as serialize
};
//# sourceMappingURL=cori.data.api373.js.map
