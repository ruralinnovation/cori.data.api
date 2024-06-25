import u from "./cori.data.api138.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function o(r, n) {
  return function(t) {
    this.setAttribute(r, n.call(this, t));
  };
}
function f(r, n) {
  return function(t) {
    this.setAttributeNS(r.space, r.local, n.call(this, t));
  };
}
function s(r, n) {
  var t, e;
  function a() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && f(r, i)), t;
  }
  return a._value = n, a;
}
function l(r, n) {
  var t, e;
  function a() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && o(r, i)), t;
  }
  return a._value = n, a;
}
function h(r, n) {
  var t = "attr." + r;
  if (arguments.length < 2)
    return (t = this.tween(t)) && t._value;
  if (n == null)
    return this.tween(t, null);
  if (typeof n != "function")
    throw new Error();
  var e = u(r);
  return this.tween(t, (e.local ? s : l)(e, n));
}
export {
  h as default
};
//# sourceMappingURL=cori.data.api185.js.map
