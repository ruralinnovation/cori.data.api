import { Vector as c } from "./cori.data.api410.js";
import { valueToString as a } from "./cori.data.api562.js";
import { instance as l } from "./cori.data.api555.js";
import { instance as f } from "./cori.data.api556.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const n = Symbol.for("keys"), i = Symbol.for("vals");
class h {
  constructor(e) {
    return this[n] = new c([e.children[0]]).memoize(), this[i] = e.children[1], new Proxy(this, new b());
  }
  [Symbol.iterator]() {
    return new m(this[n], this[i]);
  }
  get size() {
    return this[n].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const e = this[n], t = this[i], r = {};
    for (let s = -1, u = e.length; ++s < u; )
      r[e.get(s)] = l.visit(t, s);
    return r;
  }
  toString() {
    return `{${[...this].map(([e, t]) => `${a(e)}: ${a(t)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class m {
  constructor(e, t) {
    this.keys = e, this.vals = t, this.keyIndex = 0, this.numKeys = e.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const e = this.keyIndex;
    return e === this.numKeys ? { done: !0, value: null } : (this.keyIndex++, {
      done: !1,
      value: [
        this.keys.get(e),
        l.visit(this.vals, e)
      ]
    });
  }
}
class b {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(e) {
    return e[n].toArray().map(String);
  }
  has(e, t) {
    return e[n].includes(t);
  }
  getOwnPropertyDescriptor(e, t) {
    if (e[n].indexOf(t) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(e, t) {
    if (Reflect.has(e, t))
      return e[t];
    const r = e[n].indexOf(t);
    if (r !== -1) {
      const s = l.visit(Reflect.get(e, i), r);
      return Reflect.set(e, t, s), s;
    }
  }
  set(e, t, r) {
    const s = e[n].indexOf(t);
    return s !== -1 ? (f.visit(Reflect.get(e, i), s, r), Reflect.set(e, t, r)) : Reflect.has(e, t) ? Reflect.set(e, t, r) : !1;
  }
}
Object.defineProperties(h.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [n]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [i]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
export {
  h as MapRow,
  n as kKeys,
  i as kVals
};
//# sourceMappingURL=cori.data.api504.js.map
