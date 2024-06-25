import { combineExtensions as i } from "./cori.data.api619.js";
import { content as m } from "./cori.data.api620.js";
import { document as f } from "./cori.data.api621.js";
import { flow as u } from "./cori.data.api622.js";
import { string as p, text as a } from "./cori.data.api623.js";
import { createTokenizer as x } from "./cori.data.api624.js";
import * as d from "./cori.data.api625.js";
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
//# sourceMappingURL=cori.data.api451.js.map
