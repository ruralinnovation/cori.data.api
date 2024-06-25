import { markdownLineEndingOrSpace as i, unicodeWhitespace as r, unicodePunctuation as t } from "./cori.data.api388.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(n) {
  if (n === null || i(n) || r(n))
    return 1;
  if (t(n))
    return 2;
}
export {
  a as classifyCharacter
};
//# sourceMappingURL=cori.data.api676.js.map
