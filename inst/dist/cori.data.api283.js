import a from "./cori.data.api292.js";
import { tableToIPC as f } from "./cori.data.api392.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function s(r, t = {}) {
  const { format: o, ...e } = t, m = o || "stream";
  if (!["stream", "file"].includes(m))
    throw Error("Unrecognised output format");
  return f(a(r, e), o);
}
export {
  a as default,
  s as toArrowIPC
};
//# sourceMappingURL=cori.data.api283.js.map
