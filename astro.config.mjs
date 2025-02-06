// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://atippax.github.io',
  base: isProduction ? '/about-me' : '/',
  prefetch: true,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
