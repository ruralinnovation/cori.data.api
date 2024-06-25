/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var r = 0, a = 0, l = 0, p = 1e3, s, f, u = 0, i = 0, w = 0, c = typeof performance == "object" && performance.now ? performance : Date, y = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function k() {
  return i || (y(d), i = c.now() + w);
}
function d() {
  i = 0;
}
function _() {
  this._call = this._time = this._next = null;
}
_.prototype = v.prototype = {
  constructor: _,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? k() : +e) + (n == null ? 0 : +n), !this._next && f !== this && (f ? f._next = this : s = this, f = this), this._call = t, this._time = e, m();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, m());
  }
};
function v(t, n, e) {
  var o = new _();
  return o.restart(t, n, e), o;
}
function x() {
  k(), ++r;
  for (var t = s, n; t; )
    (n = i - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --r;
}
function h() {
  i = (u = c.now()) + w, r = a = 0;
  try {
    x();
  } finally {
    r = 0, I(), i = 0;
  }
}
function T() {
  var t = c.now(), n = t - u;
  n > p && (w -= n, u = t);
}
function I() {
  for (var t, n = s, e, o = 1 / 0; n; )
    n._call ? (o > n._time && (o = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : s = e);
  f = t, m(o);
}
function m(t) {
  if (!r) {
    a && (a = clearTimeout(a));
    var n = t - i;
    n > 24 ? (t < 1 / 0 && (a = setTimeout(h, t - c.now() - w)), l && (l = clearInterval(l))) : (l || (u = c.now(), l = setInterval(T, p)), r = 1, y(h));
  }
}
export {
  _ as Timer,
  k as now,
  v as timer,
  x as timerFlush
};
//# sourceMappingURL=cori.data.api168.js.map
