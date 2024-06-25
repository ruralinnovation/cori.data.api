/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function g(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const i = document.implementation.createHTMLDocument(), r = i.createElement("base"), o = i.createElement("a");
  return i.head.appendChild(r), i.body.appendChild(o), e && (r.href = e), o.href = t, o.href;
}
const f = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function m(t) {
  const e = [];
  for (let i = 0, r = t.length; i < r; i++)
    e.push(t[i]);
  return e;
}
function c(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function d(t) {
  const e = c(t, "border-left-width"), i = c(t, "border-right-width");
  return t.clientWidth + e + i;
}
function u(t) {
  const e = c(t, "border-top-width"), i = c(t, "border-bottom-width");
  return t.clientHeight + e + i;
}
function w(t, e = {}) {
  const i = e.width || d(t), r = e.height || u(t);
  return { width: i, height: r };
}
function a() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const i = e && e.env ? e.env.devicePixelRatio : null;
  return i && (t = parseInt(i, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const n = 16384;
function p(t) {
  (t.width > n || t.height > n) && (t.width > n && t.height > n ? t.width > t.height ? (t.height *= n / t.width, t.width = n) : (t.width *= n / t.height, t.height = n) : t.width > n ? (t.height *= n / t.width, t.width = n) : (t.width *= n / t.height, t.height = n));
}
function b(t) {
  return new Promise((e, i) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = i, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function s(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function x(t, e, i) {
  const r = "http://www.w3.org/2000/svg", o = document.createElementNS(r, "svg"), h = document.createElementNS(r, "foreignObject");
  return o.setAttribute("width", `${e}`), o.setAttribute("height", `${i}`), o.setAttribute("viewBox", `0 0 ${e} ${i}`), h.setAttribute("width", "100%"), h.setAttribute("height", "100%"), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("externalResourcesRequired", "true"), o.appendChild(h), h.appendChild(t), s(o);
}
const l = (t, e) => {
  if (t instanceof e)
    return !0;
  const i = Object.getPrototypeOf(t);
  return i === null ? !1 : i.constructor.name === e.name || l(i, e);
};
export {
  p as checkCanvasDimensions,
  b as createImage,
  w as getImageSize,
  a as getPixelRatio,
  l as isInstanceOfElement,
  x as nodeToDataURL,
  g as resolveUrl,
  s as svgToDataURL,
  m as toArray,
  f as uuid
};
//# sourceMappingURL=cori.data.api245.js.map
