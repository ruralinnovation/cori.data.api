import { Path as e } from "./cori.data.api141.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function l(i) {
  let t = 3;
  return i.digits = function(n) {
    if (!arguments.length)
      return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return i;
  }, () => new e(t);
}
export {
  l as withPath
};
//# sourceMappingURL=cori.data.api205.js.map
