import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: 'https://engage.spendmanagement.com/engage/v4/api/',
          changeOrigin: true,
          headers: { "Ocp-Apim-Subscription-Key": '004428350acc4f2aa94d735c5126d741' },
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    },
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: process.env.VITE_API_URL,
    //       changeOrigin: true,
    //       headers: { "Ocp-Apim-Subscription-Key": process.env.VITE_SUBSCRIPTION_KEY },
    //       secure: false,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     },
    //   },
    // },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          additionalData: '@import "./src/assets/style"; @import "./src/assets/helpers";',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        // TODO: 2 lines below for Kendo theme scss
        '~@progress/kendo-theme-default': '@progress/kendo-theme-default',
        '~@progress/kendo-theme-default/scss/common/_base.scss': '@progress/kendo-theme-default/scss/common/_base.scss',
      }
    },
  })
}
