import {defineConfig} from "vite";
import {fileURLToPath, URL} from "node:url";
import vue from "@vitejs/plugin-vue";
import svgLoader from 'vite-svg-loader'
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";
import postcssNesting from "postcss-nesting";
import postcssSimpleVars from "postcss-simple-vars";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin(),
        stylelintPlugin(),
        svgLoader(),
        vuetify(),
    ],
    css: {
        postcss: {
            plugins: [
                postcssNesting,
                postcssSimpleVars
            ],
        },
        devSourcemap: true,
        localsConvention: "camelCaseOnly",
        modules: {
            localsConvention: "camelCase"
        }
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    // publicPath: process.env.NODE_ENV === "production" ? "/bearings/" : "/",
});
