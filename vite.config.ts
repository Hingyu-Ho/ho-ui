import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

import pkg from './package.json';

const isDevelopment = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: isDevelopment ? [(legacy(), react())] : [],
  esbuild: {
    /**
     * @warning
     * 目前vitejs/app不支持jsx的自动转化
     * 自动帮你在jsx文件中插入React，当然如果你文件中已经导入React了，记得自己删掉，因为一个文件里不能有两行
     */
    jsxInject: `import React from 'react'` // automatically import React in jsx files
  },
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.tsx'),
      // 暴露的全局变量
      name: 'HoUI',
      // 输出的包文件名
      fileName: (format) => `${pkg.name}.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
