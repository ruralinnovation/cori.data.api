import { Field as n } from "./cori.data.api509.js";
import { Builder as h } from "./cori.data.api513.js";
import { FixedSizeList as l } from "./cori.data.api422.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class u extends h {
  setValue(e, i) {
    const [t] = this.children, s = e * this.stride;
    for (let r = -1, d = i.length; ++r < d; )
      t.set(s + r, i[r]);
  }
  addChild(e, i = "0") {
    if (this.numChildren > 0)
      throw new Error("FixedSizeListBuilder can only have one child.");
    const t = this.children.push(e);
    return this.type = new l(this.type.listSize, new n(i, e.type, !0)), t;
  }
}
export {
  u as FixedSizeListBuilder
};
//# sourceMappingURL=cori.data.api631.js.map
