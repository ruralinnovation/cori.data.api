import { factorySpace as o } from "./cori.data.api629.js";
import { markdownSpace as f, markdownLineEnding as u } from "./cori.data.api388.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const p = {
  tokenize: k,
  partial: !0
};
function k(t, i, e) {
  return a;
  function a(n) {
    return f(n) ? o(t, r, "linePrefix")(n) : r(n);
  }
  function r(n) {
    return n === null || u(n) ? i(n) : e(n);
  }
}
export {
  p as blankLine
};
//# sourceMappingURL=cori.data.api630.js.map
