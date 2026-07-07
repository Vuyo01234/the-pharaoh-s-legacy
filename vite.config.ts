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
          about: path.resolve(__dirname, "about.html"),
          character: path.resolve(__dirname, "character.html"),
          dynamic: path.resolve(__dirname, "dynamic.html"),
          encyclopedia: path.resolve(__dirname, "encyclopedia.html"),
          gallery: path.resolve(__dirname, "gallery.html"),
          posters: path.resolve(__dirname, "posters.html"),
          throne: path.resolve(__dirname, "throne.html"),
        },
      },
    },
  };
});
