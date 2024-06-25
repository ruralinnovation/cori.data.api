/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function v(n, c, o, r) {
  function u(t) {
    return t instanceof o ? t : new o(function(i) {
      i(t);
    });
  }
  return new (o || (o = Promise))(function(t, i) {
    function a(s) {
      try {
        y(r.next(s));
      } catch (h) {
        i(h);
      }
    }
    function f(s) {
      try {
        y(r.throw(s));
      } catch (h) {
        i(h);
      }
    }
    function y(s) {
      s.done ? t(s.value) : u(s.value).then(a, f);
    }
    y((r = r.apply(n, c || [])).next());
  });
}
function d(n) {
  var c = typeof Symbol == "function" && Symbol.iterator, o = c && n[c], r = 0;
  if (o)
    return o.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
      }
    };
  throw new TypeError(c ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function m(n) {
  return this instanceof m ? (this.v = n, this) : new m(n);
}
function _(n, c, o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = o.apply(n, c || []), u, t = [];
  return u = {}, a("next"), a("throw"), a("return", i), u[Symbol.asyncIterator] = function() {
    return this;
  }, u;
  function i(e) {
    return function(l) {
      return Promise.resolve(l).then(e, h);
    };
  }
  function a(e, l) {
    r[e] && (u[e] = function(p) {
      return new Promise(function(b, S) {
        t.push([e, p, b, S]) > 1 || f(e, p);
      });
    }, l && (u[e] = l(u[e])));
  }
  function f(e, l) {
    try {
      y(r[e](l));
    } catch (p) {
      w(t[0][3], p);
    }
  }
  function y(e) {
    e.value instanceof m ? Promise.resolve(e.value.v).then(s, h) : w(t[0][2], e);
  }
  function s(e) {
    f("next", e);
  }
  function h(e) {
    f("throw", e);
  }
  function w(e, l) {
    e(l), t.shift(), t.length && f(t[0][0], t[0][1]);
  }
}
function x(n) {
  var c, o;
  return c = {}, r("next"), r("throw", function(u) {
    throw u;
  }), r("return"), c[Symbol.iterator] = function() {
    return this;
  }, c;
  function r(u, t) {
    c[u] = n[u] ? function(i) {
      return (o = !o) ? { value: m(n[u](i)), done: !1 } : t ? t(i) : i;
    } : t;
  }
}
function E(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var c = n[Symbol.asyncIterator], o;
  return c ? c.call(n) : (n = typeof d == "function" ? d(n) : n[Symbol.iterator](), o = {}, r("next"), r("throw"), r("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o);
  function r(t) {
    o[t] = n[t] && function(i) {
      return new Promise(function(a, f) {
        i = n[t](i), u(a, f, i.done, i.value);
      });
    };
  }
  function u(t, i, a, f) {
    Promise.resolve(f).then(function(y) {
      t({ value: y, done: a });
    }, i);
  }
}
export {
  x as __asyncDelegator,
  _ as __asyncGenerator,
  E as __asyncValues,
  m as __await,
  v as __awaiter,
  d as __values
};
//# sourceMappingURL=cori.data.api491.js.map
