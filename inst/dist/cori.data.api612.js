import { valueToString as u } from "./cori.data.api573.js";
import { instance as o } from "./cori.data.api566.js";
import { instance as h } from "./cori.data.api567.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const r = Symbol.for("parent"), s = Symbol.for("rowIndex");
class d {
  constructor(e, t) {
    return this[r] = e, this[s] = t, new Proxy(this, new m());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const e = this[s], t = this[r], n = t.type.children, i = {};
    for (let l = -1, a = n.length; ++l < a; )
      i[n[l].name] = o.visit(t.children[l], e);
    return i;
  }
  toString() {
    return `{${[...this].map(([e, t]) => `${u(e)}: ${u(t)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new f(this[r], this[s]);
  }
}
class f {
  constructor(e, t) {
    this.childIndex = 0, this.children = e.children, this.rowIndex = t, this.childFields = e.type.children, this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const e = this.childIndex;
    return e < this.numChildren ? (this.childIndex = e + 1, {
      done: !1,
      value: [
        this.childFields[e].name,
        o.visit(this.children[e], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(d.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [r]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [s]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class m {
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
    return e[r].type.children.map((t) => t.name);
  }
  has(e, t) {
    return e[r].type.children.findIndex((n) => n.name === t) !== -1;
  }
  getOwnPropertyDescriptor(e, t) {
    if (e[r].type.children.findIndex((n) => n.name === t) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(e, t) {
    if (Reflect.has(e, t))
      return e[t];
    const n = e[r].type.children.findIndex((i) => i.name === t);
    if (n !== -1) {
      const i = o.visit(e[r].children[n], e[s]);
      return Reflect.set(e, t, i), i;
    }
  }
  set(e, t, n) {
    const i = e[r].type.children.findIndex((l) => l.name === t);
    return i !== -1 ? (h.visit(e[r].children[i], e[s], n), Reflect.set(e, t, n)) : Reflect.has(e, t) || typeof t == "symbol" ? Reflect.set(e, t, n) : !1;
  }
}
export {
  d as StructRow
};
//# sourceMappingURL=cori.data.api612.js.map
