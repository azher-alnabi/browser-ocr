// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	base: '/browser-ocr/',
	site: 'https://azher-alnabi.github.io/browser-ocr/',
	integrations: [mdx(), sitemap()],
});