import { fileURLToPath } from 'node:url';
import alias from '@rollup/plugin-alias';
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";
import nodeResolve from "@rollup/plugin-node-resolve";
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';

const pkg = require('./package.json');

// Most of the config below is explained/borrowed from:
// https://www.misha.wtf/blog/rollup-library-starter

const babelRuntimeVersion = pkg.devDependencies['@babel/runtime'].replace(/[^0-9]*/, '');

const outputOptions = {
  exports: 'named',
  preserveModules: true,
  banner: `/*
 * CORI Data API Package
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */`,
  sourcemap: false,
};

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
};

export default [
  {
    input: "./src/index.js",
    external: makeExternalPredicate([
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ]),
    output: [
      {
        dir: "inst/dist/cjs",
        format: "cjs",
        ...outputOptions
      },
      {
        dir: "inst/dist/esm",
        format: "esm",
        ...outputOptions
      }
    ],
    plugins: [
      alias({
        entries: {
          src: fileURLToPath(new URL('src', import.meta.url)),
        },
      }),

      nodeResolve({
        extensions: ['.js', '.jsx']
      }),

      babel({
        // babelHelpers: 'bundled',
        babelHelpers: 'runtime',
        extensions: ['.js', 'jsx'],
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }],
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
        plugins: [['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }]]
      }),

      commonjs({ include: ['node_modules/**'] }),

      css({ output: "styles.css"}),

      terser(),

      image(),
    ]
  }
]
