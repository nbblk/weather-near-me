import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';

const dirname = path.resolve(__dirname, './src');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(dirname),
      },
      {
        find: '@features',
        replacement: path.resolve(dirname, '/features'),
      },
    ],
  },
});
