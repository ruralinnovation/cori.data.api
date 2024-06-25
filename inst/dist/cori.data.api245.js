import { embedResources as c } from "./cori.data.api351.js";
import { isInstanceOfElement as n, toArray as y } from "./cori.data.api248.js";
import { isDataUrl as u, resourceToDataURL as l } from "./cori.data.api350.js";
import { getMimeType as w } from "./cori.data.api349.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
async function f(a, r, e) {
  var t;
  const i = (t = r.style) === null || t === void 0 ? void 0 : t.getPropertyValue(a);
  if (i) {
    const s = await c(i, null, e);
    return r.style.setProperty(a, s, r.style.getPropertyPriority(a)), !0;
  }
  return !1;
}
async function b(a, r) {
  await f("background", a, r) || await f("background-image", a, r), await f("mask", a, r) || await f("mask-image", a, r);
}
async function h(a, r) {
  const e = n(a, HTMLImageElement);
  if (!(e && !u(a.src)) && !(n(a, SVGImageElement) && !u(a.href.baseVal)))
    return;
  const t = e ? a.src : a.href.baseVal, i = await l(t, w(t), r);
  await new Promise((s, g) => {
    a.onload = s, a.onerror = g;
    const m = a;
    m.decode && (m.decode = s), m.loading === "lazy" && (m.loading = "eager"), e ? (a.srcset = "", a.src = i) : a.href.baseVal = i;
  });
}
async function P(a, r) {
  const t = y(a.childNodes).map((i) => I(i, r));
  await Promise.all(t).then(() => a);
}
async function I(a, r) {
  n(a, Element) && (await b(a, r), await h(a, r), await P(a, r));
}
export {
  I as embedImages
};
//# sourceMappingURL=cori.data.api245.js.map
