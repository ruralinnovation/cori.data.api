import { uuid as a, toArray as i } from "./cori.data.api248.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function m(e) {
  return i(e).map((t) => {
    const n = e.getPropertyValue(t), r = e.getPropertyPriority(t);
    return `${t}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function p(e, t, n) {
  const r = `.${e}:${t}`, o = n.cssText ? l(n) : m(n);
  return document.createTextNode(`${r}{${o}}`);
}
function u(e, t, n) {
  const r = window.getComputedStyle(e, n), o = r.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const c = a();
  try {
    t.className = `${t.className} ${c}`;
  } catch {
    return;
  }
  const s = document.createElement("style");
  s.appendChild(p(c, n, r)), t.appendChild(s);
}
function P(e, t) {
  u(e, t, ":before"), u(e, t, ":after");
}
export {
  P as clonePseudoElements
};
//# sourceMappingURL=cori.data.api348.js.map
