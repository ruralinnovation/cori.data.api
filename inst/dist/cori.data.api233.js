/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var h = {};
if (typeof document < "u") {
  var v = document.documentElement;
  "onmouseenter" in v || (h = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function d(t, e, n) {
  return t = c(t, e, n), function(r) {
    var s = r.relatedTarget;
    (!s || s !== this && !(s.compareDocumentPosition(this) & 8)) && t.call(this, r);
  };
}
function c(t, e, n) {
  return function(r) {
    try {
      t.call(this, this.__data__, e, n);
    } finally {
    }
  };
}
function p(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function _(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, s = e.length, o; n < s; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.capture) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function y(t, e, n) {
  var r = h.hasOwnProperty(t.type) ? d : c;
  return function(s, o, l) {
    var a = this.__on, i, u = r(e, o, l);
    if (a) {
      for (var f = 0, m = a.length; f < m; ++f)
        if ((i = a[f]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.capture), this.addEventListener(i.type, i.listener = u, i.capture = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, u, n), i = { type: t.type, name: t.name, value: e, listener: u, capture: n }, a ? a.push(i) : this.__on = [i];
  };
}
function g(t, e, n) {
  var r = p(t + ""), s, o = r.length, l;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var i = 0, u = a.length, f; i < u; ++i)
        for (s = 0, f = a[i]; s < o; ++s)
          if ((l = r[s]).type === f.type && l.name === f.name)
            return f.value;
    }
    return;
  }
  for (a = e ? y : _, n == null && (n = !1), s = 0; s < o; ++s)
    this.each(a(r[s], e, n));
  return this;
}
export {
  g as default
};
//# sourceMappingURL=cori.data.api233.js.map
