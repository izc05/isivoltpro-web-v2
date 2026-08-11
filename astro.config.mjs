import { defineConfig } from 'astro/config';

const base = process.env.PUBLIC_BASE_PATH || '/';
const site = process.env.PUBLIC_SITE_URL || 'https://izc05.github.io/isivoltpro-web-v2';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always'
});
