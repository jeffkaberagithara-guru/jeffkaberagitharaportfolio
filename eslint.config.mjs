import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: ["node_modules/**", ".next/**", "dist/**"],
  },
  {
    files: ["src/components/brand-logo.tsx"],
    rules: { "@next/next/no-img-element": "off" },
  },
];

export default eslintConfig;
