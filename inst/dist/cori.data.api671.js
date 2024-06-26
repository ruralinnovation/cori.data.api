import { decodeNamedCharacterReference as k } from "./cori.data.api472.js";
import { asciiAlphanumeric as u, asciiHexDigit as M, asciiDigit as p } from "./cori.data.api481.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const N = {
  name: "characterReference",
  tokenize: z
};
function z(e, h, t) {
  const m = this;
  let i = 0, n, a;
  return R;
  function R(r) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(r), e.exit("characterReferenceMarker"), l;
  }
  function l(r) {
    return r === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(r), e.exit("characterReferenceMarkerNumeric"), o) : (e.enter("characterReferenceValue"), n = 31, a = u, c(r));
  }
  function o(r) {
    return r === 88 || r === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(r), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), n = 6, a = M, c) : (e.enter("characterReferenceValue"), n = 7, a = p, c(r));
  }
  function c(r) {
    if (r === 59 && i) {
      const x = e.exit("characterReferenceValue");
      return a === u && !k(m.sliceSerialize(x)) ? t(r) : (e.enter("characterReferenceMarker"), e.consume(r), e.exit("characterReferenceMarker"), e.exit("characterReference"), h);
    }
    return a(r) && i++ < n ? (e.consume(r), c) : t(r);
  }
}
export {
  N as characterReference
};
//# sourceMappingURL=cori.data.api671.js.map
