import B from "./cori.data.api77.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var S = 1, H = 2, _ = 3, p = 4, P = 1e-6;
function L(n) {
  return "translate(" + n + ",0)";
}
function N(n) {
  return "translate(0," + n + ")";
}
function R(n) {
  return (r) => +n(r);
}
function X(n, r) {
  return r = Math.max(0, n.bandwidth() - r * 2) / 2, n.round() && (r = Math.round(r)), (l) => +n(l) + r;
}
function Y() {
  return !this.__axis;
}
function E(n, r) {
  var l = [], f = null, h = null, c = 6, a = 6, z = 3, e = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, o = n === S || n === p ? -1 : 1, y = n === p || n === H ? "x" : "y", F = n === S || n === _ ? L : N;
  function i(t) {
    var I = f ?? (r.ticks ? r.ticks.apply(r, l) : r.domain()), O = h ?? (r.tickFormat ? r.tickFormat.apply(r, l) : B), C = Math.max(c, 0) + z, V = r.range(), x = +V[0] + e, A = +V[V.length - 1] + e, v = (r.bandwidth ? X : R)(r.copy(), e), g = t.selection ? t.selection() : t, m = g.selectAll(".domain").data([null]), u = g.selectAll(".tick").data(I, r).order(), b = u.exit(), M = u.enter().append("g").attr("class", "tick"), d = u.select("line"), k = u.select("text");
    m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), u = u.merge(M), d = d.merge(M.append("line").attr("stroke", "currentColor").attr(y + "2", o * c)), k = k.merge(M.append("text").attr("fill", "currentColor").attr(y, o * C).attr("dy", n === S ? "0em" : n === _ ? "0.71em" : "0.32em")), t !== g && (m = m.transition(t), u = u.transition(t), d = d.transition(t), k = k.transition(t), b = b.transition(t).attr("opacity", P).attr("transform", function(s) {
      return isFinite(s = v(s)) ? F(s + e) : this.getAttribute("transform");
    }), M.attr("opacity", P).attr("transform", function(s) {
      var w = this.parentNode.__axis;
      return F((w && isFinite(w = w(s)) ? w : v(s)) + e);
    })), b.remove(), m.attr("d", n === p || n === H ? a ? "M" + o * a + "," + x + "H" + e + "V" + A + "H" + o * a : "M" + e + "," + x + "V" + A : a ? "M" + x + "," + o * a + "V" + e + "H" + A + "V" + o * a : "M" + x + "," + e + "H" + A), u.attr("opacity", 1).attr("transform", function(s) {
      return F(v(s) + e);
    }), d.attr(y + "2", o * c), k.attr(y, o * C).text(O), g.filter(Y).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", n === H ? "start" : n === p ? "end" : "middle"), g.each(function() {
      this.__axis = v;
    });
  }
  return i.scale = function(t) {
    return arguments.length ? (r = t, i) : r;
  }, i.ticks = function() {
    return l = Array.from(arguments), i;
  }, i.tickArguments = function(t) {
    return arguments.length ? (l = t == null ? [] : Array.from(t), i) : l.slice();
  }, i.tickValues = function(t) {
    return arguments.length ? (f = t == null ? null : Array.from(t), i) : f && f.slice();
  }, i.tickFormat = function(t) {
    return arguments.length ? (h = t, i) : h;
  }, i.tickSize = function(t) {
    return arguments.length ? (c = a = +t, i) : c;
  }, i.tickSizeInner = function(t) {
    return arguments.length ? (c = +t, i) : c;
  }, i.tickSizeOuter = function(t) {
    return arguments.length ? (a = +t, i) : a;
  }, i.tickPadding = function(t) {
    return arguments.length ? (z = +t, i) : z;
  }, i.offset = function(t) {
    return arguments.length ? (e = +t, i) : e;
  }, i;
}
function q(n) {
  return E(_, n);
}
function D(n) {
  return E(p, n);
}
export {
  q as axisBottom,
  D as axisLeft
};
//# sourceMappingURL=cori.data.api21.js.map
