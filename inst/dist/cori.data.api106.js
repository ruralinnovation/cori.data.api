/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var a = { value: () => {
} };
function l() {
  for (var n = 0, t = arguments.length, r = {}, e; n < t; ++n) {
    if (!(e = arguments[n] + "") || e in r || /[\s.]/.test(e))
      throw new Error("illegal type: " + e);
    r[e] = [];
  }
  return new f(r);
}
function f(n) {
  this._ = n;
}
function h(n, t) {
  return n.trim().split(/^|\s+/).map(function(r) {
    var e = "", o = r.indexOf(".");
    if (o >= 0 && (e = r.slice(o + 1), r = r.slice(0, o)), r && !t.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: e };
  });
}
f.prototype = l.prototype = {
  constructor: f,
  on: function(n, t) {
    var r = this._, e = h(n + "", r), o, u = -1, i = e.length;
    if (arguments.length < 2) {
      for (; ++u < i; )
        if ((o = (n = e[u]).type) && (o = w(r[o], n.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++u < i; )
      if (o = (n = e[u]).type)
        r[o] = s(r[o], n.name, t);
      else if (t == null)
        for (o in r)
          r[o] = s(r[o], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, t = this._;
    for (var r in t)
      n[r] = t[r].slice();
    return new f(n);
  },
  call: function(n, t) {
    if ((o = arguments.length - 2) > 0)
      for (var r = new Array(o), e = 0, o, u; e < o; ++e)
        r[e] = arguments[e + 2];
    if (!this._.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    for (u = this._[n], e = 0, o = u.length; e < o; ++e)
      u[e].value.apply(t, r);
  },
  apply: function(n, t, r) {
    if (!this._.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    for (var e = this._[n], o = 0, u = e.length; o < u; ++o)
      e[o].value.apply(t, r);
  }
};
function w(n, t) {
  for (var r = 0, e = n.length, o; r < e; ++r)
    if ((o = n[r]).name === t)
      return o.value;
}
function s(n, t, r) {
  for (var e = 0, o = n.length; e < o; ++e)
    if (n[e].name === t) {
      n[e] = a, n = n.slice(0, e).concat(n.slice(e + 1));
      break;
    }
  return r != null && n.push({ name: t, value: r }), n;
}
export {
  l as default
};
//# sourceMappingURL=cori.data.api106.js.map
