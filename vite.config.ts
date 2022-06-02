import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.resolve(__dirname, './src');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
    },
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },
  // resolve: {
  //   alias: [
  //     { find: '@App', replacement: path.resolve(dirname, '/app') },
  //     {
  //       find: '@Features',
  //       replacement: path.resolve(dirname, 'features'),
  //     },
  //     { find: '@Pages', replacement: path.resolve(dirname, '/pages') },
  //     {
  //       find: '@APIs',
  //       replacement: path.resolve(dirname, '/common/apis'),
  //     },
  //     {
  //       find: '@Assets',
  //       replacement: path.resolve(dirname, '/common/assets'),
  //     },
  //     {
  //       find: '@Components',
  //       replacement: path.resolve(dirname, '/common/components'),
  //     },
  //     {
  //       find: '@Hooks',
  //       replacement: path.resolve(dirname, '/common/hooks'),
  //     },
  //     {
  //       find: '@Utils',
  //       replacement: path.resolve(dirname, '/common/utils'),
  //     },
  //   ],
  // },
});
