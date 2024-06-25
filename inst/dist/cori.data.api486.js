/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const c = i(/[A-Za-z]/), r = i(/[\dA-Za-z]/), a = i(/[#-'*+\--9=?A-Z^-~]/);
function s(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const o = i(/\d/), e = i(/[\dA-Fa-f]/), l = i(/[!-/:-@[-`{-~]/);
function f(n) {
  return n !== null && n < -2;
}
function p(n) {
  return n !== null && (n < 0 || n === 32);
}
function A(n) {
  return n === -2 || n === -1 || n === 32;
}
const g = i(new RegExp("\\p{P}|\\p{S}", "u")), h = i(/\s/);
function i(n) {
  return u;
  function u(t) {
    return t !== null && t > -1 && n.test(String.fromCharCode(t));
  }
}
export {
  c as asciiAlpha,
  r as asciiAlphanumeric,
  a as asciiAtext,
  s as asciiControl,
  o as asciiDigit,
  e as asciiHexDigit,
  l as asciiPunctuation,
  f as markdownLineEnding,
  p as markdownLineEndingOrSpace,
  A as markdownSpace,
  g as unicodePunctuation,
  h as unicodeWhitespace
};
//# sourceMappingURL=cori.data.api486.js.map
