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
        "@assets": resolve(__dirname, "src/assets"),
        "@client": resolve(__dirname, "src/lib/client"),
        "@server": resolve(__dirname, "src/lib/server"),
        "@shared": resolve(__dirname, "src/lib/shared"),
      },
    },
  },
};

export default nextConfig;
