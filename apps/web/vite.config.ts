import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const port = Number(env.VITE_PORT ?? 5173);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error(`Invalid VITE_PORT value: "${env.VITE_PORT}"`);
  }

  return {
    base: env.BASE_PATH ?? "/",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      dedupe: ["react", "react-dom"],
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
    server: {
      port,
      strictPort: true,
      proxy: {
        "/api": {
          target: env.VITE_API_PROXY_TARGET ?? "http://127.0.0.1:3000",
          changeOrigin: true,
        },
      },
    },
    preview: {
      port,
      strictPort: true,
    },
  };
});
