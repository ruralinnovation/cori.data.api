/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const r = document.createElement("i");
function c(t) {
  const n = "&" + t + ";";
  r.innerHTML = n;
  const e = r.textContent;
  return e.charCodeAt(e.length - 1) === 59 && t !== "semi" || e === n ? !1 : e;
}
export {
  c as decodeNamedCharacterReference
};
//# sourceMappingURL=cori.data.api458.js.map
