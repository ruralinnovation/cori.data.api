/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(r, _) {
  const e = Number.parseInt(r, _);
  return (
    // C0 except for HT, LF, FF, CR, space.
    e < 9 || e === 11 || e > 13 && e < 32 || // Control character (DEL) of C0, and C1 controls.
    e > 126 && e < 160 || // Lone high surrogates and low surrogates.
    e > 55295 && e < 57344 || // Noncharacters.
    e > 64975 && e < 65008 || /* eslint-disable no-bitwise */
    (e & 65535) === 65535 || (e & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    e > 1114111 ? "�" : String.fromCodePoint(e)
  );
}
export {
  n as decodeNumericCharacterReference
};
//# sourceMappingURL=cori.data.api446.js.map
