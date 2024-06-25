/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const u = function* (t, n) {
  let r = t.byteLength;
  if (!n || r < n) {
    yield t;
    return;
  }
  let e = 0, a;
  for (; e < r; )
    a = e + n, yield t.slice(e, a), e = a;
}, f = async function* (t, n, r) {
  for await (const e of t)
    yield* u(ArrayBuffer.isView(e) ? e : await r(String(e)), n);
}, d = (t, n, r, e, a) => {
  const i = f(t, n, a);
  let y = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(l) {
      const { done: c, value: s } = await i.next();
      if (c) {
        l.close(), e();
        return;
      }
      let o = s.byteLength;
      r && r(y += o), l.enqueue(new Uint8Array(s));
    },
    cancel(l) {
      return e(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
};
export {
  f as readBytes,
  u as streamChunk,
  d as trackStream
};
//# sourceMappingURL=cori.data.api294.js.map
