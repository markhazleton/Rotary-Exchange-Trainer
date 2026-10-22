import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { msw } from "msw/vite";
import { copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv, type Plugin } from "vite";

// Static hosts such as GitHub Pages serve 404.html for unknown paths, so a
// copy of the app shell lets client-side routes survive a refresh.
function spaFallback(): Plugin {
  let outDir = "";

  return {
    name: "spa-fallback",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      await copyFile(
        path.join(outDir, "index.html"),
        path.join(outDir, "404.html"),
      );
    },
  };
}

// The public preview should not compete with the real site in search results.
function noIndex(): Plugin {
  return {
    name: "no-index",
    transformIndexHtml(html) {
      const robots = /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/;

      if (!robots.test(html)) {
        throw new Error('index.html is missing <meta name="robots">');
      }

      return html.replace(
        robots,
        '<meta name="robots" content="noindex, nofollow" />',
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const port = Number(env.VITE_PORT ?? 5173);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error(`Invalid VITE_PORT value: "${env.VITE_PORT}"`);
  }

  const apiMode = env.VITE_API_MODE ?? "live";

  if (apiMode !== "live" && apiMode !== "mock") {
    throw new Error(`Invalid VITE_API_MODE value: "${apiMode}"`);
  }

  return {
    base: env.BASE_PATH ?? "/",
    // Always a string literal, so live builds fold the mock guard in main.tsx
    // away and msw() never emits the service worker.
    define: {
      "import.meta.env.VITE_API_MODE": JSON.stringify(apiMode),
    },
    plugins: [
      react(),
      tailwindcss(),
      msw(),
      mode === "demo" && [noIndex(), spaFallback()],
    ],
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
