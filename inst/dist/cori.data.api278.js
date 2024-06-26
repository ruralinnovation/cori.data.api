import d from "./cori.data.api279.js";
import m from "./cori.data.api280.js";
import _ from "./cori.data.api281.js";
import p from "./cori.data.api282.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class y extends d {
  /**
   * Instantiate a new Table instance.
   * @param {string[]} names An ordered list of column names.
   * @param {number} nrows The number of rows.
   * @param {TableData} data The backing data, which can vary by implementation.
   * @param {BitSet} [filter] A bit mask for which rows to include.
   * @param {GroupBySpec} [groups] A groupby specification for grouping ows.
   * @param {RowComparator} [order] A comparator function for sorting rows.
   * @param {Params} [params] Parameter values for table expressions.
   */
  constructor(t, e, r, i, o, h, n) {
    super(n), this._names = Object.freeze(t), this._data = r, this._total = e, this._nrows = i ? i.count() : e, this._mask = e !== this._nrows && i || null, this._group = o || null, this._order = h || null;
  }
  /**
   * Create a new table with the same type as this table.
   * The new table may have different data, filter, grouping, or ordering
   * based on the values of the optional configuration argument. If a
   * setting is not specified, it is inherited from the current table.
   * @param {CreateOptions} [options] Creation options for the new table.
   * @return {this} A newly created table.
   */
  create(t) {
    m("Not implemented");
  }
  /**
   * Provide an informative object string tag.
   */
  get [Symbol.toStringTag]() {
    if (!this._names)
      return "Object";
    const t = this.numRows() + " row" + (this.numRows() !== 1 ? "s" : "");
    return `Table: ${this.numCols() + " col" + (this.numCols() !== 1 ? "s" : "")} x ${t}` + (this.isFiltered() ? ` (${this.totalRows()} backing)` : "") + (this.isGrouped() ? `, ${this._group.size} groups` : "") + (this.isOrdered() ? ", ordered" : "");
  }
  /**
   * Indicates if the table has a filter applied.
   * @return {boolean} True if filtered, false otherwise.
   */
  isFiltered() {
    return !!this._mask;
  }
  /**
   * Indicates if the table has a groupby specification.
   * @return {boolean} True if grouped, false otherwise.
   */
  isGrouped() {
    return !!this._group;
  }
  /**
   * Indicates if the table has a row order comparator.
   * @return {boolean} True if ordered, false otherwise.
   */
  isOrdered() {
    return !!this._order;
  }
  /**
   * Returns the internal table storage data structure.
   * @return {TableData} The backing table storage data structure.
   */
  data() {
    return this._data;
  }
  /**
   * Returns the filter bitset mask, if defined.
   * @return {BitSet} The filter bitset mask.
   */
  mask() {
    return this._mask;
  }
  /**
   * Returns the groupby specification, if defined.
   * @return {GroupBySpec} The groupby specification.
   */
  groups() {
    return this._group;
  }
  /**
   * Returns the row order comparator function, if specified.
   * @return {RowComparator} The row order comparator function.
   */
  comparator() {
    return this._order;
  }
  /**
   * The total number of rows in this table, counting both
   * filtered and unfiltered rows.
   * @return {number} The number of total rows.
   */
  totalRows() {
    return this._total;
  }
  /**
   * The number of active rows in this table. This number may be
   * less than the total rows if the table has been filtered.
   * @see Table.totalRows
   * @return {number} The number of rows.
   */
  numRows() {
    return this._nrows;
  }
  /**
   * The number of active rows in this table. This number may be
   * less than the total rows if the table has been filtered.
   * @see Table.totalRows
   * @return {number} The number of rows.
   */
  get size() {
    return this._nrows;
  }
  /**
   * The number of columns in this table.
   * @return {number} The number of columns.
   */
  numCols() {
    return this._names.length;
  }
  /**
   * Filter function invoked for each column name.
   * @callback NameFilter
   * @param {string} name The column name.
   * @param {number} index The column index.
   * @param {string[]} array The array of names.
   * @return {boolean} Returns true to retain the column name.
   */
  /**
   * The table column names, optionally filtered.
   * @param {NameFilter} [filter] An optional filter function.
   *  If unspecified, all column names are returned.
   * @return {string[]} An array of matching column names.
   */
  columnNames(t) {
    return t ? this._names.filter(t) : this._names.slice();
  }
  /**
   * The column name at the given index.
   * @param {number} index The column index.
   * @return {string} The column name,
   *  or undefined if the index is out of range.
   */
  columnName(t) {
    return this._names[t];
  }
  /**
   * The column index for the given name.
   * @param {string} name The column name.
   * @return {number} The column index, or -1 if the name is not found.
   */
  columnIndex(t) {
    return this._names.indexOf(t);
  }
  /**
   * Deprecated alias for the table array() method: use table.array()
   * instead. Get an array of values contained in a column. The resulting
   * array respects any table filter or orderby criteria.
   * @param {string} name The column name.
   * @param {ArrayConstructor|TypedArrayConstructor} [constructor=Array]
   *  The array constructor for instantiating the output array.
   * @return {DataValue[]|TypedArray} The array of column values.
   */
  columnArray(t, e) {
    return this.array(t, e);
  }
  /**
   * Get an array of values contained in a column. The resulting array
   * respects any table filter or orderby criteria.
   * @param {string} name The column name.
   * @param {ArrayConstructor|TypedArrayConstructor} [constructor=Array]
   *  The array constructor for instantiating the output array.
   * @return {DataValue[]|TypedArray} The array of column values.
   */
  array(t, e) {
    m("Not implemented");
  }
  /**
   * Returns an iterator over column values.
   * @return {Iterator<object>} An iterator over row objects.
   */
  *values(t) {
    const e = this.getter(t), r = this.numRows();
    for (let i = 0; i < r; ++i)
      yield e(i);
  }
  /**
   * Get the value for the given column and row.
   * @param {string} name The column name.
   * @param {number} [row=0] The row index, defaults to zero if not specified.
   * @return {DataValue} The data value at (column, row).
   */
  get(t, e = 0) {
    m("Not implemented");
  }
  /**
   * Returns an accessor ("getter") function for a column. The returned
   * function takes a row index as its single argument and returns the
   * corresponding column value.
   * @param {string} name The column name.
   * @return {ColumnGetter} The column getter function.
   */
  getter(t) {
    m("Not implemented");
  }
  /**
   * Returns an array of objects representing table rows.
   * @param {ObjectsOptions} [options] The options for row object generation.
   * @return {RowObject[]} An array of row objects.
   */
  objects(t) {
    m("Not implemented");
  }
  /**
   * Returns an object representing a table row.
   * @param {number} [row=0] The row index, defaults to zero if not specified.
   * @return {object} A row object with named properties for each column.
   */
  object(t) {
    m("Not implemented");
  }
  /**
   * Returns an iterator over objects representing table rows.
   * @return {Iterator<object>} An iterator over row objects.
   */
  [Symbol.iterator]() {
    m("Not implemented");
  }
  /**
   * Print the contents of this table using the console.table() method.
   * @param {PrintOptions|number} options The options for row object
   *  generation, determining which rows and columns are printed. If
   *  number-valued, specifies the row limit.
   * @return {this} The table instance.
   */
  print(t = {}) {
    _(t) ? t = { limit: t } : t.limit == null && (t.limit = 10);
    const e = this.objects({ ...t, grouped: !1 }), r = `${this[Symbol.toStringTag]}. Showing ${e.length} rows.`;
    return console.log(r), console.table(e), this;
  }
  /**
   * Returns an array of indices for all rows passing the table filter.
   * @param {boolean} [order=true] A flag indicating if the returned
   *  indices should be sorted if this table is ordered. If false, the
   *  returned indices may or may not be sorted.
   * @return {Uint32Array} An array of row indices.
   */
  indices(t = !0) {
    if (this._index)
      return this._index;
    const e = this.numRows(), r = new Uint32Array(e), i = this.isOrdered(), o = this.mask();
    let h = -1;
    if (o)
      for (let n = o.next(0); n >= 0; n = o.next(n + 1))
        r[++h] = n;
    else
      for (let n = 0; n < e; ++n)
        r[++h] = n;
    if (t && i) {
      const n = this._order, s = this._data;
      r.sort((a, u) => n(a, u, s));
    }
    return (t || !i) && (this._index = r), r;
  }
  /**
   * Returns an array of indices for each group in the table.
   * If the table is not grouped, the result is the same as
   * {@link indices}, but wrapped within an array.
   * @param {boolean} [order=true] A flag indicating if the returned
   *  indices should be sorted if this table is ordered. If false, the
   *  returned indices may or may not be sorted.
   * @return {number[][]} An array of row index arrays, one per group.
   *  The indices will be filtered if the table is filtered.
   */
  partitions(t = !0) {
    if (this._partitions)
      return this._partitions;
    if (!this.isGrouped())
      return [this.indices(t)];
    const { keys: e, size: r } = this._group, i = p(r, () => []), o = this._index, h = this.mask(), n = this.numRows();
    if (o && this.isOrdered())
      for (let s = 0, a; s < n; ++s)
        a = o[s], i[e[a]].push(a);
    else if (h)
      for (let s = h.next(0); s >= 0; s = h.next(s + 1))
        i[e[s]].push(s);
    else
      for (let s = 0; s < n; ++s)
        i[e[s]].push(s);
    if (t && !o && this.isOrdered()) {
      const s = this._order, a = this._data;
      for (let u = 0; u < r; ++u)
        i[u].sort((l, c) => s(l, c, a));
    }
    return (t || !this.isOrdered()) && (this._partitions = i), i;
  }
  /**
   * Callback function to cancel a table scan.
   * @callback ScanStop
   * @return {void}
   */
  /**
   * Callback function invoked for each row of a table scan.
   * @callback ScanVisitor
   * @param {number} [row] The table row index.
   * @param {TableData} [data] The backing table data store.
   * @param {ScanStop} [stop] Function to stop the scan early.
   *  Callees can invoke this function to prevent future calls.
   * @return {void}
   */
  /**
   * Perform a table scan, visiting each row of the table.
   * If this table is filtered, only rows passing the filter are visited.
   * @param {ScanVisitor} fn Callback invoked for each row of the table.
   * @param {boolean} [order=false] Indicates if the table should be
   *  scanned in the order determined by {@link Table#orderby}. This
   *  argument has no effect if the table is unordered.
   * @property {number} [limit=Infinity] The maximum number of objects to create.
   * @property {number} [offset=0] The row offset indicating how many initial rows to skip.
   */
  scan(t, e, r = 1 / 0, i = 0) {
    const o = this._mask, h = this._nrows, n = this._data;
    let s = i || 0;
    if (s > h)
      return;
    const a = Math.min(h, s + r), u = () => s = this._total;
    if (e && this.isOrdered() || o && this._index) {
      const l = this.indices(), c = this._data;
      for (; s < a; ++s)
        t(l[s], c, u);
    } else if (o) {
      let l = a - s + 1;
      for (s = o.nth(s); --l && s > -1; s = o.next(s + 1))
        t(s, n, u);
    } else
      for (; s < a; ++s)
        t(s, n, u);
  }
  /**
   * Extract rows with indices from start to end (end not included), where
   * start and end represent per-group ordered row numbers in the table.
   * @param {number} [start] Zero-based index at which to start extraction.
   *  A negative index indicates an offset from the end of the group.
   *  If start is undefined, slice starts from the index 0.
   * @param {number} [end] Zero-based index before which to end extraction.
   *  A negative index indicates an offset from the end of the group.
   *  If end is omitted, slice extracts through the end of the group.
   * @return {this} A new table with sliced rows.
   * @example table.slice(1, -1)
   */
  slice(t = 0, e = 1 / 0) {
    if (this.isGrouped())
      return super.slice(t, e);
    const r = [], i = this.numRows();
    return t = Math.max(0, t + (t < 0 ? i : 0)), e = Math.min(i, Math.max(0, e + (e < 0 ? i : 0))), this.scan((o) => r.push(o), !0, e - t, t), this.reify(r);
  }
  /**
   * Reduce a table, processing all rows to produce a new table.
   * To produce standard aggregate summaries, use {@link rollup}.
   * This method allows the use of custom reducer implementations,
   * for example to produce multiple rows for an aggregate.
   * @param {Reducer} reducer The reducer to apply.
   * @return {Table} A new table of reducer outputs.
   */
  reduce(t) {
    return this.__reduce(this, t);
  }
}
export {
  y as default
};
//# sourceMappingURL=cori.data.api278.js.map
