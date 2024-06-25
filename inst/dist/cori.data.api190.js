import { Transition as l, newId as _ } from "./cori.data.api172.js";
import u, { get as v } from "./cori.data.api194.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function w() {
  for (var s = this._name, o = this._id, d = _(), e = this._groups, m = e.length, n = 0; n < m; ++n)
    for (var r = e[n], f = r.length, i, a = 0; a < f; ++a)
      if (i = r[a]) {
        var t = v(i, o);
        u(i, s, d, a, r, {
          time: t.time + t.delay + t.duration,
          delay: 0,
          duration: t.duration,
          ease: t.ease
        });
      }
  return new l(e, this._parents, s, d);
}
export {
  w as default
};
//# sourceMappingURL=cori.data.api190.js.map
