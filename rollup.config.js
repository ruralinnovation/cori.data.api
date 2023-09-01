import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";
import jsx from "rollup-plugin-jsx";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";


export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "inst/index.js",
        format: "cjs",
        sourcemap: false
      },
      {
        file: "inst/index.es.js",
        format: "es",
        exports: "named",
        sourcemap: false
      }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        "presets": ["@babel/preset-env", "@babel/preset-react"]
      }),
      css(),
      jsx({factory: 'React.createElement'}),
      external(),
      resolve()
    ]
  }
]
