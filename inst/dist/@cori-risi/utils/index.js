/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import * as d3 from 'd3';
import 'html-to-image';

// TODO: Fix problems with "arquero" import...
// [!] RollupError: node_modules/arquero/package.json (2:8): Expected ';', '}' or <eof> (Note that you need @rollup/plugin-json to import JSON files)
// node_modules/arquero/package.json (2:8)
// 1: {
// 2:   "name": "arquero",
//            ^
// 3:   "version": "5.4.1",
// 4:   "description": "Query processing and transformation of array-backed data tables.",
// RollupError: Expected ';', '}' or <eof>
//     at Object.getRollupError (/Users/johnhall/Documents/CORI/cdk/amplify/cori.data.api/node_modules/rollup/dist/shared/parseAst.js:282:41)
//     at ParseError.initialise (/Users/johnhall/Documents/CORI/cdk/amplify/cori.data.api/node_modules/rollup/dist/shared/rollup.js:12774:40)
//     at convertNode (/Users/johnhall/Documents/CORI/cdk/amplify/cori.data.api/node_modules/rollup/dist/shared/rollup.js:14524:10)
//     at convertProgram (/Users/johnhall/Documents/CORI/cdk/amplify/cori.data.api/node_modules/rollup/dist/shared/rollup.js:13841:12)
//     at Module.setSource (/Users/johnhall/Documents/CORI/cdk/amplify/cori.data.api/node_modules/rollup/dist/shared/rollup.js:15681:24)
//     at async ModuleLoader.addModuleSource (/Users/johnhall/Documents/CORI/cdk/amplify/cori.data.api/node_modules/rollup/dist/shared/rollup.js:19983:13)
//   [cause] RollupError: Expected ';', '}' or <eof>
// import * as aq from "arquero";
d3.format(".1%");
function autoSignOut(signOut) {
    signOut();
    window.alert("Please refresh this session by clicking the browser's reload button!");
    // (window as any).location = window.location.protocol + "//" + window.location.host + window.location.pathname;
}

export { autoSignOut };
//# sourceMappingURL=index.js.map
