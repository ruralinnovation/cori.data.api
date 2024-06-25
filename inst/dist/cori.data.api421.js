/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const u = {
  parse_date: (l) => l == null ? l : new Date(l),
  parse_float: (l) => l == null ? l : Number.parseFloat(l),
  parse_int: (l, n) => l == null ? l : Number.parseInt(l, n),
  endswith: (l, n, e) => l == null ? !1 : String(l).endsWith(n, e),
  match: (l, n, e) => {
    const a = l == null ? l : String(l).match(n);
    return e == null || a == null ? a : typeof e == "number" ? a[e] : a.groups ? a.groups[e] : null;
  },
  normalize: (l, n) => l == null ? l : String(l).normalize(n),
  padend: (l, n, e) => l == null ? l : String(l).padEnd(n, e),
  padstart: (l, n, e) => l == null ? l : String(l).padStart(n, e),
  upper: (l) => l == null ? l : String(l).toUpperCase(),
  lower: (l) => l == null ? l : String(l).toLowerCase(),
  repeat: (l, n) => l == null ? l : String(l).repeat(n),
  replace: (l, n, e) => l == null ? l : String(l).replace(n, String(e)),
  substring: (l, n, e) => l == null ? l : String(l).substring(n, e),
  split: (l, n, e) => l == null ? [] : String(l).split(n, e),
  startswith: (l, n, e) => l == null ? !1 : String(l).startsWith(n, e),
  trim: (l) => l == null ? l : String(l).trim()
};
export {
  u as default
};
//# sourceMappingURL=cori.data.api421.js.map
