import { visitParents as m } from "./cori.data.api267.js";
import { CONTINUE as y, EXIT as E, SKIP as N } from "./cori.data.api267.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function I(l, n, e, u) {
  let t, f, o;
  typeof n == "function" && typeof e != "function" ? (f = void 0, o = n, t = e) : (f = n, o = e, t = u), m(l, f, p, t);
  function p(c, d) {
    const i = d[d.length - 1], x = i ? i.children.indexOf(c) : void 0;
    return o(c, x, i);
  }
}
export {
  y as CONTINUE,
  E as EXIT,
  N as SKIP,
  I as visit
};
//# sourceMappingURL=cori.data.api53.js.map
