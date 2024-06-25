/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(o) {
  return !!(o !== null && typeof o == "object" && "href" in o && o.href && "protocol" in o && o.protocol && // @ts-expect-error: indexing is fine.
  o.auth === void 0);
}
export {
  n as isUrl
};
//# sourceMappingURL=cori.data.api281.js.map
