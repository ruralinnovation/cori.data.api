import path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import autoprefixer from "autoprefixer";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
// import postcss from "rollup-plugin-postcss";
import postcss from "rollup-plugin-postcss-modules";
// import typescript from "@rollup/plugin-typescript";

//This plugin prevents packages listed in peerDependencies from being bundled with our component library
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// //efficiently bundles third party dependencies we've installed and use in node_modules
// import resolve from "@rollup/plugin-node-resolve";
//
// // //enables transpilation into CommonJS (CJS) format
// import commonjs from "@rollup/plugin-commonjs";

//transpiled our TypeScript code into JavaScript. This plugin will use all the settings we have set in tsconfig.json.
//We set "useTsconfigDeclarationDir": true so that it outputs the .d.ts files in the directory specified by in tsconfig.json
import typescript from "rollup-plugin-typescript2";

// // transforms our Sass into CSS. In order to get this plugin working with Sass, we've installed sass
// import postcss from "rollup-plugin-postcss";

// const packageJson = require("./package.json");

// export default {
//     input: "src/index.tsx",
//     output: [
//         {
//             file: packageJson.module,
//             format: "esm", // import '' from  '...
//             sourcemap: true,
//         },
//     ],
//     plugins: [
//         peerDepsExternal(),
//         resolve(),
//         commonjs(),
//         typescript({ useTsconfigDeclarationDir: true }),
//         postcss(),
//     ],
//     external: ["react", "react-dom"],
// }

export default [{
    external: [
        "arquero", "axios", "aws-amplify",
        "d3", "d3-textwrap", "html-to-image",
        "fetchAuthSession", "getCurrentUser",
        "react", "react-dom", "react-map-gl" ],
    input: "./lib/cori.data.api.ts",
    output: [
        {
            banner: `/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */`,
            // dir: "inst/dist",
            dir: path.resolve('./inst/dist'),
            // entryFileNames: "cori.data.api.js",
            format: "es",
            exports: "named",
            preserveModules: true,
            sourcemap: true,
        }
    ],
    plugins: [
        external(),
        json(),
        peerDepsExternal(),
        // nodeResolve({ extensions: [".js", ".jsx"] }),
        nodeResolve({
            "preferBuiltins": false
        }),
        commonjs(),
        postcss({
            // extract: "styles.css",
            // modules: false
            extract: true,  // extracts to `${basename(dest)}.css`
            plugins: [autoprefixer()],
            writeDefinitions: true,
            // modules: { ... }
        }),
        typescript({
            tsconfig: "./tsconfig.json",
            // useTsconfigDeclarationDir: true
        }),
    ]
// }, {
//     input: "./lib/cori.data.api.ts",
//     output: [
//         {
//             banner: `/*
//  * CORI Data API component library
//  * {@link https://github.com/ruralinnovation/cori.data.api}
//  * @copyright Rural Innovation Strategies, Inc.
//  * @license ISC
//  */`,
//             // dir: "inst/dist",
//             dir: path.resolve('./inst/dist'),
//             // entryFileNames: "cori.data.api.js",
//             format: "es",
//             exports: "named",
//             preserveModules: true,
//             sourcemap: false,
//         }
//     ],
//     plugins: [
//         dts({
//             include: [ "lib" ],
//             outDir: path.resolve('./inst/dist'),
//
//         })
//     ]
}];

