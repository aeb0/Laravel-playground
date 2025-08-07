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
    tseslint.configs.recommended,
]);

export default rootConfig;
