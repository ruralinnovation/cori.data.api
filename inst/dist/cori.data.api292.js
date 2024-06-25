/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function u(t) {
  return t.split(/,/)[1];
}
function w(t) {
  return t.search(/^(data:)/) !== -1;
}
function l(t, a) {
  return `data:${a};base64,${t}`;
}
async function h(t, a, r) {
  const e = await fetch(t, a);
  if (e.status === 404)
    throw new Error(`Resource "${e.url}" not found`);
  const o = await e.blob();
  return new Promise((n, c) => {
    const s = new FileReader();
    s.onerror = c, s.onloadend = () => {
      try {
        n(r({ res: e, result: s.result }));
      } catch (f) {
        c(f);
      }
    }, s.readAsDataURL(o);
  });
}
const i = {};
function d(t, a, r) {
  let e = t.replace(/\?.*/, "");
  return r && (e = t), /ttf|otf|eot|woff2?/i.test(e) && (e = e.replace(/.*\//, "")), a ? `[${a}]${e}` : e;
}
async function g(t, a, r) {
  const e = d(t, a, r.includeQueryParams);
  if (i[e] != null)
    return i[e];
  r.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const n = await h(t, r.fetchRequestInit, ({ res: c, result: s }) => (a || (a = c.headers.get("Content-Type") || ""), u(s)));
    o = l(n, a);
  } catch (n) {
    o = r.imagePlaceholder || "";
    let c = `Failed to fetch resource: ${t}`;
    n && (c = typeof n == "string" ? n : n.message), c && console.warn(c);
  }
  return i[e] = o, o;
}
export {
  h as fetchAsDataURL,
  w as isDataUrl,
  l as makeDataUrl,
  g as resourceToDataURL
};
//# sourceMappingURL=cori.data.api292.js.map
