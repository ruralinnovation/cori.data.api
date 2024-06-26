import { factorySpace as u } from "./cori.data.api669.js";
import { markdownLineEnding as a, markdownSpace as o } from "./cori.data.api489.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function f(r, e) {
  let t;
  return i;
  function i(n) {
    return a(n) ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), t = !0, i) : o(n) ? u(
      r,
      i,
      t ? "linePrefix" : "lineSuffix"
    )(n) : e(n);
  }
}
export {
  f as factoryWhitespace
};
//# sourceMappingURL=cori.data.api705.js.map
