import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  build: {
    // copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      // formats: [ "es" ]
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
            sourcemap: false,
          }
      ]
    },
  },
  plugins: [
      dts({
          include: [ "lib" ],
          outDir: "inst/dist"
      }),
      react()
  ],
});
