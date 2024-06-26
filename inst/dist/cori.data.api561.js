/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function t(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  switch (typeof r) {
    case "number":
      return `${r}`;
    case "bigint":
      return `${r}`;
    case "string":
      return `"${r}"`;
  }
  return typeof r[Symbol.toPrimitive] == "function" ? r[Symbol.toPrimitive]("string") : ArrayBuffer.isView(r) ? r instanceof BigInt64Array || r instanceof BigUint64Array ? `[${[...r].map((n) => t(n))}]` : `[${r}]` : ArrayBuffer.isView(r) ? `[${r}]` : JSON.stringify(r, (n, i) => typeof i == "bigint" ? `${i}` : i);
}
export {
  t as valueToString
};
//# sourceMappingURL=cori.data.api561.js.map
