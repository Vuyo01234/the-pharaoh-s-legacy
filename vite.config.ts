import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
      watch: process.env.DISABLE_HMR === "true" ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          landing: path.resolve(__dirname, "index.html"),
          character: path.resolve(__dirname, "character.html"),
          throne: path.resolve(__dirname, "throne.html"),
          encyclopedia: path.resolve(__dirname, "encyclopedia.html"),
        },
      },
    },
  };
});
