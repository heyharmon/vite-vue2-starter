import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin as Vue } from "vite-plugin-vue2";
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
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
    Vue(),
    ScriptSetup(),
    Components(),
  ],

  server: {
    port: 8080,
    // hmr: { overlay: false }
  },
});

export default config;
