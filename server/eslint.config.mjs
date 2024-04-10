import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-unused-imports": "errors",
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
