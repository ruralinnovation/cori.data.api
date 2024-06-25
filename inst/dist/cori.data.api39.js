import i from "./cori.data.api332.js";
import { Query as m } from "./cori.data.api365.js";
import { Verbs as n, Verb as u } from "./cori.data.api40.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class a extends i {
  /**
   * Construct a new query instance.
   * @param {Verb[]} verbs An array of verb instances.
   * @param {object} [params] Optional query parameters, corresponding
   *  to parameter references in table expressions.
   * @param {string} [table] Optional name of the table to query.
   */
  constructor(t, e, s) {
    super(e), this._verbs = t || [], this._table = s;
  }
  /**
   * Create a new query instance from the given serialized object.
   * @param {QueryObject} object A serialized query representation, such as
   *  those generated by Query.toObject.
   * @returns {Query} The instantiated query.
   */
  static from({ verbs: t, table: e, params: s }) {
    return new a(t.map(u.from), s, e);
  }
  /**
   * Provide an informative object string tag.
   */
  get [Symbol.toStringTag]() {
    return this._verbs ? `Query: ${this._verbs.length} verbs` + (this._table ? ` on '${this._table}'` : "") : "Object";
  }
  /**
   * Return the number of verbs in this query.
   */
  get length() {
    return this._verbs.length;
  }
  /**
   * Return the name of the table this query applies to.
   * @return {string} The name of the source table, or undefined.
   */
  get tableName() {
    return this._table;
  }
  /**
   * Get or set table expression parameter values.
   * If called with no arguments, returns the current parameter values
   * as an object. Otherwise, adds the provided parameters to this
   * query's parameter set and returns the table. Any prior parameters
   * with names matching the input parameters are overridden.
   * @param {object} values The parameter values.
   * @return {Query|object} The current parameter values (if called
   *  with no arguments) or this query.
   */
  params(t) {
    return arguments.length ? (this._params = { ...this._params, ...t }, this) : this._params;
  }
  /**
   * Evaluate this query against a given table and catalog.
   * @param {Table} table The Arquero table to process.
   * @param {Function} catalog A table lookup function that accepts a table
   *  name string as input and returns a corresponding Arquero table.
   * @returns {Table} The resulting Arquero table.
   */
  evaluate(t, e) {
    t = t || e(this._table);
    for (const s of this._verbs)
      t = s.evaluate(t.params(this._params), e);
    return t;
  }
  /**
   * Serialize this query as a JSON-compatible object. The resulting
   * object can be passed to Query.from to re-instantiate this query.
   * @returns {object} A JSON-compatible object representing this query.
   */
  toObject() {
    return o(this, "toObject");
  }
  /**
   * Serialize this query as a JSON-compatible object. The resulting
   * object can be passed to Query.from to re-instantiate this query.
   * This method simply returns the result of toObject, but is provided
   * as a separate method to allow later customization of JSON export.
   * @returns {object} A JSON-compatible object representing this query.
   */
  toJSON() {
    return this.toObject();
  }
  /**
   * Serialize this query to a JSON-compatible abstract syntax tree.
   * All table expressions will be parsed and represented as AST instances
   * using a modified form of the Mozilla JavaScript AST format.
   * This method can be used to output parsed and serialized representations
   * to translate Arquero queries to alternative data processing platforms.
   * @returns {object} A JSON-compatible abstract syntax tree object.
   */
  toAST() {
    return o(this, "toAST", { type: m });
  }
}
function o(r, t, e) {
  return {
    ...e,
    verbs: r._verbs.map((s) => s[t]()),
    ...r._params ? { params: r._params } : null,
    ...r._table ? { table: r._table } : null
  };
}
function b(r, t) {
  return new a(
    r._verbs.concat(t),
    r._params,
    r._table
  );
}
for (const r in n) {
  const t = n[r];
  a.prototype["__" + r] = function(e, ...s) {
    return b(e, t(...s));
  };
}
export {
  a as default
};
//# sourceMappingURL=cori.data.api39.js.map
