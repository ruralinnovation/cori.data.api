import { Field as i } from "./cori.data.api259.js";
import { Builder as n } from "./cori.data.api263.js";
import { Struct as d } from "./cori.data.api201.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class p extends n {
  setValue(t, r) {
    const { children: e, type: h } = this;
    switch (Array.isArray(r) || r.constructor) {
      case !0:
        return h.children.forEach((c, s) => e[s].set(t, r[s]));
      case Map:
        return h.children.forEach((c, s) => e[s].set(t, r.get(c.name)));
      default:
        return h.children.forEach((c, s) => e[s].set(t, r[c.name]));
    }
  }
  /** @inheritdoc */
  setValid(t, r) {
    return super.setValid(t, r) || this.children.forEach((e) => e.setValid(t, r)), r;
  }
  addChild(t, r = `${this.numChildren}`) {
    const e = this.children.push(t);
    return this.type = new d([...this.type.children, new i(r, t.type, !0)]), e;
  }
}
export {
  p as StructBuilder
};
//# sourceMappingURL=cori.data.api380.js.map
