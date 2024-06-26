import $ from "./cori.data.api260.js";
import x from "./cori.data.api308.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const t = (r, e) => {
  const n = f[r.type];
  return n ? n(r, e) : $(`Unsupported expression construct: ${r.type}`);
}, c = (r, e) => "(" + t(r.left, e) + " " + r.operator + " " + t(r.right, e) + ")", o = (r, e) => "(" + s(r.params, e) + ")=>" + t(r.body, e), m = (r, e) => t(r.callee, e) + "(" + s(r.arguments, e) + ")", s = (r, e, n = ",") => r.map((a) => t(a, e)).join(n), y = (r) => r.computed ? `[${x(r.name)}]` : `.${r.name}`, p = (r, e, n) => {
  const a = r.table || "";
  return `data${a}${y(r)}.${n}(${e.index}${a})`;
}, f = {
  Constant: (r) => r.raw,
  Column: (r, e) => p(r, e, "get"),
  Dictionary: (r, e) => p(r, e, "key"),
  Function: (r) => `fn.${r.name}`,
  Parameter: (r) => `$${y(r)}`,
  Op: (r, e) => `op(${x(r.name)},${e.op || e.index})`,
  Literal: (r) => r.raw,
  Identifier: (r) => r.name,
  TemplateLiteral: (r, e) => {
    const { quasis: n, expressions: a } = r, i = a.length;
    let l = n[0].value.raw;
    for (let u = 0; u < i; )
      l += "${" + t(a[u], e) + "}" + n[++u].value.raw;
    return "`" + l + "`";
  },
  MemberExpression: (r, e) => {
    const n = !r.computed, a = t(r.object, e), i = t(r.property, e);
    return a + (n ? "." + i : "[" + i + "]");
  },
  CallExpression: m,
  NewExpression: (r, e) => "new " + m(r, e),
  ArrayExpression: (r, e) => "[" + s(r.elements, e) + "]",
  AssignmentExpression: c,
  BinaryExpression: c,
  LogicalExpression: c,
  UnaryExpression: (r, e) => "(" + r.operator + t(r.argument, e) + ")",
  ConditionalExpression: (r, e) => "(" + t(r.test, e) + "?" + t(r.consequent, e) + ":" + t(r.alternate, e) + ")",
  ObjectExpression: (r, e) => "({" + s(r.properties, e) + "})",
  Property: (r, e) => {
    const n = t(r.key, e);
    return (r.computed ? `[${n}]` : n) + ":" + t(r.value, e);
  },
  ArrowFunctionExpression: o,
  FunctionExpression: o,
  FunctionDeclaration: o,
  ArrayPattern: (r, e) => "[" + s(r.elements, e) + "]",
  ObjectPattern: (r, e) => "{" + s(r.properties, e) + "}",
  VariableDeclaration: (r, e) => r.kind + " " + s(r.declarations, e, ","),
  VariableDeclarator: (r, e) => t(r.id, e) + "=" + t(r.init, e),
  SpreadElement: (r, e) => "..." + t(r.argument, e),
  BlockStatement: (r, e) => "{" + s(r.body, e, ";") + ";}",
  BreakStatement: () => "break",
  ExpressionStatement: (r, e) => t(r.expression, e),
  IfStatement: (r, e) => "if (" + t(r.test, e) + ")" + t(r.consequent, e) + (r.alternate ? " else " + t(r.alternate, e) : ""),
  SwitchStatement: (r, e) => "switch (" + t(r.discriminant, e) + ") {" + s(r.cases, e, "") + "}",
  SwitchCase: (r, e) => (r.test ? "case " + t(r.test, e) : "default") + ": " + s(r.consequent, e, ";") + ";",
  ReturnStatement: (r, e) => "return " + t(r.argument, e),
  Program: (r, e) => t(r.body[0], e)
};
function g(r, e = { index: "row" }) {
  return t(r, e);
}
export {
  g as default
};
//# sourceMappingURL=cori.data.api287.js.map
