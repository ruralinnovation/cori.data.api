import { toHast as e } from "./cori.data.api234.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(r, t) {
  return r && "run" in r ? async function(n, u) {
    const a = (
      /** @type {HastRoot} */
      e(n, { file: u, ...t })
    );
    await r.run(a, u);
  } : function(n, u) {
    return (
      /** @type {HastRoot} */
      e(n, { file: u, ...t || r })
    );
  };
}
export {
  f as default
};
//# sourceMappingURL=cori.data.api50.js.map
