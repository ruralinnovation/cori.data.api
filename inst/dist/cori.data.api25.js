import { j as s } from "./cori.data.api9.js";
import { r as t } from "./cori.data.api10.js";
import { createRoot as u } from "./cori.data.api44.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const o = {
  root: null,
  useRef: t.useRef
}, f = t.createContext(o);
function p({ children: r }) {
  const [e, n] = t.useState(o);
  return t.useEffect(() => {
    e.root || (console.log("UPDATE CDAContextWrapper root!"), n({
      root: u(document.getElementById("root")),
      useRef: t.useRef
    }));
  }, []), /* @__PURE__ */ s.jsx(f.Provider, { value: e, children: r });
}
export {
  f as CDAContext,
  p as default
};
//# sourceMappingURL=cori.data.api25.js.map
