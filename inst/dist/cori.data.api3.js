import { j as o } from "./cori.data.api4.js";
import { r as a } from "./cori.data.api5.js";
import i from "./cori.data.api6.js";
/* empty css               */
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var n = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const t = `${n.VITE_CORI_DATA_API}`, e = i.create({
  baseURL: t,
  headers: {
    "Content-Type": "application/json"
  }
}), s = a.createContext({
  apiClient: e,
  // authenticated: false,
  // authenticated_user: null,
  // autoSignOut: null,
  baseURL: t,
  // token: null,
  data: {}
});
function f(r) {
  return /* @__PURE__ */ o.jsx(s.Provider, { value: {
    apiClient: e,
    // authenticated: false,
    // authenticated_user: null,
    // autoSignOut: null,
    baseURL: t,
    // token: null,
    data: {}
  }, children: r.children });
}
export {
  s as ApiContext,
  f as default
};
//# sourceMappingURL=cori.data.api3.js.map
