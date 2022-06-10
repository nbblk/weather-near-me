import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';

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
        replacement: resolve('/src'),
      },
    ],
  },
});
