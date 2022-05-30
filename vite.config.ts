import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@APIs', replacement: '/src/APIs' },
      { find: '@Assets', replacement: '/src/Assets' },
      { find: '@Components', replacement: '/src/Components' },
      { find: '@Pages', replacement: '/src/Pages' },
      { find: '@Themes', replacement: '/src/Themes' },
      { find: '@Utils', replacement: '/src/Utils' },
    ],
  },
});
