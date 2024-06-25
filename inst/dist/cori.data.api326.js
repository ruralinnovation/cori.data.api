/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const n = "application/font-woff", o = "image/jpeg", i = {
  woff: n,
  woff2: n,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: o,
  jpeg: o,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function f(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function g(e) {
  const t = f(e).toLowerCase();
  return i[t] || "";
}
export {
  g as getMimeType
};
//# sourceMappingURL=cori.data.api326.js.map
