import { decodeNamedCharacterReference as o } from "./cori.data.api479.js";
import { decodeNumericCharacterReference as a } from "./cori.data.api476.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const n = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function m(r) {
  return r.replace(n, f);
}
function f(r, c, e) {
  if (c)
    return c;
  if (e.charCodeAt(0) === 35) {
    const t = e.charCodeAt(1), d = t === 120 || t === 88;
    return a(e.slice(d ? 2 : 1), d ? 16 : 10);
  }
  return o(e) || r;
}
export {
  m as decodeString
};
//# sourceMappingURL=cori.data.api477.js.map
