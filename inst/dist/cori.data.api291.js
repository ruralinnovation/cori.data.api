/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(a, r, t, i) {
  const l = t[a.type] || t.Default;
  if (l && l(a, r, i) === !1)
    return;
  const y = n[a.type];
  y && y(a, r, t);
}
const p = (a, r, t) => {
  e(a.argument, r, t, a);
}, m = (a, r, t) => {
  e(a.left, r, t, a), e(a.right, r, t, a);
}, E = (a, r, t) => {
  e(a.test, r, t, a), e(a.consequent, r, t, a), a.alternate && e(a.alternate, r, t, a);
}, u = (a, r, t) => {
  s(a.params, r, t, a), e(a.body, r, t, a);
}, c = (a, r, t) => {
  e(a.callee, r, t, a), s(a.arguments, r, t, a);
}, s = (a, r, t, i) => {
  a.forEach((l) => e(l, r, t, i));
}, n = {
  TemplateLiteral: (a, r, t) => {
    s(a.expressions, r, t, a), s(a.quasis, r, t, a);
  },
  MemberExpression: (a, r, t) => {
    e(a.object, r, t, a), e(a.property, r, t, a);
  },
  CallExpression: c,
  NewExpression: c,
  ArrayExpression: (a, r, t) => {
    s(a.elements, r, t, a);
  },
  AssignmentExpression: m,
  AwaitExpression: p,
  BinaryExpression: m,
  LogicalExpression: m,
  UnaryExpression: p,
  UpdateExpression: p,
  ConditionalExpression: E,
  ObjectExpression: (a, r, t) => {
    s(a.properties, r, t, a);
  },
  Property: (a, r, t) => {
    e(a.key, r, t, a), e(a.value, r, t, a);
  },
  ArrowFunctionExpression: u,
  FunctionExpression: u,
  FunctionDeclaration: u,
  VariableDeclaration: (a, r, t) => {
    s(a.declarations, r, t, a);
  },
  VariableDeclarator: (a, r, t) => {
    e(a.id, r, t, a), e(a.init, r, t, a);
  },
  SpreadElement: (a, r, t) => {
    e(a.argument, r, t, a);
  },
  BlockStatement: (a, r, t) => {
    s(a.body, r, t, a);
  },
  ExpressionStatement: (a, r, t) => {
    e(a.expression, r, t, a);
  },
  IfStatement: E,
  ForStatement: (a, r, t) => {
    e(a.init, r, t, a), e(a.test, r, t, a), e(a.update, r, t, a), e(a.body, r, t, a);
  },
  WhileStatement: (a, r, t) => {
    e(a.test, r, t, a), e(a.body, r, t, a);
  },
  DoWhileStatement: (a, r, t) => {
    e(a.body, r, t, a), e(a.test, r, t, a);
  },
  SwitchStatement: (a, r, t) => {
    e(a.discriminant, r, t, a), s(a.cases, r, t, a);
  },
  SwitchCase: (a, r, t) => {
    a.test && e(a.test, r, t, a), s(a.consequent, r, t, a);
  },
  ReturnStatement: p,
  Program: (a, r, t) => {
    e(a.body[0], r, t, a);
  }
};
export {
  e as default
};
//# sourceMappingURL=cori.data.api291.js.map
