import { isUrl as i } from "./cori.data.api281.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function R(o) {
  if (typeof o == "string")
    o = new URL(o);
  else if (!i(o)) {
    const e = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + o + "`"
    );
    throw e.code = "ERR_INVALID_ARG_TYPE", e;
  }
  if (o.protocol !== "file:") {
    const e = new TypeError("The URL must be of scheme file");
    throw e.code = "ERR_INVALID_URL_SCHEME", e;
  }
  return c(o);
}
function c(o) {
  if (o.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const e = o.pathname;
  let t = -1;
  for (; ++t < e.length; )
    if (e.codePointAt(t) === 37 && e.codePointAt(t + 1) === 50) {
      const r = e.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const n = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw n.code = "ERR_INVALID_FILE_URL_PATH", n;
      }
    }
  return decodeURIComponent(e);
}
export {
  i as isUrl,
  R as urlToPath
};
//# sourceMappingURL=cori.data.api280.js.map
