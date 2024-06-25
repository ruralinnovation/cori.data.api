import { RecordBatchStreamWriter as e, RecordBatchFileWriter as o } from "./cori.data.api495.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function i(r, t = "stream") {
  return (t === "stream" ? e : o).writeAll(r).toUint8Array(!0);
}
export {
  i as tableToIPC
};
//# sourceMappingURL=cori.data.api383.js.map
