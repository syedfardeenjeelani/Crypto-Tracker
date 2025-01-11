import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend base Next.js and TypeScript rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rules to relax linting
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Disable "no-explicit-any" globally
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ], // Allow unused variables starting with "_"
      "react-hooks/exhaustive-deps": "warn", // Warn instead of error for useEffect dependencies
    },
  },
];

export default eslintConfig;
