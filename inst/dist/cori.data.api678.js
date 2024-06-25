import { markdownLineEnding as g, markdownSpace as p } from "./cori.data.api469.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function w(r, h, E, x, i, m) {
  const S = this;
  let t = 0, l;
  return b;
  function b(n) {
    return r.enter(x), r.enter(i), r.consume(n), r.exit(i), r.enter(m), a;
  }
  function a(n) {
    return t > 999 || n === null || n === 91 || n === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    n === 94 && !t && "_hiddenFootnoteSupport" in S.parser.constructs ? E(n) : n === 93 ? (r.exit(m), r.enter(i), r.consume(n), r.exit(i), r.exit(x), h) : g(n) ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), a) : (r.enter("chunkString", {
      contentType: "string"
    }), u(n));
  }
  function u(n) {
    return n === null || n === 91 || n === 93 || g(n) || t++ > 999 ? (r.exit("chunkString"), a(n)) : (r.consume(n), l || (l = !p(n)), n === 92 ? o : u);
  }
  function o(n) {
    return n === 91 || n === 92 || n === 93 ? (r.consume(n), t++, u) : u(n);
  }
}
export {
  w as factoryLabel
};
//# sourceMappingURL=cori.data.api678.js.map
