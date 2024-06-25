import { asciiPunctuation as i } from "./cori.data.api480.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const o = {
  name: "characterEscape",
  tokenize: u
};
function u(r, e, n) {
  return t;
  function t(a) {
    return r.enter("characterEscape"), r.enter("escapeMarker"), r.consume(a), r.exit("escapeMarker"), c;
  }
  function c(a) {
    return i(a) ? (r.enter("characterEscapeValue"), r.consume(a), r.exit("characterEscapeValue"), r.exit("characterEscape"), e) : n(a);
  }
}
export {
  o as characterEscape
};
//# sourceMappingURL=cori.data.api672.js.map
