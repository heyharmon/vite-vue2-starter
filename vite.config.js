import path from "path"
import { defineConfig } from "vite"
import { createVuePlugin as Vue2 } from "vite-plugin-vue2"
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite"
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

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
    
    /**
     * Configure how css is handled by Vite
     */
    css: {
        preprocessorOptions: {
            scss: {
                /**
                 * Share common variables among all processed files
                 * without having to explicit import them.
                 * https://vitejs.dev/config/#css-preprocessoroptions
                 */
                additionalData: `@import './src/styles/resources';`
            }
        }
    },

    plugins: [
        /**
        * Vue 2 plugin for Vite
        * https://github.com/underfin/vite-plugin-vue2
        */
        Vue2(),

        /**
        * Bring <script setup> to Vue 2
        * https://github.com/antfu/unplugin-vue2-script-setup
        */
        ScriptSetup(),

        /**
        * Auto import APIs as they are used in <script setup>
        * API Examples: ref, reactive, router, etc
        * https://github.com/antfu/unplugin-auto-import
        */
        AutoImport({
            imports: [
                'vue-demi',
                'vue-router',
                '@vueuse/core',
            ],

            dts: 'src/vite/auto-imports.d.ts',
        }),

        /**
        * Auto import components as they are used in markup
        * https://github.com/antfu/unplugin-vue-components
        */
        Components({
            extensions: ['vue'],

            resolvers: [
                /**
                * Resolve unplugin-icons as components
                * Enable IBM Carbon collection
                * https://github.com/antfu/unplugin-icons
                */
                IconsResolver({
                    prefix: false,
                    enabledCollections: ['carbon']
                }),
            ],

            dts: 'src/vite/components.d.ts',
        }),
        
        /**
        * Access thousands of icons as components on-demand universally.
        * https://github.com/antfu/unplugin-icons
        */
        Icons({
            autoInstall: true,
        }),
    ],

    server: {
        port: 8080,
        hmr: { 
            // Don't show HMR errors on screen, only console
            overlay: false 
        }
    }
})

export default config
