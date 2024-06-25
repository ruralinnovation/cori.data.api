import { Options as o, ExprObject as b, SelectionList as m, ExprList as a, OrderbyKeys as j, ExprNumber as x, Expr as E, TableRef as y, JoinKeys as l, JoinValues as v, TableRefList as u, Verb as O } from "./cori.data.api305.js";
import { joinKeys as V, joinValues as g, orderbyKeys as k, fromObject as T, getTable as h, toObject as K } from "./cori.data.api306.js";
import L from "./cori.data.api307.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class S {
  /**
   * Construct a new verb instance.
   * @param {string} verb The verb name.
   * @param {object[]} schema Schema describing verb parameters.
   * @param {any[]} params Array of parameter values.
   */
  constructor(n, t = [], r = []) {
    this.verb = n, this.schema = t, t.forEach((p, c) => {
      const s = p.type, i = r[c], d = s === l ? V(i) : s === v ? g(i) : s === j ? k(i) : i;
      this[p.name] = d !== void 0 ? d : p.default;
    });
  }
  /**
   * Create new verb instance from the given serialized object.
   * @param {object} object A serialized verb representation, such as
   *  those generated by Verb.toObject.
   * @returns {Verb} The instantiated verb.
   */
  static from(n) {
    const t = w[n.verb], r = (t.schema || []).map(({ name: p }) => T(n[p]));
    return t(...r);
  }
  /**
   * Evaluate this verb against a given table and catalog.
   * @param {Table} table The Arquero table to process.
   * @param {Function} catalog A table lookup function that accepts a table
   *  name string as input and returns a corresponding Arquero table.
   * @returns {Table} The resulting Arquero table.
   */
  evaluate(n, t) {
    const r = this.schema.map(({ name: p, type: c }) => {
      const s = this[p];
      return c === y ? h(t, s) : c === u ? s.map((i) => h(t, i)) : s;
    });
    return n[this.verb](...r);
  }
  /**
   * Serialize this verb as a JSON-compatible object. The resulting
   * object can be passed to Verb.from to re-instantiate this verb.
   * @returns {object} A JSON-compatible object representing this verb.
   */
  toObject() {
    const n = { verb: this.verb };
    return this.schema.forEach(({ name: t }) => {
      n[t] = K(this[t]);
    }), n;
  }
  /**
   * Serialize this verb to a JSON-compatible abstract syntax tree.
   * All table expressions will be parsed and represented as AST instances
   * using a modified form of the Mozilla JavaScript AST format.
   * This method can be used to output parsed and serialized representations
   * to translate Arquero verbs to alternative data processing platforms.
   * @returns {object} A JSON-compatible abstract syntax tree object.
   */
  toAST() {
    const n = { type: O, verb: this.verb };
    return this.schema.forEach(({ name: t, type: r, props: p }) => {
      n[t] = L(this[t], r, p);
    }), n;
  }
}
function e(f, n) {
  return Object.assign(
    (...t) => new S(f, n, t),
    { schema: n }
  );
}
const w = {
  count: e("count", [
    { name: "options", type: o }
  ]),
  derive: e("derive", [
    { name: "values", type: b },
    {
      name: "options",
      type: o,
      props: { before: m, after: m }
    }
  ]),
  filter: e("filter", [
    { name: "criteria", type: b }
  ]),
  groupby: e("groupby", [
    { name: "keys", type: a }
  ]),
  orderby: e("orderby", [
    { name: "keys", type: j }
  ]),
  relocate: e("relocate", [
    { name: "columns", type: m },
    {
      name: "options",
      type: o,
      props: { before: m, after: m }
    }
  ]),
  rename: e("rename", [
    { name: "columns", type: m }
  ]),
  rollup: e("rollup", [
    { name: "values", type: b }
  ]),
  sample: e("sample", [
    { name: "size", type: x },
    { name: "options", type: o, props: { weight: E } }
  ]),
  select: e("select", [
    { name: "columns", type: m }
  ]),
  ungroup: e("ungroup"),
  unorder: e("unorder"),
  reify: e("reify"),
  dedupe: e("dedupe", [
    { name: "keys", type: a, default: [] }
  ]),
  impute: e("impute", [
    { name: "values", type: b },
    { name: "options", type: o, props: { expand: a } }
  ]),
  fold: e("fold", [
    { name: "values", type: a },
    { name: "options", type: o }
  ]),
  pivot: e("pivot", [
    { name: "keys", type: a },
    { name: "values", type: a },
    { name: "options", type: o }
  ]),
  spread: e("spread", [
    { name: "values", type: a },
    { name: "options", type: o }
  ]),
  unroll: e("unroll", [
    { name: "values", type: a },
    { name: "options", type: o, props: { drop: a } }
  ]),
  lookup: e("lookup", [
    { name: "table", type: y },
    { name: "on", type: l },
    { name: "values", type: a }
  ]),
  join: e("join", [
    { name: "table", type: y },
    { name: "on", type: l },
    { name: "values", type: v },
    { name: "options", type: o }
  ]),
  cross: e("cross", [
    { name: "table", type: y },
    { name: "values", type: v },
    { name: "options", type: o }
  ]),
  semijoin: e("semijoin", [
    { name: "table", type: y },
    { name: "on", type: l }
  ]),
  antijoin: e("antijoin", [
    { name: "table", type: y },
    { name: "on", type: l }
  ]),
  concat: e("concat", [
    { name: "tables", type: u }
  ]),
  union: e("union", [
    { name: "tables", type: u }
  ]),
  intersect: e("intersect", [
    { name: "tables", type: u }
  ]),
  except: e("except", [
    { name: "tables", type: u }
  ])
};
export {
  S as Verb,
  w as Verbs,
  e as createVerb
};
//# sourceMappingURL=cori.data.api35.js.map
