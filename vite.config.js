import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; // 導入 resolve 方法

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      // "/images": "src/assets/images",
    },

  },

  // server: {
  //   proxy: {
  //     "/api": {
  //       // 服务器请求域名
  //       target: "http://localhost:3000",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },

});

  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: @import '@/assets/sass/base/var';
  //     }
  //   }
  // }




// build: {
//   rollupOptions: {
//     input: {
//       main: resolve(dirname, "index.html"),
//       arcticle: resolve(__dirname, "arcticle/index.html"),
//     },
//     output: {
//       entryFileNames: assets/[name].js,
//       chunkFileNames: assets/[name].js,
//       assetFileNames: assets/[name].[ext],
//     },
//   },
// },

