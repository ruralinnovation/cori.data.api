import { __exports as R } from "./cori.data.api541.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function W() {
  return H ? R : (H = 1, function(i) {
    function P(n, e) {
      var t = n.length;
      n.push(e);
      n:
        for (; 0 < t; ) {
          var l = t - 1 >>> 1, r = n[l];
          if (0 < g(r, e))
            n[l] = e, n[t] = r, t = l;
          else
            break n;
        }
    }
    function o(n) {
      return n.length === 0 ? null : n[0];
    }
    function m(n) {
      if (n.length === 0)
        return null;
      var e = n[0], t = n.pop();
      if (t !== e) {
        n[0] = t;
        n:
          for (var l = 0, r = n.length, w = r >>> 1; l < w; ) {
            var v = 2 * (l + 1) - 1, F = n[v], d = v + 1, I = n[d];
            if (0 > g(F, t))
              d < r && 0 > g(I, F) ? (n[l] = I, n[d] = t, l = d) : (n[l] = F, n[v] = t, l = v);
            else if (d < r && 0 > g(I, t))
              n[l] = I, n[d] = t, l = d;
            else
              break n;
          }
      }
      return e;
    }
    function g(n, e) {
      var t = n.sortIndex - e.sortIndex;
      return t !== 0 ? t : n.id - e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var J = performance;
      i.unstable_now = function() {
        return J.now();
      };
    } else {
      var N = Date, K = N.now();
      i.unstable_now = function() {
        return N.now() - K;
      };
    }
    var f = [], c = [], O = 1, a = null, u = 3, h = !1, s = !1, _ = !1, S = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function T(n) {
      for (var e = o(c); e !== null; ) {
        if (e.callback === null)
          m(c);
        else if (e.startTime <= n)
          m(c), e.sortIndex = e.expirationTime, P(f, e);
        else
          break;
        e = o(c);
      }
    }
    function E(n) {
      if (_ = !1, T(n), !s)
        if (o(f) !== null)
          s = !0, M(C);
        else {
          var e = o(c);
          e !== null && q(E, e.startTime - n);
        }
    }
    function C(n, e) {
      s = !1, _ && (_ = !1, j(b), b = -1), h = !0;
      var t = u;
      try {
        for (T(e), a = o(f); a !== null && (!(a.expirationTime > e) || n && !A()); ) {
          var l = a.callback;
          if (typeof l == "function") {
            a.callback = null, u = a.priorityLevel;
            var r = l(a.expirationTime <= e);
            e = i.unstable_now(), typeof r == "function" ? a.callback = r : a === o(f) && m(f), T(e);
          } else
            m(f);
          a = o(f);
        }
        if (a !== null)
          var w = !0;
        else {
          var v = o(c);
          v !== null && q(E, v.startTime - e), w = !1;
        }
        return w;
      } finally {
        a = null, u = t, h = !1;
      }
    }
    var k = !1, p = null, b = -1, D = 5, z = -1;
    function A() {
      return !(i.unstable_now() - z < D);
    }
    function L() {
      if (p !== null) {
        var n = i.unstable_now();
        z = n;
        var e = !0;
        try {
          e = p(!0, n);
        } finally {
          e ? y() : (k = !1, p = null);
        }
      } else
        k = !1;
    }
    var y;
    if (typeof B == "function")
      y = function() {
        B(L);
      };
    else if (typeof MessageChannel < "u") {
      var G = new MessageChannel(), Q = G.port2;
      G.port1.onmessage = L, y = function() {
        Q.postMessage(null);
      };
    } else
      y = function() {
        S(L, 0);
      };
    function M(n) {
      p = n, k || (k = !0, y());
    }
    function q(n, e) {
      b = S(function() {
        n(i.unstable_now());
      }, e);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(n) {
      n.callback = null;
    }, i.unstable_continueExecution = function() {
      s || h || (s = !0, M(C));
    }, i.unstable_forceFrameRate = function(n) {
      0 > n || 125 < n ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < n ? Math.floor(1e3 / n) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return u;
    }, i.unstable_getFirstCallbackNode = function() {
      return o(f);
    }, i.unstable_next = function(n) {
      switch (u) {
        case 1:
        case 2:
        case 3:
          var e = 3;
          break;
        default:
          e = u;
      }
      var t = u;
      u = e;
      try {
        return n();
      } finally {
        u = t;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(n, e) {
      switch (n) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          n = 3;
      }
      var t = u;
      u = n;
      try {
        return e();
      } finally {
        u = t;
      }
    }, i.unstable_scheduleCallback = function(n, e, t) {
      var l = i.unstable_now();
      switch (typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l + t : l) : t = l, n) {
        case 1:
          var r = -1;
          break;
        case 2:
          r = 250;
          break;
        case 5:
          r = 1073741823;
          break;
        case 4:
          r = 1e4;
          break;
        default:
          r = 5e3;
      }
      return r = t + r, n = { id: O++, callback: e, priorityLevel: n, startTime: t, expirationTime: r, sortIndex: -1 }, t > l ? (n.sortIndex = t, P(c, n), o(f) === null && n === o(c) && (_ ? (j(b), b = -1) : _ = !0, q(E, t - l))) : (n.sortIndex = r, P(f, n), s || h || (s = !0, M(C))), n;
    }, i.unstable_shouldYield = A, i.unstable_wrapCallback = function(n) {
      var e = u;
      return function() {
        var t = u;
        u = e;
        try {
          return n.apply(this, arguments);
        } finally {
          u = t;
        }
      };
    };
  }(R), R);
}
export {
  W as __require
};
//# sourceMappingURL=cori.data.api464.js.map
