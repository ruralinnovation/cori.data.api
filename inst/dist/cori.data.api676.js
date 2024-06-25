import { markdownLineEnding as o } from "./cori.data.api470.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const p = {
  name: "hardBreakEscape",
  tokenize: k
};
function k(e, n, a) {
  return t;
  function t(r) {
    return e.enter("hardBreakEscape"), e.consume(r), i;
  }
  function i(r) {
    return o(r) ? (e.exit("hardBreakEscape"), n(r)) : a(r);
  }
}
export {
  p as hardBreakEscape
};
//# sourceMappingURL=cori.data.api676.js.map
