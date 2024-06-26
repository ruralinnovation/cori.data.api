import o from "./cori.data.api303.js";
import i from "./cori.data.api331.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function m(s, t = [], r = []) {
  return new a(s, o(t), o(r));
}
class a {
  constructor(t, r, n) {
    this.name = t, this.fields = r, this.params = n;
  }
  toString() {
    const t = [
      ...this.fields.map((r) => `d[${i(r)}]`),
      ...this.params.map(i)
    ];
    return `d => op.${this.name}(${t})`;
  }
  toObject() {
    return { expr: this.toString(), func: !0 };
  }
}
export {
  a as Op,
  m as default
};
//# sourceMappingURL=cori.data.api333.js.map
