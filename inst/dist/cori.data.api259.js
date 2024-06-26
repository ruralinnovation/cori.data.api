import h from "./cori.data.api280.js";
import n from "./cori.data.api281.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
class l {
  /**
   * Instantiate a new Transformable instance.
   * @param {Params} [params] The parameter values.
   */
  constructor(t) {
    t && (this._params = t);
  }
  /**
   * Get or set table expression parameter values.
   * If called with no arguments, returns the current parameter values
   * as an object. Otherwise, adds the provided parameters to this
   * table's parameter set and returns the table. Any prior parameters
   * with names matching the input parameters are overridden.
   * @param {Params} [values] The parameter values.
   * @return {this|Params} The current parameters values (if called with
   *  no arguments) or this table.
   */
  params(t) {
    return arguments.length ? (t && (this._params = { ...this._params, ...t }), this) : this._params;
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
    return this.__reify(this, t);
  }
  // -- Transformation Verbs ------------------------------------------------
  /**
   * Count the number of values in a group. This method is a shorthand
   * for {@link Transformable#rollup} with a count aggregate function.
   * @param {CountOptions} [options] Options for the count.
   * @return {this} A new table with groupby and count columns.
   * @example table.groupby('colA').count()
   * @example table.groupby('colA').count({ as: 'num' })
   */
  count(t) {
    return this.__count(this, t);
  }
  /**
   * Derive new column values based on the provided expressions. By default,
   * new columns are added after (higher indices than) existing columns. Use
   * the before or after options to place new columns elsewhere.
   * @param {ExprObject} values Object of name-value pairs defining the
   *  columns to derive. The input object should have output column
   *  names for keys and table expressions for values.
   * @param {DeriveOptions} [options] Options for dropping or relocating
   *  derived columns. Use either a before or after property to indicate
   *  where to place derived columns. Specifying both before and after is an
   *  error. Unlike the relocate verb, this option affects only new columns;
   *  updated columns with existing names are excluded from relocation.
   * @return {this} A new table with derived columns added.
   * @example table.derive({ sumXY: d => d.x + d.y })
   * @example table.derive({ z: d => d.x * d.y }, { before: 'x' })
   */
  derive(t, r) {
    return this.__derive(this, t, r);
  }
  /**
   * Filter a table to a subset of rows based on the input criteria.
   * The resulting table provides a filtered view over the original data; no
   * data copy is made. To create a table that copies only filtered data to
   * new data structures, call {@link Transformable#reify} on the output table.
   * @param {TableExpr} criteria Filter criteria as a table expression.
   *  Both aggregate and window functions are permitted, taking into account
   *  {@link Transformable#groupby} or {@link Transformable#orderby} settings.
   * @return {this} A new table with filtered rows.
   * @example table.filter(d => abs(d.value) < 5)
   */
  filter(t) {
    return this.__filter(this, t);
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
  slice(t, r) {
    return this.filter(n(t, r)).reify();
  }
  /**
   * Group table rows based on a set of column values.
   * Subsequent operations that are sensitive to grouping (such as
   * aggregate functions) will operate over the grouped rows.
   * To undo grouping, use {@link Transformable#ungroup}.
   * @param  {...ExprList} keys Key column values to group by.
   *  The keys may be specified using column name strings, column index
   *  numbers, value objects with output column names for keys and table
   *  expressions for values, or selection helper functions.
   * @return {this} A new table with grouped rows.
   * @example table.groupby('colA', 'colB')
   * @example table.groupby({ key: d => d.colA + d.colB })
   */
  groupby(...t) {
    return this.__groupby(this, t.flat());
  }
  /**
   * Order table rows based on a set of column values.
   * Subsequent operations sensitive to ordering (such as window functions)
   * will operate over sorted values.
   * The resulting table provides an view over the original data, without
   * any copying. To create a table with sorted data copied to new data
   * strucures, call {@link Transformable#reify} on the result of this method.
   * To undo ordering, use {@link Transformable#unorder}.
   * @param  {...OrderKeys} keys Key values to sort by, in precedence order.
   *  By default, sorting is done in ascending order.
   *  To sort in descending order, wrap values using {@link desc}.
   *  If a string, order by the column with that name.
   *  If a number, order by the column with that index.
   *  If a function, must be a valid table expression; aggregate functions
   *  are permitted, but window functions are not.
   *  If an object, object values must be valid values parameters
   *  with output column names for keys and table expressions
   *  for values (the output names will be ignored).
   *  If an array, array values must be valid key parameters.
   * @return {this} A new ordered table.
   * @example table.orderby('a', desc('b'))
   * @example table.orderby({ a: 'a', b: desc('b') )})
   * @example table.orderby(desc(d => d.a))
   */
  orderby(...t) {
    return this.__orderby(this, t.flat());
  }
  /**
   * Relocate a subset of columns to change their positions, also
   * potentially renaming them.
   * @param {Selection} columns An ordered selection of columns to relocate.
   *  The input may consist of column name strings, column integer indices,
   *  rename objects with current column names as keys and new column names
   *  as values, or functions that take a table as input and returns a valid
   *  selection parameter (typically the output of selection helper functions
   *  such as {@link all}, {@link not}, or {@link range}).
   * @param {RelocateOptions} options Options for relocating. Must include
   *  either the before or after property to indicate where to place the
   *  relocated columns. Specifying both before and after is an error.
   * @return {this} A new table with relocated columns.
   * @example table.relocate(['colY', 'colZ'], { after: 'colX' })
   * @example table.relocate(not('colB', 'colC'), { before: 'colA' })
   * @example table.relocate({ colA: 'newA', colB: 'newB' }, { after: 'colC' })
   */
  relocate(t, r) {
    return this.__relocate(this, h(t), r);
  }
  /**
   * Rename one or more columns, preserving column order.
   * @param {...Select} columns One or more rename objects with current
   *  column names as keys and new column names as values.
   * @return {this} A new table with renamed columns.
   * @example table.rename({ oldName: 'newName' })
   * @example table.rename({ a: 'a2', b: 'b2' })
   */
  rename(...t) {
    return this.__rename(this, t.flat());
  }
  /**
   * Rollup a table to produce an aggregate summary.
   * Often used in conjunction with {@link Transformable#groupby}.
   * To produce counts only, {@link Transformable#count} is a shortcut.
   * @param {ExprObject} [values] Object of name-value pairs defining aggregate
   *  output columns. The input object should have output column names for
   *  keys and table expressions for values. The expressions must be valid
   *  aggregate expressions: window functions are not allowed and column
   *  references must be arguments to aggregate functions.
   * @return {this} A new table of aggregate summary values.
   * @example table.groupby('colA').rollup({ mean: d => mean(d.colB) })
   * @example table.groupby('colA').rollup({ mean: op.median('colB') })
   */
  rollup(t) {
    return this.__rollup(this, t);
  }
  /**
   * Generate a table from a random sample of rows.
   * If the table is grouped, performs a stratified sample by
   * sampling from each group separately.
   * @param {number|TableExpr} size The number of samples to draw per group.
   *  If number-valued, the same sample size is used for each group.
   *  If function-valued, the input should be an aggregate table
   *  expression compatible with {@link Transformable#rollup}.
   * @param {SampleOptions} [options] Options for sampling.
   * @return {this} A new table with sampled rows.
   * @example table.sample(50)
   * @example table.sample(100, { replace: true })
   * @example table.groupby('colA').sample(() => op.floor(0.5 * op.count()))
   */
  sample(t, r) {
    return this.__sample(this, t, r);
  }
  /**
   * Select a subset of columns into a new table, potentially renaming them.
   * @param {...Select} columns An ordered selection of columns.
   *  The input may consist of column name strings, column integer indices,
   *  rename objects with current column names as keys and new column names
   *  as values, or functions that take a table as input and returns a valid
   *  selection parameter (typically the output of selection helper functions
   *  such as {@link all}, {@link not}, or {@link range}).
   * @return {this} A new table of selected columns.
   * @example table.select('colA', 'colB')
   * @example table.select(not('colB', 'colC'))
   * @example table.select({ colA: 'newA', colB: 'newB' })
   */
  select(...t) {
    return this.__select(this, t.flat());
  }
  /**
   * Ungroup a table, removing any grouping criteria.
   * Undoes the effects of {@link Transformable#groupby}.
   * @return {this} A new ungrouped table, or this table if not grouped.
   * @example table.ungroup()
   */
  ungroup() {
    return this.__ungroup(this);
  }
  /**
   * Unorder a table, removing any sorting criteria.
   * Undoes the effects of {@link Transformable#orderby}.
   * @return {this} A new unordered table, or this table if not ordered.
   * @example table.unorder()
   */
  unorder() {
    return this.__unorder(this);
  }
  // -- Cleaning Verbs ------------------------------------------------------
  /**
   * De-duplicate table rows by removing repeated row values.
   * @param {...ExprList} keys Key columns to check for duplicates.
   *  Two rows are considered duplicates if they have matching values for
   *  all keys. If keys are unspecified, all columns are used.
   *  The keys may be specified using column name strings, column index
   *  numbers, value objects with output column names for keys and table
   *  expressions for values, or selection helper functions.
   * @return {this} A new de-duplicated table.
   * @example table.dedupe()
   * @example table.dedupe('a', 'b')
   * @example table.dedupe({ abs: d => op.abs(d.a) })
   */
  dedupe(...t) {
    return this.__dedupe(this, t.flat());
  }
  /**
   * Impute missing values or rows. Accepts a set of column-expression pairs
   * and evaluates the expressions to replace any missing (null, undefined,
   * or NaN) values in the original column.
   * If the expand option is specified, imputes new rows for missing
   * combinations of values. All combinations of key values (a full cross
   * product) are considered for each level of grouping (specified by
   * {@link Transformable#groupby}). New rows will be added for any combination
   * of key and groupby values not already contained in the table. For all
   * non-key and non-group columns the new rows are populated with imputation
   * values (first argument) if specified, otherwise undefined.
   * If the expand option is specified, any filter or orderby settings are
   * removed from the output table, but groupby settings persist.
   * @param {ExprObject} values Object of name-value pairs for the column values
   *  to impute. The input object should have existing column names for keys
   *  and table expressions for values. The expressions will be evaluated to
   *  determine replacements for any missing values.
   * @param {ImputeOptions} [options] Imputation options. The expand
   *  property specifies a set of column values to consider for imputing
   *  missing rows. All combinations of expanded values are considered, and
   *  new rows are added for each combination that does not appear in the
   *  input table.
   * @return {this} A new table with imputed values and/or rows.
   * @example table.impute({ v: () => 0 })
   * @example table.impute({ v: d => op.mean(d.v) })
   * @example table.impute({ v: () => 0 }, { expand: ['x', 'y'] })
   */
  impute(t, r) {
    return this.__impute(this, t, r);
  }
  // -- Reshaping Verbs -----------------------------------------------------
  /**
   * Fold one or more columns into two key-value pair columns.
   * The fold transform is an inverse of the {@link Transformable#pivot} transform.
   * The resulting table has two new columns, one containing the column
   * names (named "key") and the other the column values (named "value").
   * The number of output rows equals the original row count multiplied
   * by the number of folded columns.
   * @param {ExprList} values The columns to fold.
   *  The columns may be specified using column name strings, column index
   *  numbers, value objects with output column names for keys and table
   *  expressions for values, or selection helper functions.
   * @param {FoldOptions} [options] Options for folding.
   * @return {this} A new folded table.
   * @example table.fold('colA')
   * @example table.fold(['colA', 'colB'])
   * @example table.fold(range(5, 8))
   */
  fold(t, r) {
    return this.__fold(this, t, r);
  }
  /**
   * Pivot columns into a cross-tabulation.
   * The pivot transform is an inverse of the {@link Transformable#fold} transform.
   * The resulting table has new columns for each unique combination
   * of the provided *keys*, populated with the provided *values*.
   * The provided *values* must be aggregates, as a single set of keys may
   * include more than one row. If string-valued, the *any* aggregate is used.
   * If only one *values* column is defined, the new pivoted columns will
   * be named using key values directly. Otherwise, input value column names
   * will be included as a component of the output column names.
   * @param {ExprList} keys Key values to map to new column names.
   *  The keys may be specified using column name strings, column index
   *  numbers, value objects with output column names for keys and table
   *  expressions for values, or selection helper functions.
   * @param {ExprList} values Output values for pivoted columns.
   *  Column references will be wrapped in an *any* aggregate.
   *  If object-valued, the input object should have output value
   *  names for keys and aggregate table expressions for values.
   * @param {PivotOptions} [options] Options for pivoting.
   * @return {this} A new pivoted table.
   * @example table.pivot('key', 'value')
   * @example table.pivot(['keyA', 'keyB'], ['valueA', 'valueB'])
   * @example table.pivot({ key: d => d.key }, { value: d => sum(d.value) })
   */
  pivot(t, r, i) {
    return this.__pivot(this, t, r, i);
  }
  /**
   * Spread array elements into a set of new columns.
   * Output columns are named based on the value key and array index.
   * @param {ExprList} values The column values to spread.
   *  The values may be specified using column name strings, column index
   *  numbers, value objects with output column names for keys and table
   *  expressions for values, or selection helper functions.
   * @param {SpreadOptions} [options] Options for spreading.
   * @return {this} A new table with the spread columns added.
   * @example table.spread({ a: split(d.text, '') })
   * @example table.spread('arrayCol', { limit: 100 })
   */
  spread(t, r) {
    return this.__spread(this, t, r);
  }
  /**
   * Unroll one or more array-valued columns into new rows.
   * If more than one array value is used, the number of new rows
   * is the smaller of the limit and the largest length.
   * Values for all other columns are copied over.
   * @param {ExprList} values The column values to unroll.
   *  The values may be specified using column name strings, column index
   *  numbers, value objects with output column names for keys and table
   *  expressions for values, or selection helper functions.
   * @param {UnrollOptions} [options] Options for unrolling.
   * @return {this} A new unrolled table.
   * @example table.unroll('colA', { limit: 1000 })
   */
  unroll(t, r) {
    return this.__unroll(this, t, r);
  }
  // -- Joins ---------------------------------------------------------------
  /**
   * Lookup values from a secondary table and add them as new columns.
   * A lookup occurs upon matching key values for rows in both tables.
   * If the secondary table has multiple rows with the same key, only
   * the last observed instance will be considered in the lookup.
   * Lookup is similar to {@link Transformable#join_left}, but with a simpler
   * syntax and the added constraint of allowing at most one match only.
   * @param {TableRef} other The secondary table to look up values from.
   * @param {JoinKeys} [on] Lookup keys (column name strings or table
   *  expressions) for this table and the secondary table, respectively.
   * @param {...ExprList} values The column values to add from the
   *  secondary table. Can be column name strings or objects with column
   *  names as keys and table expressions as values.
   * @return {this} A new table with lookup values added.
   * @example table.lookup(other, ['key1', 'key2'], 'value1', 'value2')
   */
  lookup(t, r, ...i) {
    return this.__lookup(this, t, r, i.flat());
  }
  /**
   * Join two tables, extending the columns of one table with
   * values from the other table. The current table is considered
   * the "left" table in the join, and the new table input is
   * considered the "right" table in the join. By default an inner
   * join is performed, removing all rows that do not match the
   * join criteria. To perform left, right, or full outer joins, use
   * the {@link Transformable#join_left}, {@link Transformable#join_right}, or
   * {@link Transformable#join_full} methods, or provide an options argument.
   * @param {TableRef} other The other (right) table to join with.
   * @param {JoinPredicate} [on] The join criteria for matching table rows.
   *  If unspecified, the values of all columns with matching names
   *  are compared.
   *  If array-valued, a two-element array should be provided, containing
   *  the columns to compare for the left and right tables, respectively.
   *  If a one-element array or a string value is provided, the same
   *  column names will be drawn from both tables.
   *  If function-valued, should be a two-table table expression that
   *  returns a boolean value. When providing a custom predicate, note that
   *  join key values can be arrays or objects, and that normal join
   *  semantics do not consider null or undefined values to be equal (that is,
   *  null !== null). Use the op.equal function to handle these cases.
   * @param {JoinValues} [values] The columns to include in the join output.
   *  If unspecified, all columns from both tables are included; paired
   *  join keys sharing the same column name are included only once.
   *  If array-valued, a two element array should be provided, containing
   *  the columns to include for the left and right tables, respectively.
   *  Array input may consist of column name strings, objects with output
   *  names as keys and single-table table expressions as values, or the
   *  selection helper functions {@link all}, {@link not}, or {@link range}.
   *  If object-valued, specifies the key-value pairs for each output,
   *  defined using two-table table expressions.
   * @param {JoinOptions} [options] Options for the join.
   * @return {this} A new joined table.
   * @example table.join(other, ['keyL', 'keyR'])
   * @example table.join(other, (a, b) => equal(a.keyL, b.keyR))
   */
  join(t, r, i, s) {
    return this.__join(this, t, r, i, s);
  }
  /**
   * Perform a left outer join on two tables. Rows in the left table
   * that do not match a row in the right table will be preserved.
   * This is a convenience method with fixed options for {@link Transformable#join}.
   * @param {TableRef} other The other (right) table to join with.
   * @param {JoinPredicate} [on] The join criteria for matching table rows.
   *  If unspecified, the values of all columns with matching names
   *  are compared.
   *  If array-valued, a two-element array should be provided, containing
   *  the columns to compare for the left and right tables, respectively.
   *  If a one-element array or a string value is provided, the same
   *  column names will be drawn from both tables.
   *  If function-valued, should be a two-table table expression that
   *  returns a boolean value. When providing a custom predicate, note that
   *  join key values can be arrays or objects, and that normal join
   *  semantics do not consider null or undefined values to be equal (that is,
   *  null !== null). Use the op.equal function to handle these cases.
   * @param {JoinValues} [values] The columns to include in the join output.
   *  If unspecified, all columns from both tables are included; paired
   *  join keys sharing the same column name are included only once.
   *  If array-valued, a two element array should be provided, containing
   *  the columns to include for the left and right tables, respectively.
   *  Array input may consist of column name strings, objects with output
   *  names as keys and single-table table expressions as values, or the
   *  selection helper functions {@link all}, {@link not}, or {@link range}.
   *  If object-valued, specifies the key-value pairs for each output,
   *  defined using two-table table expressions.
   * @param {JoinOptions} [options] Options for the join. With this method,
   *  any options will be overridden with {left: true, right: false}.
   * @return {this} A new joined table.
   * @example table.join_left(other, ['keyL', 'keyR'])
   * @example table.join_left(other, (a, b) => equal(a.keyL, b.keyR))
   */
  join_left(t, r, i, s) {
    const e = { ...s, left: !0, right: !1 };
    return this.__join(this, t, r, i, e);
  }
  /**
   * Perform a right outer join on two tables. Rows in the right table
   * that do not match a row in the left table will be preserved.
   * This is a convenience method with fixed options for {@link Transformable#join}.
   * @param {TableRef} other The other (right) table to join with.
   * @param {JoinPredicate} [on] The join criteria for matching table rows.
   *  If unspecified, the values of all columns with matching names
   *  are compared.
   *  If array-valued, a two-element array should be provided, containing
   *  the columns to compare for the left and right tables, respectively.
   *  If a one-element array or a string value is provided, the same
   *  column names will be drawn from both tables.
   *  If function-valued, should be a two-table table expression that
   *  returns a boolean value. When providing a custom predicate, note that
   *  join key values can be arrays or objects, and that normal join
   *  semantics do not consider null or undefined values to be equal (that is,
   *  null !== null). Use the op.equal function to handle these cases.
   * @param {JoinValues} [values] The columns to include in the join output.
   *  If unspecified, all columns from both tables are included; paired
   *  join keys sharing the same column name are included only once.
   *  If array-valued, a two element array should be provided, containing
   *  the columns to include for the left and right tables, respectively.
   *  Array input may consist of column name strings, objects with output
   *  names as keys and single-table table expressions as values, or the
   *  selection helper functions {@link all}, {@link not}, or {@link range}.
   *  If object-valued, specifies the key-value pairs for each output,
   *  defined using two-table table expressions.
   * @param {JoinOptions} [options] Options for the join. With this method,
   *  any options will be overridden with {left: false, right: true}.
   * @return {this} A new joined table.
   * @example table.join_right(other, ['keyL', 'keyR'])
   * @example table.join_right(other, (a, b) => equal(a.keyL, b.keyR))
   */
  join_right(t, r, i, s) {
    const e = { ...s, left: !1, right: !0 };
    return this.__join(this, t, r, i, e);
  }
  /**
   * Perform a full outer join on two tables. Rows in either the left or
   * right table that do not match a row in the other will be preserved.
   * This is a convenience method with fixed options for {@link Transformable#join}.
   * @param {TableRef} other The other (right) table to join with.
   * @param {JoinPredicate} [on] The join criteria for matching table rows.
   *  If unspecified, the values of all columns with matching names
   *  are compared.
   *  If array-valued, a two-element array should be provided, containing
   *  the columns to compare for the left and right tables, respectively.
   *  If a one-element array or a string value is provided, the same
   *  column names will be drawn from both tables.
   *  If function-valued, should be a two-table table expression that
   *  returns a boolean value. When providing a custom predicate, note that
   *  join key values can be arrays or objects, and that normal join
   *  semantics do not consider null or undefined values to be equal (that is,
   *  null !== null). Use the op.equal function to handle these cases.
   * @param {JoinValues} [values] The columns to include in the join output.
   *  If unspecified, all columns from both tables are included; paired
   *  join keys sharing the same column name are included only once.
   *  If array-valued, a two element array should be provided, containing
   *  the columns to include for the left and right tables, respectively.
   *  Array input may consist of column name strings, objects with output
   *  names as keys and single-table table expressions as values, or the
   *  selection helper functions {@link all}, {@link not}, or {@link range}.
   *  If object-valued, specifies the key-value pairs for each output,
   *  defined using two-table table expressions.
   * @param {JoinOptions} [options] Options for the join. With this method,
   *  any options will be overridden with {left: true, right: true}.
   * @return {this} A new joined table.
   * @example table.join_full(other, ['keyL', 'keyR'])
   * @example table.join_full(other, (a, b) => equal(a.keyL, b.keyR))
   */
  join_full(t, r, i, s) {
    const e = { ...s, left: !0, right: !0 };
    return this.__join(this, t, r, i, e);
  }
  /**
   * Produce the Cartesian cross product of two tables. The output table
   * has one row for every pair of input table rows. Beware that outputs
   * may be quite large, as the number of output rows is the product of
   * the input row counts.
   * This is a convenience method for {@link Transformable#join} in which the
   * join criteria is always true.
   * @param {TableRef} other The other (right) table to join with.
   * @param {JoinValues} [values] The columns to include in the output.
   *  If unspecified, all columns from both tables are included.
   *  If array-valued, a two element array should be provided, containing
   *  the columns to include for the left and right tables, respectively.
   *  Array input may consist of column name strings, objects with output
   *  names as keys and single-table table expressions as values, or the
   *  selection helper functions {@link all}, {@link not}, or {@link range}.
   *  If object-valued, specifies the key-value pairs for each output,
   *  defined using two-table table expressions.
   * @param {JoinOptions} [options] Options for the join.
   * @return {this} A new joined table.
   * @example table.cross(other)
   * @example table.cross(other, [['leftKey', 'leftVal'], ['rightVal']])
   */
  cross(t, r, i) {
    return this.__cross(this, t, r, i);
  }
  /**
   * Perform a semi-join, filtering the left table to only rows that
   * match a row in the right table.
   * @param {TableRef} other The other (right) table to join with.
   * @param {JoinPredicate} [on] The join criteria for matching table rows.
   *  If unspecified, the values of all columns with matching names
   *  are compared.
   *  If array-valued, a two-element array should be provided, containing
   *  the columns to compare for the left and right tables, respectively.
   *  If a one-element array or a string value is provided, the same
   *  column names will be drawn from both tables.
   *  If function-valued, should be a two-table table expression that
   *  returns a boolean value. When providing a custom predicate, note that
   *  join key values can be arrays or objects, and that normal join
   *  semantics do not consider null or undefined values to be equal (that is,
   *  null !== null). Use the op.equal function to handle these cases.
   * @return {this} A new filtered table.
   * @example table.semijoin(other)
   * @example table.semijoin(other, ['keyL', 'keyR'])
   * @example table.semijoin(other, (a, b) => equal(a.keyL, b.keyR))
   */
  semijoin(t, r) {
    return this.__semijoin(this, t, r);
  }
  /**
   * Perform an anti-join, filtering the left table to only rows that
   * do *not* match a row in the right table.
   * @param {TableRef} other The other (right) table to join with.
   * @param {JoinPredicate} [on] The join criteria for matching table rows.
   *  If unspecified, the values of all columns with matching names
   *  are compared.
   *  If array-valued, a two-element array should be provided, containing
   *  the columns to compare for the left and right tables, respectively.
   *  If a one-element array or a string value is provided, the same
   *  column names will be drawn from both tables.
   *  If function-valued, should be a two-table table expression that
   *  returns a boolean value. When providing a custom predicate, note that
   *  join key values can be arrays or objects, and that normal join
   *  semantics do not consider null or undefined values to be equal (that is,
   *  null !== null). Use the op.equal function to handle these cases.
   * @return {this} A new filtered table.
   * @example table.antijoin(other)
   * @example table.antijoin(other, ['keyL', 'keyR'])
   * @example table.antijoin(other, (a, b) => equal(a.keyL, b.keyR))
   */
  antijoin(t, r) {
    return this.__antijoin(this, t, r);
  }
  // -- Set Operations ------------------------------------------------------
  /**
   * Concatenate multiple tables into a single table, preserving all rows.
   * This transformation mirrors the UNION_ALL operation in SQL.
   * Only named columns in this table are included in the output.
   * @see Transformable#union
   * @param  {...TableRef} tables A list of tables to concatenate.
   * @return {this} A new concatenated table.
   * @example table.concat(other)
   * @example table.concat(other1, other2)
   * @example table.concat([other1, other2])
   */
  concat(...t) {
    return this.__concat(this, t.flat());
  }
  /**
   * Union multiple tables into a single table, deduplicating all rows.
   * This transformation mirrors the UNION operation in SQL. It is
   * similar to {@link Transformable#concat} but suppresses duplicate rows with
   * values identical to another row.
   * Only named columns in this table are included in the output.
   * @see Transformable#concat
   * @param  {...TableRef} tables A list of tables to union.
   * @return {this} A new unioned table.
   * @example table.union(other)
   * @example table.union(other1, other2)
   * @example table.union([other1, other2])
   */
  union(...t) {
    return this.__union(this, t.flat());
  }
  /**
   * Intersect multiple tables, keeping only rows whose with identical
   * values for all columns in all tables, and deduplicates the rows.
   * This transformation is similar to a series of {@link Transformable#semijoin}
   * calls, but additionally suppresses duplicate rows.
   * @see Transformable#semijoin
   * @param  {...TableRef} tables A list of tables to intersect.
   * @return {this} A new filtered table.
   * @example table.intersect(other)
   * @example table.intersect(other1, other2)
   * @example table.intersect([other1, other2])
   */
  intersect(...t) {
    return this.__intersect(this, t.flat());
  }
  /**
   * Compute the set difference with multiple tables, keeping only rows in
   * this table that whose values do not occur in the other tables.
   * This transformation is similar to a series of {@link Transformable#antijoin}
   * calls, but additionally suppresses duplicate rows.
   * @see Transformable#antijoin
   * @param  {...TableRef} tables A list of tables to difference.
   * @return {this} A new filtered table.
   * @example table.except(other)
   * @example table.except(other1, other2)
   * @example table.except([other1, other2])
   */
  except(...t) {
    return this.__except(this, t.flat());
  }
}
export {
  l as default
};
//# sourceMappingURL=cori.data.api259.js.map
