// import { resolve as path_resolve } from "path";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from "rollup-plugin-dts";
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

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
            dir: "inst/dist",
            format: "es",
            exports: 'named',
            preserveModules: true,
            sourcemap: true,
        }
    ],
    plugins: [
        external(),
        // resolve({ extensions: ['.js', '.jsx'] }),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss()
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
        // resolve({ extensions: ['.js', '.jsx'] }),
        resolve(),
        commonjs(),
        dts({
            include: [ "lib" ],
            outDir: "inst/dist",

        })
    ]
}];
