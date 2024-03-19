import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginManifest from 'rollup-plugin-output-manifest';
import { resolve } from 'path';
import manifest from './src/manifest.json'

const { default: outputManifest } = pluginManifest

const options = {
  generate: () => (chunks) => {
  
    for (const chunk of chunks) {
      if (chunk.name === 'serviceWorker') {
        manifest.background.service_worker = chunk.fileName;
      } else if (chunk.name === 'contentScript') {
        manifest.content_scripts[0].js.push(chunk.fileName);
      }
    }

    return {
      ...manifest,
    };
  }
};

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        serviceWorker: resolve(__dirname, './src/serviceWorker.ts'),
        contentScript: resolve(__dirname, './src/contentScript.ts'),
      },
      plugins: [
       outputManifest(options)
      ]
    },
  },
})
