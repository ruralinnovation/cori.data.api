import { cloneNode as d } from "./cori.data.api118.js";
import { embedImages as l } from "./cori.data.api119.js";
import { applyStyle as w } from "./cori.data.api120.js";
import { embedWebFonts as u } from "./cori.data.api121.js";
import { getImageSize as m, createImage as f, getPixelRatio as v, checkCanvasDimensions as y, nodeToDataURL as b } from "./cori.data.api122.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
async function x(e, t = {}) {
  const { width: i, height: n } = m(e, t), c = await d(e, t, !0);
  return await u(c, t), await l(c, t), w(c, t), await b(c, i, n);
}
async function C(e, t = {}) {
  const { width: i, height: n } = m(e, t), c = await x(e, t), o = await f(c), a = document.createElement("canvas"), r = a.getContext("2d"), h = t.pixelRatio || v(), s = t.canvasWidth || i, g = t.canvasHeight || n;
  return a.width = s * h, a.height = g * h, t.skipAutoScale || y(a), a.style.width = `${s}`, a.style.height = `${g}`, t.backgroundColor && (r.fillStyle = t.backgroundColor, r.fillRect(0, 0, a.width, a.height)), r.drawImage(o, 0, 0, a.width, a.height), a;
}
async function W(e, t = {}) {
  return (await C(e, t)).toDataURL();
}
export {
  C as toCanvas,
  W as toPng,
  x as toSvg
};
//# sourceMappingURL=cori.data.api40.js.map
