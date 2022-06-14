import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';
import * as path from 'path';

//const dirname = path.resolve(__dirname, './src');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: '@app',
        replacement: resolve(__dirname, './src/app'),
      },
      {
        find: '@common',
        replacement: resolve(__dirname, './src/common'),
      },
      {
        find: '@features',
        replacement: resolve(__dirname, './src/features'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, './src/pages'),
      },
    ],
  },
});
