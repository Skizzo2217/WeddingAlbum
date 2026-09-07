import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  poolOptions: {
    forks: {
      minForks: 1,
      maxForks: 4,
      isolate: true,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    // Use forks pool to isolate memory per test file (prevents OOM)
    pool: 'forks',
    // Limit concurrent tests within each file
    maxConcurrency: 5,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '*.config.js',
        '*.config.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/api': path.resolve(__dirname, './src/server/api'),
      '@/layouts': path.resolve(__dirname, './src/layout'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '~': path.resolve(__dirname, './src'),
    },
  },
});
