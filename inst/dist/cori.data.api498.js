import { DataType as c } from "./cori.data.api411.js";
import { MetadataVersion as f } from "./cori.data.api517.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class l {
  constructor(t = [], n, e, i = f.V5) {
    this.fields = t || [], this.metadata = n || /* @__PURE__ */ new Map(), e || (e = m(t)), this.dictionaries = e, this.metadataVersion = i;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((t) => t.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((t, n) => `${n}: ${t}`).join(", ")} }>`;
  }
  /**
   * Construct a new Schema containing only specified fields.
   *
   * @param fieldNames Names of fields to keep.
   * @returns A new Schema of fields matching the specified names.
   */
  select(t) {
    const n = new Set(t), e = this.fields.filter((i) => n.has(i.name));
    return new l(e, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const n = t.map((e) => this.fields[e]).filter(Boolean);
    return new l(n, this.metadata);
  }
  assign(...t) {
    const n = t[0] instanceof l ? t[0] : Array.isArray(t[0]) ? new l(t[0]) : new l(t), e = [...this.fields], i = s(s(/* @__PURE__ */ new Map(), this.metadata), n.metadata), a = n.fields.filter((d) => {
      const p = e.findIndex((u) => u.name === d.name);
      return ~p ? (e[p] = d.clone({
        metadata: s(s(/* @__PURE__ */ new Map(), e[p].metadata), d.metadata)
      })) && !1 : !0;
    }), h = m(a, /* @__PURE__ */ new Map());
    return new l([...e, ...a], i, new Map([...this.dictionaries, ...h]));
  }
}
l.prototype.fields = null;
l.prototype.metadata = null;
l.prototype.dictionaries = null;
class o {
  /** @nocollapse */
  static new(...t) {
    let [n, e, i, a] = t;
    return t[0] && typeof t[0] == "object" && ({ name: n } = t[0], e === void 0 && (e = t[0].type), i === void 0 && (i = t[0].nullable), a === void 0 && (a = t[0].metadata)), new o(`${n}`, e, i, a);
  }
  constructor(t, n, e = !1, i) {
    this.name = t, this.type = n, this.nullable = e, this.metadata = i || /* @__PURE__ */ new Map();
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...t) {
    let [n, e, i, a] = t;
    return !t[0] || typeof t[0] != "object" ? [n = this.name, e = this.type, i = this.nullable, a = this.metadata] = t : { name: n = this.name, type: e = this.type, nullable: i = this.nullable, metadata: a = this.metadata } = t[0], o.new(n, e, i, a);
  }
}
o.prototype.type = null;
o.prototype.name = null;
o.prototype.nullable = null;
o.prototype.metadata = null;
function s(r, t) {
  return new Map([...r || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function m(r, t = /* @__PURE__ */ new Map()) {
  for (let n = -1, e = r.length; ++n < e; ) {
    const a = r[n].type;
    if (c.isDictionary(a)) {
      if (!t.has(a.id))
        t.set(a.id, a.dictionary);
      else if (t.get(a.id) !== a.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    a.children && a.children.length > 0 && m(a.children, t);
  }
  return t;
}
export {
  o as Field,
  l as Schema
};
//# sourceMappingURL=cori.data.api498.js.map
