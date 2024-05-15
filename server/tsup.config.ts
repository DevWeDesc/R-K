import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Ajuste conforme sua estrutura
  outDir: "build",
  external: ["*.pdf", "*.xlsx"],
  ignoreWatch: ["*.pdf", "*.xlsx"],
});
