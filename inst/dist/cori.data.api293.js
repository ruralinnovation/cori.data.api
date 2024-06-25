import { resolveUrl as l } from "./cori.data.api241.js";
import { getMimeType as i } from "./cori.data.api291.js";
import { isDataUrl as f, resourceToDataURL as m } from "./cori.data.api292.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const a = /url\((['"]?)([^'"]+?)\1\)/g, p = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, R = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function d(r) {
  const e = r.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function g(r) {
  const e = [];
  return r.replace(a, (t, n, o) => (e.push(o), t)), e.filter((t) => !f(t));
}
async function E(r, e, t, n, o) {
  try {
    const c = t ? l(e, t) : e, s = i(e);
    let u;
    return o || (u = await m(c, s, n)), r.replace(d(e), `$1${u}$3`);
  } catch {
  }
  return r;
}
function $(r, { preferredFontFormat: e }) {
  return e ? r.replace(R, (t) => {
    for (; ; ) {
      const [n, , o] = p.exec(t) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${n};`;
    }
  }) : r;
}
function h(r) {
  return r.search(a) !== -1;
}
async function v(r, e, t) {
  if (!h(r))
    return r;
  const n = $(r, t);
  return g(n).reduce((c, s) => c.then((u) => E(u, s, e, t)), Promise.resolve(n));
}
export {
  E as embed,
  v as embedResources,
  g as parseURLs,
  h as shouldEmbed
};
//# sourceMappingURL=cori.data.api293.js.map
