import { toArrayBufferView as h } from "./cori.data.api501.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const w = Symbol.for("isArrowBigNum");
function o(r, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(h(this.TypedArray, r), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(r, ...t), this.constructor.prototype);
}
o.prototype[w] = !0;
o.prototype.toJSON = function() {
  return `"${f(this)}"`;
};
o.prototype.valueOf = function() {
  return d(this);
};
o.prototype.toString = function() {
  return f(this);
};
o.prototype[Symbol.toPrimitive] = function(r = "default") {
  switch (r) {
    case "number":
      return d(this);
    case "string":
      return f(this);
    case "default":
      return B(this);
  }
  return f(this);
};
function u(...r) {
  return o.apply(this, r);
}
function g(...r) {
  return o.apply(this, r);
}
function a(...r) {
  return o.apply(this, r);
}
Object.setPrototypeOf(u.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(g.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(a.prototype, Object.create(Uint32Array.prototype));
Object.assign(u.prototype, o.prototype, { constructor: u, signed: !0, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(g.prototype, o.prototype, { constructor: g, signed: !1, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(a.prototype, o.prototype, { constructor: a, signed: !0, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
function d(r) {
  const { buffer: t, byteOffset: e, length: i, signed: s } = r, n = new BigUint64Array(t, e, i), y = s && n.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(y ? 1 : 0), A = BigInt(0);
  if (y) {
    for (const p of n)
      c += ~p * (BigInt(1) << BigInt(32) * A++);
    c *= BigInt(-1);
  } else
    for (const p of n)
      c += p * (BigInt(1) << BigInt(32) * A++);
  return c;
}
const f = (r) => {
  if (r.byteLength === 8)
    return `${new r.BigIntArray(r.buffer, r.byteOffset, 1)[0]}`;
  if (!r.signed)
    return b(r);
  let t = new Uint16Array(r.buffer, r.byteOffset, r.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0)
    return b(r);
  t = t.slice();
  let i = 1;
  for (let n = 0; n < t.length; n++) {
    const y = t[n], c = ~y + i;
    t[n] = c, i &= y === 0 ? 1 : 0;
  }
  return `-${b(t)}`;
}, B = (r) => r.byteLength === 8 ? new r.BigIntArray(r.buffer, r.byteOffset, 1)[0] : f(r);
function b(r) {
  let t = "";
  const e = new Uint32Array(2);
  let i = new Uint16Array(r.buffer, r.byteOffset, r.byteLength / 2);
  const s = new Uint32Array((i = new Uint16Array(i).reverse()).buffer);
  let n = -1;
  const y = i.length - 1;
  do {
    for (e[0] = i[n = 0]; n < y; )
      i[n++] = e[1] = e[0] / 10, e[0] = (e[0] - e[1] * 10 << 16) + i[n];
    i[n] = e[1] = e[0] / 10, e[0] = e[0] - e[1] * 10, t = `${e[0]}${t}`;
  } while (s[0] || s[1] || s[2] || s[3]);
  return t ?? "0";
}
class l {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new u(t);
      case !1:
        return new g(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new u(t);
    }
    return t.byteLength === 16 ? new a(t) : new g(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new u(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new g(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new a(t);
  }
  constructor(t, e) {
    return l.new(t, e);
  }
}
export {
  l as BN,
  B as bigNumToBigInt,
  f as bigNumToString,
  w as isArrowBigNumSymbol
};
//# sourceMappingURL=cori.data.api624.js.map
