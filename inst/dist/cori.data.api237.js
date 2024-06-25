import { clonePseudoElements as y } from "./cori.data.api290.js";
import { isInstanceOfElement as o, toArray as a, createImage as f } from "./cori.data.api241.js";
import { getMimeType as g } from "./cori.data.api291.js";
import { resourceToDataURL as p } from "./cori.data.api292.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
async function d(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : f(e);
}
async function S(t, e) {
  if (t.currentSrc) {
    const n = document.createElement("canvas"), c = n.getContext("2d");
    n.width = t.clientWidth, n.height = t.clientHeight, c == null || c.drawImage(t, 0, 0, n.width, n.height);
    const i = n.toDataURL();
    return f(i);
  }
  const l = t.poster, r = g(l), s = await p(l, r, e);
  return f(s);
}
async function E(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await m(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function b(t, e) {
  return o(t, HTMLCanvasElement) ? d(t) : o(t, HTMLVideoElement) ? S(t, e) : o(t, HTMLIFrameElement) ? E(t) : t.cloneNode(!1);
}
const T = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function L(t, e, l) {
  var r, s;
  let n = [];
  return T(t) && t.assignedNodes ? n = a(t.assignedNodes()) : o(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? n = a(t.contentDocument.body.childNodes) : n = a(((s = t.shadowRoot) !== null && s !== void 0 ? s : t).childNodes), n.length === 0 || o(t, HTMLVideoElement) || await n.reduce((c, i) => c.then(() => m(i, l)).then((u) => {
    u && e.appendChild(u);
  }), Promise.resolve()), e;
}
function w(t, e) {
  const l = e.style;
  if (!l)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (l.cssText = r.cssText, l.transformOrigin = r.transformOrigin) : a(r).forEach((s) => {
    let n = r.getPropertyValue(s);
    s === "font-size" && n.endsWith("px") && (n = `${Math.floor(parseFloat(n.substring(0, n.length - 2))) - 0.1}px`), o(t, HTMLIFrameElement) && s === "display" && n === "inline" && (n = "block"), s === "d" && e.getAttribute("d") && (n = `path(${e.getAttribute("d")})`), l.setProperty(s, n, r.getPropertyPriority(s));
  });
}
function x(t, e) {
  o(t, HTMLTextAreaElement) && (e.innerHTML = t.value), o(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function A(t, e) {
  if (o(t, HTMLSelectElement)) {
    const l = e, r = Array.from(l.children).find((s) => t.value === s.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function M(t, e) {
  return o(e, Element) && (w(t, e), y(t, e), x(t, e), A(t, e)), e;
}
async function H(t, e) {
  const l = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (l.length === 0)
    return t;
  const r = {};
  for (let n = 0; n < l.length; n++) {
    const i = l[n].getAttribute("xlink:href");
    if (i) {
      const u = t.querySelector(i), h = document.querySelector(i);
      !u && h && !r[i] && (r[i] = await m(h, e, !0));
    }
  }
  const s = Object.values(r);
  if (s.length) {
    const n = "http://www.w3.org/1999/xhtml", c = document.createElementNS(n, "svg");
    c.setAttribute("xmlns", n), c.style.position = "absolute", c.style.width = "0", c.style.height = "0", c.style.overflow = "hidden", c.style.display = "none";
    const i = document.createElementNS(n, "defs");
    c.appendChild(i);
    for (let u = 0; u < s.length; u++)
      i.appendChild(s[u]);
    t.appendChild(c);
  }
  return t;
}
async function m(t, e, l) {
  return !l && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => b(r, e)).then((r) => L(t, r, e)).then((r) => M(t, r)).then((r) => H(r, e));
}
export {
  m as cloneNode
};
//# sourceMappingURL=cori.data.api237.js.map
