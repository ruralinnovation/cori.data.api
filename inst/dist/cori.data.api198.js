import { STARTING as u, ENDING as s, ENDED as c } from "./cori.data.api199.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(e, i) {
  var r = e.__transition, t, a, n = !0, l;
  if (r) {
    i = i == null ? null : i + "";
    for (l in r) {
      if ((t = r[l]).name !== i) {
        n = !1;
        continue;
      }
      a = t.state > u && t.state < s, t.state = c, t.timer.stop(), t.on.call(a ? "interrupt" : "cancel", e, e.__data__, t.index, t.group), delete r[l];
    }
    n && delete e.__transition;
  }
}
export {
  o as default
};
//# sourceMappingURL=cori.data.api198.js.map
