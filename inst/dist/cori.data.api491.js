/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const i = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(n) {
    if (n == null)
      return p;
    if (typeof n == "function")
      return c(n);
    if (typeof n == "object")
      return Array.isArray(n) ? f(n) : y(n);
    if (typeof n == "string")
      return l(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function f(n) {
  const e = [];
  let r = -1;
  for (; ++r < n.length; )
    e[r] = i(n[r]);
  return c(t);
  function t(...u) {
    let o = -1;
    for (; ++o < e.length; )
      if (e[o].apply(this, u))
        return !0;
    return !1;
  }
}
function y(n) {
  const e = (
    /** @type {Record<string, unknown>} */
    n
  );
  return c(r);
  function r(t) {
    const u = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      t
    );
    let o;
    for (o in n)
      if (u[o] !== e[o])
        return !1;
    return !0;
  }
}
function l(n) {
  return c(e);
  function e(r) {
    return r && r.type === n;
  }
}
function c(n) {
  return e;
  function e(r, t, u) {
    return !!(a(r) && n.call(
      this,
      r,
      typeof t == "number" ? t : void 0,
      u || void 0
    ));
  }
}
function p() {
  return !0;
}
function a(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
export {
  i as convert
};
//# sourceMappingURL=cori.data.api491.js.map
