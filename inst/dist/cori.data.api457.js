import f from "./cori.data.api520.js";
import { inferKeys as i } from "./cori.data.api518.js";
import m from "./cori.data.api521.js";
import k from "./cori.data.api514.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function y(p, o, r, u) {
  return r = i(p, o, r), f(
    p,
    o,
    [m("lookup", p, r[0]), m("lookup", o, r[1])],
    k("lookup", o, u)
  );
}
export {
  y as default
};
//# sourceMappingURL=cori.data.api457.js.map
