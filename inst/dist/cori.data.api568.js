import { makeData as f } from "./cori.data.api504.js";
import { Struct as p } from "./cori.data.api411.js";
import { RecordBatch as B } from "./cori.data.api515.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function N(u, t) {
  return h(u, t.map((i) => i.data.concat()));
}
function h(u, t) {
  const i = [...u.fields], s = [], a = { numBatches: t.reduce((r, d) => Math.max(r, d.length), 0) };
  let c = 0, l = 0, n = -1;
  const m = t.length;
  let e, o = [];
  for (; a.numBatches-- > 0; ) {
    for (l = Number.POSITIVE_INFINITY, n = -1; ++n < m; )
      o[n] = e = t[n].shift(), l = Math.min(l, e ? e.length : l);
    Number.isFinite(l) && (o = v(i, l, o, t, a), l > 0 && (s[c++] = f({
      type: new p(i),
      length: l,
      nullCount: 0,
      children: o.slice()
    })));
  }
  return [
    u = u.assign(i),
    s.map((r) => new B(u, r))
  ];
}
function v(u, t, i, s, a) {
  var c;
  const l = (t + 63 & -64) >> 3;
  for (let n = -1, m = s.length; ++n < m; ) {
    const e = i[n], o = e == null ? void 0 : e.length;
    if (o >= t)
      o === t ? i[n] = e : (i[n] = e.slice(0, t), a.numBatches = Math.max(a.numBatches, s[n].unshift(e.slice(t, o - t))));
    else {
      const r = u[n];
      u[n] = r.clone({ nullable: !0 }), i[n] = (c = e == null ? void 0 : e._changeLengthAndBackfillNullBitmap(t)) !== null && c !== void 0 ? c : f({
        type: r.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(l)
      });
    }
  }
  return i;
}
export {
  N as distributeVectorsIntoRecordBatches
};
//# sourceMappingURL=cori.data.api568.js.map
