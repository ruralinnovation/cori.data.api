import { factorySpace as l } from "./cori.data.api655.js";
import { markdownLineEnding as m } from "./cori.data.api470.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const g = {
  tokenize: x
};
function x(n) {
  const i = n.attempt(
    this.parser.constructs.contentInitial,
    e,
    p
  );
  let r;
  return i;
  function e(t) {
    if (t === null) {
      n.consume(t);
      return;
    }
    return n.enter("lineEnding"), n.consume(t), n.exit("lineEnding"), l(n, i, "linePrefix");
  }
  function p(t) {
    return n.enter("paragraph"), u(t);
  }
  function u(t) {
    const a = n.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = a), r = a, o(t);
  }
  function o(t) {
    if (t === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(t);
      return;
    }
    return m(t) ? (n.consume(t), n.exit("chunkText"), u) : (n.consume(t), o);
  }
}
export {
  g as content
};
//# sourceMappingURL=cori.data.api631.js.map
