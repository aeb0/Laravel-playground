import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const rootConfig = defineConfig([
    {
        ignores: [
            "app/",
            "bootstrap/",
            "database/",
            "public/",
            "resources/views/",
            "routes/",
            "storage/",
            "tests/",
            "vendor/",
            "node_modules/",
        ],
    },
    {
        files: ["**/*.ts"],
    },
    pluginJs.configs.recommended,
    tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
]);

export default rootConfig;
