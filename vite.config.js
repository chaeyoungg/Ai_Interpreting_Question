import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@layout', replacement: '/src/layout' },
    ],
  },
  base: '/Ai_Interpreting_Question/',
  // build: {
  //   outDir: '../spring-folder/src/main/resources/static',
  // },
});
