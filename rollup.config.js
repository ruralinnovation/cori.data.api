import path from "path";
import autoprefixer from "autoprefixer";
import external from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss-modules";

//This plugin prevents packages listed in peerDependencies from being bundled with our component library
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// //efficiently bundles third party dependencies we've installed and use in node_modules
import nodeResolve from "@rollup/plugin-node-resolve";
//
// // //enables transpilation into CommonJS (CJS) format
import commonjs from "@rollup/plugin-commonjs";

//transpiled our TypeScript code into JavaScript. This plugin will use all the settings we have set in tsconfig.json.
//We set "useTsconfigDeclarationDir": true so that it outputs the .d.ts files in the directory specified by in tsconfig.json
import typescript from "rollup-plugin-typescript2";


export default [{
    external: [ "arquero", "axios", "aws-amplify", "d3", "d3-textwrap", "html-to-image", "react", "react-dom", "react-map-gl" ],
    input: "./lib/cori.data.api.ts",
    output: [
        {
            banner: `/*
 * Frontend UI component library for the CORI Data API 
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
        peerDepsExternal(),
        commonjs(),
        json(),
        postcss({
            // extract: "styles.css",
            // modules: false
            extract: true,  // extracts to `${basename(dest)}.css`
            plugins: [ autoprefixer() ],
            writeDefinitions: true,
            // modules: { ... }
        }),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
    ]
}];

