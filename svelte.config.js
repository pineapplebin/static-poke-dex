import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    serviceWorker: {
      register: true,
      files: (filepath) => !/\.DS_Store/.test(filepath) && !/\.nojekyll/.test(filepath)
    },

    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),

    paths: {
      base: isDev ? '' : '/static-poke-dex'
    },

    vite: {
      resolve: {
        alias: {
          '@': path.resolve('./src')
        }
      }
    }
  }
};

export default config;
