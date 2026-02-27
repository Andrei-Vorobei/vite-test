import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createHtmlPlugin } from 'vite-plugin-html';
import { plugin as mdPlugin} from 'vite-plugin-markdown';
// import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { lossless: true },
    }),
    createHtmlPlugin({ inject: { data: { title: 'My App' } } }),
    mdPlugin(),
    // libAssetsPlugin({ limit: 8192, outputPath: 'assets' }),
  ],
  build: {
    target: 'esnext',   // Указываем, на какую версию JS ориентироваться
    sourcemap: true,    // Включаем карты кода для отладки
    minify: 'terser',
    cssCodeSplit: true, // Разделяем CSS на отдельные файлы
    rollupOptions: {
      input: {
        main: 'index.html',  // Главная страница
        // admin: 'admin.html', // Страница администратора
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Вынесем зависимости в отдельный файл
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hoc': path.resolve(__dirname, 'src/hoc'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
})
