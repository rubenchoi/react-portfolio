import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8")
);

const homepage = packageJson.homepage || "";
const envBase = process.env.BASE_PATH || process.env.VITE_BASE_PATH || "";
let base = "/";

if (envBase) {
  base = envBase.startsWith("/") ? envBase : `/${envBase}`;
  if (!base.endsWith("/")) {
    base = `${base}/`;
  }
} else {
  try {
    const parsed = new URL(homepage);
    base = parsed.pathname || "/";
    if (!base.endsWith("/")) {
      base = `${base}/`;
    }
  } catch {
    base = "/";
  }
}

export default defineConfig({
  base,
  plugins: [react()],
});