import _ from "./cori.data.api282.js";
import { getAggregate as p } from "./cori.data.api398.js";
import v from "./cori.data.api637.js";
import g from "./cori.data.api260.js";
import d from "./cori.data.api399.js";
import x from "./cori.data.api495.js";
import R from "./cori.data.api667.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const l = (n, t, s) => x(
  t,
  "{" + v(n, (r, i) => `_${i}.${s}(${t});`) + "}",
  n
);
function U(n, t) {
  const { ops: s, output: r } = E(n, t), i = n[0].fields, e = i.length, o = e === 0 ? h : e === 1 ? F : e === 2 ? $ : g("Unsupported field count: " + e);
  return new o(i, s, r, t);
}
function E(n, t) {
  const s = {}, r = [];
  function i(o, c = []) {
    const f = o + ":" + c;
    if (s[f])
      return s[f];
    const u = p(o), a = u.create(...c);
    return t < 0 && u.stream && u.stream.forEach((m) => i(m, [])), u.req && u.req.forEach((m) => i(m, [])), s[f] = a, r.push(a), a;
  }
  const e = n.map((o) => {
    const c = i(o.name, o.params);
    return c.output = o.id, c;
  });
  return { ops: r, output: e };
}
class h extends _ {
  constructor(t, s, r, i) {
    super(r), this._op = s, this._fields = t, this._stream = !!i;
  }
  init() {
    const t = { count: 0, valid: 0, stream: this._stream };
    return this._op.forEach((s) => s.init(t)), t.values && (t.list = new R()), t;
  }
  write(t, s, r) {
    const i = this._outputs, e = i.length;
    for (let o = 0; o < e; ++o)
      s[i[o].output][r] = i[o].value(t);
    return 1;
  }
  _add() {
  }
  _rem() {
  }
  add(t) {
    ++t.count;
  }
  rem(t) {
    --t.count;
  }
}
class F extends h {
  constructor(t, s, r, i) {
    super(t, s, r, i);
    const e = ["state", "v1", "v2"];
    this._add = l(s, e, "add"), this._rem = l(s, e, "rem");
  }
  add(t, s, r) {
    const i = this._fields[0](s, r);
    ++t.count, d(i) && (++t.valid, t.list && t.list.add(i), this._add(t, i));
  }
  rem(t, s, r) {
    const i = this._fields[0](s, r);
    --t.count, d(i) && (--t.valid, t.list && t.list.rem(), this._rem(t, i));
  }
}
class $ extends h {
  constructor(t, s, r, i) {
    super(t, s, r, i);
    const e = ["state", "v1", "v2"];
    this._add = l(s, e, "add"), this._rem = l(s, e, "rem");
  }
  add(t, s, r) {
    const i = this._fields[0](s, r), e = this._fields[1](s, r);
    ++t.count, d(i) && d(e) && (++t.valid, t.list && t.list.add([i, e]), this._add(t, i, e));
  }
  rem(t, s, r) {
    const i = this._fields[0](s, r), e = this._fields[1](s, r);
    --t.count, d(i) && d(e) && (--t.valid, t.list && t.list.rem(), this._rem(t, i, e));
  }
}
export {
  U as default
};
//# sourceMappingURL=cori.data.api641.js.map
