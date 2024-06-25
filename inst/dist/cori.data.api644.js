import { factorySpace as t } from "./cori.data.api629.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const g = {
  name: "lineEnding",
  tokenize: o
};
function o(n, i) {
  return e;
  function e(r) {
    return n.enter("lineEnding"), n.consume(r), n.exit("lineEnding"), t(n, i, "linePrefix");
  }
}
export {
  g as lineEnding
};
//# sourceMappingURL=cori.data.api644.js.map
