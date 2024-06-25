import { factorySpace as o } from "./cori.data.api629.js";
import { markdownSpace as B, markdownLineEnding as c } from "./cori.data.api388.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const q = {
  name: "thematicBreak",
  tokenize: p
};
function p(t, u, m) {
  let a = 0, e;
  return k;
  function k(r) {
    return t.enter("thematicBreak"), h(r);
  }
  function h(r) {
    return e = r, n(r);
  }
  function n(r) {
    return r === e ? (t.enter("thematicBreakSequence"), i(r)) : a >= 3 && (r === null || c(r)) ? (t.exit("thematicBreak"), u(r)) : m(r);
  }
  function i(r) {
    return r === e ? (t.consume(r), a++, i) : (t.exit("thematicBreakSequence"), B(r) ? o(t, n, "whitespace")(r) : n(r));
  }
}
export {
  q as thematicBreak
};
//# sourceMappingURL=cori.data.api638.js.map
