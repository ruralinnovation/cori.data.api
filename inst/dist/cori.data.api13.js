import s from "./cori.data.api57.js";
import m from "./cori.data.api58.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var a, h, d, c, y, v, p, g;
a = typeof SVGForeignObjectElement > "u" ? "tspans" : "foreignobject";
h = function(e) {
  var t, r;
  return r = typeof e == "function", typeof e == "object" && !e.nodeType ? !e.height || !e.width ? (console.error("text wrapping bounds must specify height and width"), !1) : !0 : e instanceof m || e.nodeType || r || t ? !0 : (console.error("invalid bounds specified for text wrapping"), !1);
};
d = function(e) {
  var t, r, n, i;
  for (t = ["height", "width"], typeof e == "function" ? r = e() : e.nodeType ? r = e.getBoundingClientRect() : typeof e == "object" && (r = e), n = /* @__PURE__ */ Object.create(null), i = 0; i < t.length; i++)
    n[t[i]] = r[t[i]];
  return n;
};
c = function(e) {
  var t;
  if (typeof e == "function" ? t = e() : typeof e == "number" ? t = e : typeof e > "u" && (t = 0), typeof t != "number")
    console.error("padding could not be converted into a number");
  else
    return t;
};
y = function(e, t) {
  var r;
  return r = {
    height: e.height - t * 2,
    width: e.width - t * 2
  }, r;
};
v = function(e, t) {
  var r;
  return r = y(d(e), c(t)), r;
};
p = {};
p.foreignobject = function(e, t, r) {
  var n, i, f, u;
  return n = e.text(), i = s(e.node().parentNode), e.remove(), f = i.append("foreignObject"), f.attr("requiredFeatures", "http://www.w3.org/TR/SVG11/feature#Extensibility").attr("width", t.width).attr("height", t.height), typeof r == "number" && f.attr("x", +e.attr("x") + r).attr("y", +e.attr("y") + r), u = f.append("xhtml:div"), u.style("height", t.height).style("width", t.width).html(n), u;
};
p.tspans = function(e, t, r) {
  var n, i, f, u, o, l;
  for (n = e.text().split(" ").reverse(), e.text(""), o = e.append("tspan"), o.attr("dx", 0).attr("dy", 0), u = 0; n.length > 0; )
    i = n.pop(), o.text(o.text() + " " + i), f = o.node().getComputedTextLength() || 0, f > t.width && (l = o.text().split(" ").slice(0, -1).join(" "), o.text(l), u = o.node().getComputedTextLength() * -1, o = e.append("tspan"), o.attr("dx", u).attr("dy", "1em").text(i));
  typeof r == "number" && e.attr("y", +e.attr("y") + r).attr("x", +e.attr("x") + r);
};
g = function() {
  var e, t, r;
  return e = function(n) {
    n.each(function() {
      s(this).call(p[a], v(t, r), c(r));
    });
  }, e.bounds = function(n) {
    return n ? h(n) ? (t = n, e) : (console.error("invalid text wrapping bounds"), !1) : t;
  }, e.padding = function(n) {
    return n ? typeof n == "number" || typeof n == "function" ? (r = n, e) : (console.error("text wrap padding value must be either a number or a function"), !1) : r;
  }, e.method = function(n) {
    return n ? (a = n, e) : a;
  }, e;
};
const b = g;
export {
  b as default
};
//# sourceMappingURL=cori.data.api13.js.map
