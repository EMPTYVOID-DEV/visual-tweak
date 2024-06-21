import { resolve } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        "@": resolve(__dirname, "src"),
        "@lib": resolve(__dirname, "src/lib"),
        "@assets": resolve(__dirname, "src/assets"),
        "@actions": resolve(__dirname, "src/actions"),
        "@components": resolve(__dirname, "src/components"),
        "@containers": resolve(__dirname, "src/containers"),
        "@hooks": resolve(__dirname, "src/hooks"),
        "@styles": resolve(__dirname, "src/styles"),
      },
    },
  },
};

export default nextConfig;
