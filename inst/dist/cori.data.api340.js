import h from "./cori.data.api422.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function n(s) {
  return s ? new u({ ...s.data() }, s.columnNames()) : new u();
}
class u {
  constructor(t, r) {
    this.data = t || {}, this.names = r || [];
  }
  add(t, r) {
    return this.has(t) || this.names.push(t + ""), this.data[t] = r;
  }
  has(t) {
    return h(this.data, t);
  }
  new() {
    return this.filter = null, this.groups = this.groups || null, this.order = null, this;
  }
  groupby(t) {
    return this.groups = t, this;
  }
}
export {
  n as default
};
//# sourceMappingURL=cori.data.api340.js.map
