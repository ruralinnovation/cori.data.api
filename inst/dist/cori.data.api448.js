import o from "./cori.data.api536.js";
import u from "./cori.data.api524.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(l, m, r) {
  return o(
    l,
    u("unroll", l, m),
    r && r.drop ? { ...r, drop: u("unroll", l, r.drop).names } : r
  );
}
export {
  n as default
};
//# sourceMappingURL=cori.data.api448.js.map
