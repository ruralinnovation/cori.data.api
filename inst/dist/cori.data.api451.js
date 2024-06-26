import p from "./cori.data.api87.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(n) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function a(n, t) {
  this._pairs = [], n && p(n, this, t);
}
const c = a.prototype;
c.append = function(t, o) {
  this._pairs.push([t, o]);
};
c.toString = function(t) {
  const o = t ? function(r) {
    return t.call(this, r, i);
  } : i;
  return this._pairs.map(function(e) {
    return o(e[0]) + "=" + o(e[1]);
  }, "").join("&");
};
export {
  a as default
};
//# sourceMappingURL=cori.data.api451.js.map
