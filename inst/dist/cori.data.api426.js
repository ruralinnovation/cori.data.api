import a from "./cori.data.api460.js";
import l from "./cori.data.api397.js";
import n from "./cori.data.api406.js";
import r from "./cori.data.api489.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function t(e) {
  return Array.from(e);
}
const c = {
  has: (e, s) => r(e) ? e.has(s) : e != null ? l(e, s) : !1,
  keys: (e) => n(e) ? t(e.keys()) : e != null ? Object.keys(e) : [],
  values: (e) => r(e) ? t(e.values()) : e != null ? Object.values(e) : [],
  entries: (e) => r(e) ? t(e.entries()) : e != null ? Object.entries(e) : [],
  object: (e) => e ? Object.fromEntries(e) : a
};
export {
  c as default
};
//# sourceMappingURL=cori.data.api426.js.map
