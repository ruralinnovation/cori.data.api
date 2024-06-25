import { defaultColumnFactory as y } from "./cori.data.api299.js";
import O from "./cori.data.api302.js";
import A from "./cori.data.api303.js";
import _ from "./cori.data.api294.js";
import { regroup as j, nest as k, reindex as F } from "./cori.data.api304.js";
import { rowObjectBuilder as l } from "./cori.data.api305.js";
import { toArrowIPC as R } from "./cori.data.api306.js";
import S from "./cori.data.api307.js";
import x from "./cori.data.api308.js";
import M from "./cori.data.api309.js";
import N from "./cori.data.api310.js";
import b, { all as v } from "./cori.data.api311.js";
import B from "./cori.data.api312.js";
import E from "./cori.data.api313.js";
import f from "./cori.data.api296.js";
import G from "./cori.data.api314.js";
import H from "./cori.data.api315.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class m extends _ {
  /**
   * Create a new ColumnTable from existing input data.
   * @param {object[]|Iterable<object>|object|Map} values The backing table data values.
   *  If array-valued, should be a list of JavaScript objects with
   *  key-value properties for each column value.
   *  If object- or Map-valued, a table with two columns (one for keys,
   *  one for values) will be created.
   * @param {string[]} [names] The named columns to include.
   * @return {ColumnTable} A new ColumnTable instance.
   */
  static from(t, r) {
    return new m(O(t, r), r);
  }
  /**
   * Create a new table for a set of named columns.
   * @param {object|Map} columns
   *  The set of named column arrays. Keys are column names.
   *  The enumeration order of the keys determines the column indices,
   *  unless the names parameter is specified.
   *  Values must be arrays (or array-like values) of identical length.
   * @param {string[]} [names] Ordered list of column names. If specified,
   *  this array determines the column indices. If not specified, the
   *  key enumeration order of the columns object is used.
   * @return {ColumnTable} the instantiated ColumnTable instance.
   */
  static new(t, r) {
    if (t instanceof m)
      return t;
    const o = {}, s = [];
    for (const [e, i] of E(t))
      o[e] = i, s.push(e);
    return new m(o, r || s);
  }
  /**
   * Instantiate a new ColumnTable instance.
   * @param {object} columns An object mapping column names to values.
   * @param {string[]} [names] An ordered list of column names.
   * @param {BitSet} [filter] A filtering BitSet.
   * @param {GroupBySpec} [group] A groupby specification.
   * @param {RowComparator} [order] A row comparator function.
   * @param {Params} [params] An object mapping parameter names to values.
   */
  constructor(t, r, o, s, e, i) {
    G(t, y, t), r = r || Object.keys(t);
    const u = r.length ? t[r[0]].length : 0;
    super(r, u, t, o, s, e, i);
  }
  /**
   * Create a new table with the same type as this table.
   * The new table may have different data, filter, grouping, or ordering
   * based on the values of the optional configuration argument. If a
   * setting is not specified, it is inherited from the current table.
   * @param {CreateOptions} [options] Creation options for the new table.
   * @return {this} A newly created table.
   */
  create({ data: t, names: r, filter: o, groups: s, order: e }) {
    const i = o !== void 0 ? o : this.mask();
    return new m(
      t || this._data,
      r || (t ? null : this._names),
      i,
      s !== void 0 ? s : j(this._group, o && i),
      e !== void 0 ? e : this._order,
      this._params
    );
  }
  /**
   * Create a new table with additional columns drawn from one or more input
   * tables. All tables must have the same numer of rows and are reified
   * prior to assignment. In the case of repeated column names, input table
   * columns overwrite existing columns.
   * @param {...ColumnTable} tables The tables to merge with this table.
   * @return {ColumnTable} A new table with merged columns.
   * @example table.assign(table1, table2)
   */
  assign(...t) {
    const r = this.numRows(), o = this.reify(), s = A(o).groupby(o.groups());
    return t.forEach((e) => {
      e = m.new(e), e.numRows() !== r && f("Assign row counts do not match"), e = e.reify(), e.columnNames((i) => s.add(i, e.column(i)));
    }), this.create(s.new());
  }
  /**
   * Get the backing set of columns for this table.
   * @return {ColumnData} Object of named column instances.
   */
  columns() {
    return this._data;
  }
  /**
   * Get the column instance with the given name.
   * @param {string} name The column name.
   * @return {ColumnType | undefined} The named column, or undefined if it does not exist.
   */
  column(t) {
    return this._data[t];
  }
  /**
   * Get the column instance at the given index position.
   * @param {number} index The zero-based column index.
   * @return {ColumnType | undefined} The column, or undefined if it does not exist.
   */
  columnAt(t) {
    return this._data[this._names[t]];
  }
  /**
   * Get an array of values contained in a column. The resulting array
   * respects any table filter or orderby criteria.
   * @param {string} name The column name.
   * @param {ArrayConstructor|TypedArrayConstructor} [constructor=Array]
   *  The array constructor for instantiating the output array.
   * @return {DataValue[]|TypedArray} The array of column values.
   */
  array(t, r = Array) {
    const o = this.column(t), s = new r(this.numRows());
    let e = -1;
    return this.scan((i) => s[++e] = o.get(i), !0), s;
  }
  /**
   * Get the value for the given column and row.
   * @param {string} name The column name.
   * @param {number} [row=0] The row index, defaults to zero if not specified.
   * @return {DataValue} The table value at (column, row).
   */
  get(t, r = 0) {
    const o = this.column(t);
    return this.isFiltered() || this.isOrdered() ? o.get(this.indices()[r]) : o.get(r);
  }
  /**
   * Returns an accessor ("getter") function for a column. The returned
   * function takes a row index as its single argument and returns the
   * corresponding column value.
   * @param {string} name The column name.
   * @return {ColumnGetter} The column getter function.
   */
  getter(t) {
    const r = this.column(t), o = this.isFiltered() || this.isOrdered() ? this.indices() : null;
    return o ? (s) => r.get(o[s]) : r ? (s) => r.get(s) : f(`Unrecognized column: ${t}`);
  }
  /**
   * Returns an object representing a table row.
   * @param {number} [row=0] The row index, defaults to zero if not specified.
   * @return {object} A row object with named properties for each column.
   */
  object(t = 0) {
    return d(this)(t);
  }
  /**
   * Returns an array of objects representing table rows.
   * @param {ObjectsOptions} [options] The options for row object generation.
   * @return {object[]} An array of row objects.
   */
  objects(t = {}) {
    const { grouped: r, limit: o, offset: s } = t, e = b(this, t.columns || v()), i = l(e), u = [];
    if (this.scan(
      (n, h) => u.push(i(n, h)),
      !0,
      o,
      s
    ), r && this.isGrouped()) {
      const n = [];
      return this.scan((h) => n.push(h), !0, o, s), k(this, n, u, r);
    }
    return u;
  }
  /**
   * Returns an iterator over objects representing table rows.
   * @return {Iterator<object>} An iterator over row objects.
   */
  *[Symbol.iterator]() {
    const t = d(this), r = this.numRows();
    for (let o = 0; o < r; ++o)
      yield t(o);
  }
  /**
   * Create a new fully-materialized instance of this table.
   * All filter and orderby settings are removed from the new table.
   * Instead, the backing data itself is filtered and ordered as needed.
   * @param {number[]} [indices] Ordered row indices to materialize.
   *  If unspecified, all rows passing the table filter are used.
   * @return {this} A reified table.
   */
  reify(t) {
    const r = t ? t.length : this.numRows(), o = this._names;
    let s, e;
    if (!t && !this.isOrdered())
      if (this.isFiltered())
        r === this.totalRows() && (s = this.data());
      else
        return this;
    if (!s) {
      const i = t ? (n) => t.forEach(n) : (n) => this.scan(n, !0), u = o.length;
      s = {};
      for (let n = 0; n < u; ++n) {
        const h = o[n], a = this.column(h), p = s[h] = new (B(a))(r);
        let w = -1;
        i((g) => p[++w] = a.get(g));
      }
      this.isGrouped() && (e = F(this.groups(), i, !!t, r));
    }
    return this.create({ data: s, names: o, groups: e, filter: null, order: null });
  }
  /**
   * Apply a sequence of transformations to this table. The output
   * of each transform is passed as input to the next transform, and
   * the output of the last transform is then returned.
   * @param {...(Transform|Transform[])} transforms Transformation
   *  functions to apply to the table in sequence. Each function should
   *  take a single table as input and return a table as output.
   * @return {ColumnTable} The output of the last transform.
   */
  transform(...t) {
    return t.flat().reduce((r, o) => o(r), this);
  }
  /**
   * Format this table as an Apache Arrow table.
   * @param {ArrowFormatOptions} [options] The formatting options.
   * @return {import('apache-arrow').Table} An Apache Arrow table.
   */
  toArrow(t) {
    return H(this, t);
  }
  /**
   * Format this table as binary data in the Apache Arrow IPC format.
   * @param {ArrowFormatOptions} [options] The formatting options. Set {format: 'stream'} 
   *        or {format:"file"} for specific IPC format
   * @return {Uint8Array} A new Uint8Array of Arrow-encoded binary data.
   */
  toArrowBuffer(t) {
    return R(this, t);
  }
  /**
   * Format this table as a comma-separated values (CSV) string. Other
   * delimiters, such as tabs or pipes ('|'), can be specified using
   * the options argument.
   * @param {CSVFormatOptions} [options] The formatting options.
   * @return {string} A delimited value string.
   */
  toCSV(t) {
    return S(this, t);
  }
  /**
   * Format this table as an HTML table string.
   * @param {HTMLFormatOptions} [options] The formatting options.
   * @return {string} An HTML table string.
   */
  toHTML(t) {
    return x(this, t);
  }
  /**
   * Format this table as a JavaScript Object Notation (JSON) string.
   * @param {JSONFormatOptions} [options] The formatting options.
   * @return {string} A JSON string.
   */
  toJSON(t) {
    return M(this, t);
  }
  /**
   * Format this table as a GitHub-Flavored Markdown table string.
   * @param {MarkdownFormatOptions} [options] The formatting options.
   * @return {string} A GitHub-Flavored Markdown table string.
   */
  toMarkdown(t) {
    return N(this, t);
  }
}
function d(c) {
  let t = c._builder;
  if (!t) {
    const r = l(c.columnNames()), o = c.data();
    if (c.isOrdered() || c.isFiltered()) {
      const s = c.indices();
      t = (e) => r(s[e], o);
    } else
      t = (s) => r(s, o);
    c._builder = t;
  }
  return t;
}
export {
  m as default
};
//# sourceMappingURL=cori.data.api301.js.map
