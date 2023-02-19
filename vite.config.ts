import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import svgr from "vite-plugin-svgr";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@ui": fileURLToPath(new URL("./src/components/ui", import.meta.url)),
      "@global": fileURLToPath(
        new URL("./src/components/global", import.meta.url)
      ),
    },
  },
});
