import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  outDir: "build",
  ignoreWatch: ["*.xlsx", "*.pdf"],
  esbuildOptions(options) {
    options.loader = {
      ".pdf": "file",
      ".xlsx": "file",
    };
  },
});
