import { dataFromScan as i } from "./cori.data.api414.js";
import { profile as d } from "./cori.data.api415.js";
import e from "./cori.data.api416.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(p, o, a, t, r, f = !0) {
  if (r = e(r), !r) {
    const m = d(t, o);
    f = m.nulls > 0, r = m.type();
  }
  return i(a, t, o, r, f);
}
export {
  n as default
};
//# sourceMappingURL=cori.data.api332.js.map
