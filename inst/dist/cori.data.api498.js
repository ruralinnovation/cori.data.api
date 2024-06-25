import { __asyncGenerator as v, __await as a, __awaiter as L } from "./cori.data.api499.js";
import { toUint8ArrayIterator as _, joinUint8Arrays as c, toUint8ArrayAsyncIterator as z, toUint8Array as b } from "./cori.data.api500.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const P = {
  fromIterable(r) {
    return w(I(r));
  },
  fromAsyncIterable(r) {
    return w(U(r));
  },
  fromDOMStream(r) {
    return w(x(r));
  },
  fromNodeStream(r) {
    return w(D(r));
  },
  // @ts-ignore
  toDOMStream(r, f) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(r, f) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, w = (r) => (r.next(), r);
function* I(r) {
  let f, t = !1, o = [], i, u, d, e = 0;
  function l() {
    return u === "peek" ? c(o, d)[0] : ([i, o, e] = c(o, d), i);
  }
  ({ cmd: u, size: d } = (yield null) || { cmd: "read", size: 0 });
  const s = _(r)[Symbol.iterator]();
  try {
    do
      if ({ done: f, value: i } = Number.isNaN(d - e) ? s.next() : s.next(d - e), !f && i.byteLength > 0 && (o.push(i), e += i.byteLength), f || d <= e)
        do
          ({ cmd: u, size: d } = yield l());
        while (d < e);
    while (!f);
  } catch (n) {
    (t = !0) && typeof s.throw == "function" && s.throw(n);
  } finally {
    t === !1 && typeof s.return == "function" && s.return(null);
  }
  return null;
}
function U(r) {
  return v(this, arguments, function* () {
    let t, o = !1, i = [], u, d, e, l = 0;
    function s() {
      return d === "peek" ? c(i, e)[0] : ([u, i, l] = c(i, e), u);
    }
    ({ cmd: d, size: e } = (yield yield a(null)) || { cmd: "read", size: 0 });
    const n = z(r)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: t, value: u } = Number.isNaN(e - l) ? yield a(n.next()) : yield a(n.next(e - l)), !t && u.byteLength > 0 && (i.push(u), l += u.byteLength), t || e <= l)
          do
            ({ cmd: d, size: e } = yield yield a(s()));
          while (e < l);
      while (!t);
    } catch (m) {
      (o = !0) && typeof n.throw == "function" && (yield a(n.throw(m)));
    } finally {
      o === !1 && typeof n.return == "function" && (yield a(n.return(new Uint8Array(0))));
    }
    return yield a(null);
  });
}
function x(r) {
  return v(this, arguments, function* () {
    let t = !1, o = !1, i = [], u, d, e, l = 0;
    function s() {
      return d === "peek" ? c(i, e)[0] : ([u, i, l] = c(i, e), u);
    }
    ({ cmd: d, size: e } = (yield yield a(null)) || { cmd: "read", size: 0 });
    const n = new R(r);
    try {
      do
        if ({ done: t, value: u } = Number.isNaN(e - l) ? yield a(n.read()) : yield a(n.read(e - l)), !t && u.byteLength > 0 && (i.push(b(u)), l += u.byteLength), t || e <= l)
          do
            ({ cmd: d, size: e } = yield yield a(s()));
          while (e < l);
      while (!t);
    } catch (m) {
      (o = !0) && (yield a(n.cancel(m)));
    } finally {
      o === !1 ? yield a(n.cancel()) : r.locked && n.releaseLock();
    }
    return yield a(null);
  });
}
class R {
  constructor(f) {
    this.source = f, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {
    });
  }
  get closed() {
    return this.reader ? this.reader.closed.catch(() => {
    }) : Promise.resolve();
  }
  releaseLock() {
    this.reader && this.reader.releaseLock(), this.reader = null;
  }
  cancel(f) {
    return L(this, void 0, void 0, function* () {
      const { reader: t, source: o } = this;
      t && (yield t.cancel(f).catch(() => {
      })), o && o.locked && this.releaseLock();
    });
  }
  read(f) {
    return L(this, void 0, void 0, function* () {
      if (f === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const t = yield this.reader.read();
      return !t.done && (t.value = b(t)), t;
    });
  }
}
const g = (r, f) => {
  const t = (i) => o([f, i]);
  let o;
  return [f, t, new Promise((i) => (o = i) && r.once(f, t))];
};
function D(r) {
  return v(this, arguments, function* () {
    const t = [];
    let o = "error", i = !1, u = null, d, e, l = 0, s = [], n;
    function m() {
      return d === "peek" ? c(s, e)[0] : ([n, s, l] = c(s, e), n);
    }
    if ({ cmd: d, size: e } = (yield yield a(null)) || { cmd: "read", size: 0 }, r.isTTY)
      return yield yield a(new Uint8Array(0)), yield a(null);
    try {
      t[0] = g(r, "end"), t[1] = g(r, "error");
      do {
        if (t[2] = g(r, "readable"), [o, u] = yield a(Promise.race(t.map((p) => p[2]))), o === "error")
          break;
        if ((i = o === "end") || (Number.isFinite(e - l) ? (n = b(r.read(e - l)), n.byteLength < e - l && (n = b(r.read()))) : n = b(r.read()), n.byteLength > 0 && (s.push(n), l += n.byteLength)), i || e <= l)
          do
            ({ cmd: d, size: e } = yield yield a(m()));
          while (e < l);
      } while (!i);
    } finally {
      yield a(N(t, o === "error" ? u : null));
    }
    return yield a(null);
    function N(p, y) {
      return n = s = null, new Promise((A, S) => {
        for (const [h, k] of p)
          r.off(h, k);
        try {
          const h = r.destroy;
          h && h.call(r, y), y = void 0;
        } catch (h) {
          y = h || y;
        } finally {
          y != null ? S(y) : A();
        }
      });
    }
  });
}
export {
  P as default
};
//# sourceMappingURL=cori.data.api498.js.map
