import f from "./cori.data.api206.js";
import d from "./cori.data.api391.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function s(e, c, i) {
  if (!c)
    return e;
  const a = i && i.encode || l, r = i && i.serialize;
  let n;
  if (r ? n = r(c, i) : n = f.isURLSearchParams(c) ? c.toString() : new d(c, i).toString(a), n) {
    const t = e.indexOf("#");
    t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}
export {
  s as default
};
//# sourceMappingURL=cori.data.api297.js.map
