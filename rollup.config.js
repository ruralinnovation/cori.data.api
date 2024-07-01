// import { resolve as path_resolve } from "path";
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-import-css";
import { dts } from "rollup-plugin-dts";
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

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
            // entryFileNames: 'cori.data.api.js',
            format: "es",
            exports: 'named',
            preserveModules: true,
            sourcemap: false,
        }
    ],
    plugins: [
        // css({
        //     // dir: ".",
        //     // output: "styles.css"
        // }),
        external(),
        postcss({
            extract: 'styles.css',
            modules: true
        }),
        // resolve({ extensions: ['.js', '.jsx'] }),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json'
        })
    ]
}, {
    input: "./lib/cori.data.api.ts",
    output: [
        {
            banner: `/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */`,
            dir: "inst/dist",
            format: "es",
            exports: 'named',
            preserveModules: true,
            sourcemap: true,
        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        postcss({
            extract: 'styles.css',
            modules: true
        }),
        dts({
            include: [ "lib" ],
            outDir: "inst/dist",

        })
    ]
}];
