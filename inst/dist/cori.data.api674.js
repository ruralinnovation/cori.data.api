import { factorySpace as l } from "./cori.data.api669.js";
import { markdownSpace as a } from "./cori.data.api489.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const k = {
  name: "blockQuote",
  tokenize: x,
  continuation: {
    tokenize: Q
  },
  exit: b
};
function x(t, e, r) {
  const i = this;
  return u;
  function u(n) {
    if (n === 62) {
      const c = i.containerState;
      return c.open || (t.enter("blockQuote", {
        _container: !0
      }), c.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(n), t.exit("blockQuoteMarker"), o;
    }
    return r(n);
  }
  function o(n) {
    return a(n) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(n), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), e) : (t.exit("blockQuotePrefix"), e(n));
  }
}
function Q(t, e, r) {
  const i = this;
  return u;
  function u(n) {
    return a(n) ? l(t, o, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n) : o(n);
  }
  function o(n) {
    return t.attempt(k, e, r)(n);
  }
}
function b(t) {
  t.exit("blockQuote");
}
export {
  k as blockQuote
};
//# sourceMappingURL=cori.data.api674.js.map
