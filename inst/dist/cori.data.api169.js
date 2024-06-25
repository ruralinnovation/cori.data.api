import { Timer as i } from "./cori.data.api168.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(o, t, n) {
  var r = new i();
  return t = t == null ? 0 : +t, r.restart((u) => {
    r.stop(), o(u + t);
  }, t, n), r;
}
export {
  e as default
};
//# sourceMappingURL=cori.data.api169.js.map
