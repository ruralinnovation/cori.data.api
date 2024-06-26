import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  build: {
    // copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/cori.data.api.ts"),
      // formats: [ "es" ]
      name: '@cori-risi/cori.data.api',
      fileName: 'cori.data.api'
    },
    rollupOptions: {
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
      ]
    },
  },
  plugins: [
      dts({
          include: [ "lib" ],
          outDir: "inst/dist",

      })
  ],
});
