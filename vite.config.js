import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  base: "/Vue-Practice/", //Github Pages 路徑用
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
