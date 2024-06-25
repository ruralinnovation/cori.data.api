import { j as n } from "./cori.data.api9.js";
import { r as o } from "./cori.data.api10.js";
import { createRoot as s } from "./cori.data.api46.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const a = o.createContext(null);
function l({ children: e }) {
  const [t, r] = o.useState(null);
  return o.useEffect(() => {
    t || (console.log("UPDATE CDAContextWrapper root!"), r(s(document.getElementById("root"))));
  }, [t]), /* @__PURE__ */ n.jsx(a.Provider, { value: t, children: e });
}
export {
  l as default
};
//# sourceMappingURL=cori.data.api25.js.map
