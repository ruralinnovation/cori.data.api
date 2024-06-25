import D from "./cori.data.api262.js";
import s from "./cori.data.api60.js";
import p from "./cori.data.api71.js";
import v from "./cori.data.api385.js";
import { trackStream as F } from "./cori.data.api386.js";
import k from "./cori.data.api74.js";
import O from "./cori.data.api383.js";
import H from "./cori.data.api384.js";
import K from "./cori.data.api381.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const A = (e, r) => {
  const o = e != null;
  return (n) => setTimeout(() => r({
    lengthComputable: o,
    total: e,
    loaded: n
  }));
}, l = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", N = l && typeof ReadableStream == "function", y = l && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (r) => e.encode(r))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), z = N && (() => {
  let e = !1;
  const r = new Request(D.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !r;
})(), B = 64 * 1024, T = N && !!(() => {
  try {
    return s.isReadableStream(new Response("").body);
  } catch {
  }
})(), f = {
  stream: T && ((e) => e.body)
};
l && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
    !f[r] && (f[r] = s.isFunction(e[r]) ? (o) => o[r]() : (o, n) => {
      throw new p(`Response type '${r}' is not supported`, p.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const j = async (e) => {
  if (e == null)
    return 0;
  if (s.isBlob(e))
    return e.size;
  if (s.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (s.isArrayBufferView(e))
    return e.byteLength;
  if (s.isURLSearchParams(e) && (e = e + ""), s.isString(e))
    return (await y(e)).byteLength;
}, I = async (e, r) => {
  const o = s.toFiniteNumber(e.getContentLength());
  return o ?? j(r);
}, Y = l && (async (e) => {
  let {
    url: r,
    method: o,
    data: n,
    signal: S,
    cancelToken: x,
    timeout: b,
    onDownloadProgress: h,
    onUploadProgress: C,
    responseType: a,
    headers: d,
    withCredentials: m = "same-origin",
    fetchOptions: U
  } = H(e);
  a = a ? (a + "").toLowerCase() : "text";
  let [w, E] = S || x || b ? v([S, x], b) : [], L, c;
  const g = () => {
    !L && setTimeout(() => {
      w && w.unsubscribe();
    }), L = !0;
  };
  let q;
  try {
    if (C && z && o !== "get" && o !== "head" && (q = await I(d, n)) !== 0) {
      let i = new Request(r, {
        method: "POST",
        body: n,
        duplex: "half"
      }), u;
      s.isFormData(n) && (u = i.headers.get("content-type")) && d.setContentType(u), i.body && (n = F(i.body, B, A(
        q,
        O(C)
      ), null, y));
    }
    s.isString(m) || (m = m ? "cors" : "omit"), c = new Request(r, {
      ...U,
      signal: w,
      method: o.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: n,
      duplex: "half",
      withCredentials: m
    });
    let t = await fetch(c);
    const R = T && (a === "stream" || a === "response");
    if (T && (h || R)) {
      const i = {};
      ["status", "statusText", "headers"].forEach((P) => {
        i[P] = t[P];
      });
      const u = s.toFiniteNumber(t.headers.get("content-length"));
      t = new Response(
        F(t.body, B, h && A(
          u,
          O(h, !0)
        ), R && g, y),
        i
      );
    }
    a = a || "text";
    let _ = await f[s.findKey(f, a) || "text"](t, e);
    return !R && g(), E && E(), await new Promise((i, u) => {
      K(i, u, {
        data: _,
        headers: k.from(t.headers),
        status: t.status,
        statusText: t.statusText,
        config: e,
        request: c
      });
    });
  } catch (t) {
    throw g(), t && t.name === "TypeError" && /fetch/i.test(t.message) ? Object.assign(
      new p("Network Error", p.ERR_NETWORK, e, c),
      {
        cause: t.cause || t
      }
    ) : p.from(t, t && t.code, e, c);
  }
});
export {
  Y as default
};
//# sourceMappingURL=cori.data.api266.js.map
