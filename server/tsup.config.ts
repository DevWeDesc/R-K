import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  outDir: "dist",
  format: "esm",
  ignoreWatch: ["*.xlsx", "*.pdf"],
  esbuildOptions(options) {
    options.loader = {
      ".pdf": "file",
      ".xlsx": "file",
    };
  },
});
