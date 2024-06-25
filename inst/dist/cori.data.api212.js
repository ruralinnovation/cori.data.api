import f from "./cori.data.api289.js";
import { inferKeys as i } from "./cori.data.api287.js";
import m from "./cori.data.api290.js";
import k from "./cori.data.api283.js";
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
//# sourceMappingURL=cori.data.api212.js.map
