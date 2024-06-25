import i from "./cori.data.api59.js";
import m from "./cori.data.api63.js";
import s from "./cori.data.api73.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function h(f, t) {
  const o = this || m, r = t || o, n = s.from(r.headers);
  let a = r.data;
  return i.forEach(f, function(e) {
    a = e.call(o, a, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), a;
}
export {
  h as default
};
//# sourceMappingURL=cori.data.api283.js.map
