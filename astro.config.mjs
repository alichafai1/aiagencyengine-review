// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { productionOrigin } from './src/data/product.ts';

// Pre-deployment configuration only. Do not deploy until the affiliate terms
// confirm that this domain is allowed.
export default defineConfig({
	site: productionOrigin,
	trailingSlash: 'always',
	integrations: [sitemap()],
});
