import path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import autoprefixer from "autoprefixer";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
// import postcss from "rollup-plugin-postcss";
import postcss from "rollup-plugin-postcss-modules";
import typescript from "@rollup/plugin-typescript";

export default [{
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
        // nodeResolve({ extensions: [".js", ".jsx"] }),
        nodeResolve(),
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
            tsconfig: "./tsconfig.json"
        })
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
