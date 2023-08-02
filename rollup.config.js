import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "inst/index.js",
        format: "cjs"
      },
      {
        file: "inst/index.es.js",
        format: "es",
        exports: "named"
      }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        "presets": ["@babel/preset-env", "@babel/preset-react"]
      }),
      external(),
      resolve()
    ]
  }
]
