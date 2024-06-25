import { Selection as B } from "./cori.data.api50.js";
import { EnterNode as a } from "./cori.data.api195.js";
import E from "./cori.data.api254.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var K = "$";
function I(_, o, y, h, t, i) {
  for (var r = 0, n, f = o.length, e = i.length; r < e; ++r)
    (n = o[r]) ? (n.__data__ = i[r], h[r] = n) : y[r] = new a(_, i[r]);
  for (; r < f; ++r)
    (n = o[r]) && (t[r] = n);
}
function L(_, o, y, h, t, i, r) {
  var n, f, e = {}, s = o.length, w = i.length, A = new Array(s), l;
  for (n = 0; n < s; ++n)
    (f = o[n]) && (A[n] = l = K + r.call(f, f.__data__, n, o), l in e ? t[n] = f : e[l] = f);
  for (n = 0; n < w; ++n)
    l = K + r.call(_, i[n], n, i), (f = e[l]) ? (h[n] = f, f.__data__ = i[n], e[l] = null) : y[n] = new a(_, i[n]);
  for (n = 0; n < s; ++n)
    (f = o[n]) && e[A[n]] === f && (t[n] = f);
}
function $(_, o) {
  if (!_)
    return l = new Array(this.size()), e = -1, this.each(function(z) {
      l[++e] = z;
    }), l;
  var y = o ? L : I, h = this._parents, t = this._groups;
  typeof _ != "function" && (_ = E(_));
  for (var i = t.length, r = new Array(i), n = new Array(i), f = new Array(i), e = 0; e < i; ++e) {
    var s = h[e], w = t[e], A = w.length, l = _.call(s, s && s.__data__, e, h), g = l.length, m = n[e] = new Array(g), V = r[e] = new Array(g), k = f[e] = new Array(A);
    y(s, w, m, V, k, l, o);
    for (var c = 0, b = 0, v, x; c < g; ++c)
      if (v = m[c]) {
        for (c >= b && (b = c + 1); !(x = V[b]) && ++b < g; )
          ;
        v._next = x || null;
      }
  }
  return r = new B(r, h), r._enter = n, r._exit = f, r;
}
export {
  $ as default
};
//# sourceMappingURL=cori.data.api194.js.map
