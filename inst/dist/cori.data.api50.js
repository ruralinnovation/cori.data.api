import { fromMarkdown as a } from "./cori.data.api248.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(s) {
  const r = this;
  r.parser = t;
  function t(n) {
    return a(n, {
      ...r.data("settings"),
      ...s,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: r.data("micromarkExtensions") || [],
      mdastExtensions: r.data("fromMarkdownExtensions") || []
    });
  }
}
export {
  e as default
};
//# sourceMappingURL=cori.data.api50.js.map
