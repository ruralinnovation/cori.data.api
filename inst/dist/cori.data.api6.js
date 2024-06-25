import d from "./cori.data.api29.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var h;
h = {};
h.foreignobject = function(t, p, r) {
  var n, o, a, i;
  return n = t.text(), o = d(t.node().parentNode), t.remove(), a = o.append("foreignObject"), a.attr("requiredFeatures", "http://www.w3.org/TR/SVG11/feature#Extensibility").attr("width", p.width).attr("height", p.height), typeof r == "number" && a.attr("x", +t.attr("x") + r).attr("y", +t.attr("y") + r), i = a.append("xhtml:div"), i.style("height", p.height).style("width", p.width).html(n), i;
};
h.tspans = function(t, p, r) {
  var n, o, a, i, e, f;
  for (n = t.text().split(" ").reverse(), t.text(""), e = t.append("tspan"), e.attr("dx", 0).attr("dy", 0), i = 0; n.length > 0; )
    o = n.pop(), e.text(e.text() + " " + o), a = e.node().getComputedTextLength() || 0, a > p.width && (f = e.text().split(" ").slice(0, -1).join(" "), e.text(f), i = e.node().getComputedTextLength() * -1, e = t.append("tspan"), e.attr("dx", i).attr("dy", "1em").text(o));
  typeof r == "number" && t.attr("y", +t.attr("y") + r).attr("x", +t.attr("x") + r);
};
//# sourceMappingURL=cori.data.api6.js.map
