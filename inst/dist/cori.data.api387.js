import { asciiAlphanumeric as f } from "./cori.data.api486.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function h(t) {
  const s = [];
  let r = -1, n = 0, i = 0;
  for (; ++r < t.length; ) {
    const e = t.charCodeAt(r);
    let o = "";
    if (e === 37 && f(t.charCodeAt(r + 1)) && f(t.charCodeAt(r + 2)))
      i = 2;
    else if (e < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(e)) || (o = String.fromCharCode(e));
    else if (e > 55295 && e < 57344) {
      const c = t.charCodeAt(r + 1);
      e < 56320 && c > 56319 && c < 57344 ? (o = String.fromCharCode(e, c), i = 1) : o = "�";
    } else
      o = String.fromCharCode(e);
    o && (s.push(t.slice(n, r), encodeURIComponent(o)), n = r + i + 1, o = ""), i && (r += i, i = 0);
  }
  return s.join("") + t.slice(n);
}
export {
  h as normalizeUri
};
//# sourceMappingURL=cori.data.api387.js.map
