import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/"], // Ajuste conforme sua estrutura
  outDir: "build",
  external: ["*.pdf", "*.xlsx"],
  ignoreWatch: ["*.pdf", "*.xlsx"],
});
