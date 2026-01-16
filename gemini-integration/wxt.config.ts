import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  srcDir: 'src',
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      manifest_version: 3,
      name: 'Gemini Integration',
      version: '1.0.0',
      description: 'Integrates Gemini features into your browser.',
      permissions: ['storage']
    }
  }
});
