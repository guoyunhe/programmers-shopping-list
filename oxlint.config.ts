import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['eslint', 'typescript', 'react', 'unicorn', 'oxc'],
  categories: {
    correctness: 'warn',
  },
  env: {
    browser: true,
  },
});