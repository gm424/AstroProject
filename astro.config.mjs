import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://gm424.github.io',
  base: '/AstroProject',
  output: 'server',
  integrations: [
    vue({
      appEntrypoint: '/src/id-provider',
    }),
  ],
  adapter: node({
    mode: 'standalone',
  }),
});
