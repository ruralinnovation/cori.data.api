import { __awaiter as h, __asyncValues as m } from "./cori.data.api491.js";
import { decodeUtf8 as l } from "./cori.data.api547.js";
import { AsyncQueue as p } from "./cori.data.api506.js";
import { toUint8Array as A, joinUint8Arrays as c } from "./cori.data.api492.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class v extends p {
  write(t) {
    if ((t = A(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? l(this.toUint8Array(!0)) : this.toUint8Array(!1).then(l);
  }
  toUint8Array(t = !1) {
    return t ? c(this._values)[0] : h(this, void 0, void 0, function* () {
      var e, i, a, u;
      const y = [];
      let f = 0;
      try {
        for (var n = !0, o = m(this), s; s = yield o.next(), e = s.done, !e; n = !0) {
          u = s.value, n = !1;
          const r = u;
          y.push(r), f += r.byteLength;
        }
      } catch (r) {
        i = { error: r };
      } finally {
        try {
          !n && !e && (a = o.return) && (yield a.call(o));
        } finally {
          if (i)
            throw i.error;
        }
      }
      return c(y, f)[0];
    });
  }
}
export {
  v as AsyncByteQueue
};
//# sourceMappingURL=cori.data.api503.js.map
