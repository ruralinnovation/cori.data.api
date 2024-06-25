import { factorySpace as l } from "./cori.data.api654.js";
import { blankLine as a } from "./cori.data.api655.js";
import { content as e } from "./cori.data.api656.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const d = {
  tokenize: m
};
function m(n) {
  const o = this, i = n.attempt(
    // Try to parse a blank line.
    a,
    u,
    // Try to parse initial flow (essentially, only code).
    n.attempt(
      this.parser.constructs.flowInitial,
      r,
      l(
        n,
        n.attempt(
          this.parser.constructs.flow,
          r,
          n.attempt(e, r)
        ),
        "linePrefix"
      )
    )
  );
  return i;
  function u(t) {
    if (t === null) {
      n.consume(t);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(t), n.exit("lineEndingBlank"), o.currentConstruct = void 0, i;
  }
  function r(t) {
    if (t === null) {
      n.consume(t);
      return;
    }
    return n.enter("lineEnding"), n.consume(t), n.exit("lineEnding"), o.currentConstruct = void 0, i;
  }
}
export {
  d as flow
};
//# sourceMappingURL=cori.data.api632.js.map
