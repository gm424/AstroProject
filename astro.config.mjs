import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://gm424.github.io',
  base: 'AstroProject',
  output: 'server',

  integrations: [
    vue({
      appEntrypoint: '/src/id-provider',
    }),
  ],
});
