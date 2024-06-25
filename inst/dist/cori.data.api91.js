import o from "./cori.data.api94.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(n, t, i) {
  var c = o(n), e = c.CustomEvent;
  typeof e == "function" ? e = new e(t, i) : (e = c.document.createEvent("Event"), i ? (e.initEvent(t, i.bubbles, i.cancelable), e.detail = i.detail) : e.initEvent(t, !1, !1)), n.dispatchEvent(e);
}
function f(n, t) {
  return function() {
    return u(this, n, t);
  };
}
function s(n, t) {
  return function() {
    return u(this, n, t.apply(this, arguments));
  };
}
function r(n, t) {
  return this.each((typeof t == "function" ? s : f)(n, t));
}
export {
  r as default
};
//# sourceMappingURL=cori.data.api91.js.map
