import { combineExtensions as i } from "./cori.data.api633.js";
import { content as m } from "./cori.data.api634.js";
import { document as f } from "./cori.data.api635.js";
import { flow as u } from "./cori.data.api636.js";
import { string as p, text as a } from "./cori.data.api637.js";
import { createTokenizer as x } from "./cori.data.api638.js";
import * as d from "./cori.data.api639.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function E(r) {
  const n = (
    /** @type {FullNormalizedExtension} */
    i([d, ...(r || {}).extensions || []])
  ), o = {
    defined: [],
    lazy: {},
    constructs: n,
    content: t(m),
    document: t(f),
    flow: t(u),
    string: t(p),
    text: t(a)
  };
  return o;
  function t(e) {
    return s;
    function s(c) {
      return x(o, e, c);
    }
  }
}
export {
  E as parse
};
//# sourceMappingURL=cori.data.api486.js.map
