import { valueToString as i } from "./cori.data.api559.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function a(n) {
  if (!n || n.length <= 0)
    return function(f) {
      return !0;
    };
  let e = "";
  const r = n.filter((t) => t === t);
  return r.length > 0 && (e = `
    switch (x) {${r.map((t) => `
        case ${o(t)}:`).join("")}
            return false;
    }`), n.length !== r.length && (e = `if (x !== x) return false;
${e}`), new Function("x", `${e}
return true;`);
}
function o(n) {
  return typeof n != "bigint" ? i(n) : `${i(n)}n`;
}
export {
  a as createIsValidFunction
};
//# sourceMappingURL=cori.data.api504.js.map
