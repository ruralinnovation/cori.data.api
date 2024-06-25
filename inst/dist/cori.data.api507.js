/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const o = (t) => typeof t == "boolean", e = (t) => typeof t == "function", r = (t) => t != null && Object(t) === t, i = (t) => r(t) && e(t.then), s = (t) => r(t) && e(t[Symbol.iterator]), a = (t) => r(t) && e(t[Symbol.asyncIterator]), c = (t) => r(t) && "done" in t && "value" in t, n = (t) => "_getDOMStream" in t && "_getNodeStream" in t, l = (t) => r(t) && e(t.abort) && e(t.getWriter) && !n(t), u = (t) => r(t) && e(t.end) && e(t.write) && o(t.writable) && !n(t), b = (t) => r(t) && e(t.clear) && e(t.bytes) && e(t.position) && e(t.setPosition) && e(t.capacity) && e(t.getBufferIdentifier) && e(t.createLong);
export {
  a as isAsyncIterable,
  b as isFlatbuffersByteBuffer,
  s as isIterable,
  c as isIteratorResult,
  r as isObject,
  i as isPromise,
  l as isWritableDOMStream,
  u as isWritableNodeStream
};
//# sourceMappingURL=cori.data.api507.js.map
