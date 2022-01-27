import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin as Vue2 } from "vite-plugin-vue2";
import Components from "unplugin-vue-components/vite";

const config = defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
    dedupe: ["vue-demi"],
  },

  build: {
    minify: true,
  },

  plugins: [
    Vue2(),
    Components(),
  ],

  server: {
    port: 8080,
  },
});

export default config;
