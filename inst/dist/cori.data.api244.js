import { toArray as f } from "./cori.data.api245.js";
import { fetchAsDataURL as x } from "./cori.data.api311.js";
import { embedResources as g, shouldEmbed as y } from "./cori.data.api312.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const h = {};
async function m(t) {
  let e = h[t];
  if (e != null)
    return e;
  const s = await (await fetch(t)).text();
  return e = { url: t, cssText: s }, h[t] = e, e;
}
async function S(t, e) {
  let c = t.cssText;
  const s = /url\(["']?([^"')]+)["']?\)/g, o = (c.match(/url\([^)]+\)/g) || []).map(async (i) => {
    let n = i.replace(s, "$1");
    return n.startsWith("https://") || (n = new URL(n, t.url).href), x(n, e.fetchRequestInit, ({ result: l }) => (c = c.replace(i, `url(${l})`), [i, l]));
  });
  return Promise.all(o).then(() => c);
}
function p(t) {
  if (t == null)
    return [];
  const e = [], c = /(\/\*[\s\S]*?\*\/)/gi;
  let s = t.replace(c, "");
  const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = r.exec(s);
    if (l === null)
      break;
    e.push(l[0]);
  }
  s = s.replace(r, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, i = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", n = new RegExp(i, "gi");
  for (; ; ) {
    let l = o.exec(s);
    if (l === null) {
      if (l = n.exec(s), l === null)
        break;
      o.lastIndex = n.lastIndex;
    } else
      n.lastIndex = o.lastIndex;
    e.push(l[0]);
  }
  return e;
}
async function E(t, e) {
  const c = [], s = [];
  return t.forEach((r) => {
    if ("cssRules" in r)
      try {
        f(r.cssRules || []).forEach((o, i) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let n = i + 1;
            const l = o.href, R = m(l).then((a) => S(a, e)).then((a) => p(a).forEach((u) => {
              try {
                r.insertRule(u, u.startsWith("@import") ? n += 1 : r.cssRules.length);
              } catch (d) {
                console.error("Error inserting rule from remote css", {
                  rule: u,
                  error: d
                });
              }
            })).catch((a) => {
              console.error("Error loading remote css", a.toString());
            });
            s.push(R);
          }
        });
      } catch (o) {
        const i = t.find((n) => n.href == null) || document.styleSheets[0];
        r.href != null && s.push(m(r.href).then((n) => S(n, e)).then((n) => p(n).forEach((l) => {
          i.insertRule(l, r.cssRules.length);
        })).catch((n) => {
          console.error("Error loading remote stylesheet", n);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(s).then(() => (t.forEach((r) => {
    if ("cssRules" in r)
      try {
        f(r.cssRules || []).forEach((o) => {
          c.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${r.href}`, o);
      }
  }), c));
}
function w(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => y(e.style.getPropertyValue("src")));
}
async function C(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const c = f(t.ownerDocument.styleSheets), s = await E(c, e);
  return w(s);
}
async function b(t, e) {
  const c = await C(t, e);
  return (await Promise.all(c.map((r) => {
    const o = r.parentStyleSheet ? r.parentStyleSheet.href : null;
    return g(r.cssText, o, e);
  }))).join(`
`);
}
async function L(t, e) {
  const c = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await b(t, e);
  if (c) {
    const s = document.createElement("style"), r = document.createTextNode(c);
    s.appendChild(r), t.firstChild ? t.insertBefore(s, t.firstChild) : t.appendChild(s);
  }
}
export {
  L as embedWebFonts,
  b as getWebFontCSS
};
//# sourceMappingURL=cori.data.api244.js.map
