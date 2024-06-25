import n from "./cori.data.api206.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const a = n.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), u = (s) => {
  const t = {};
  let e, r, i;
  return s && s.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), e = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!e || t[e] && a[e]) && (e === "set-cookie" ? t[e] ? t[e].push(r) : t[e] = [r] : t[e] = t[e] ? t[e] + ", " + r : r);
  }), t;
};
export {
  u as default
};
//# sourceMappingURL=cori.data.api305.js.map
