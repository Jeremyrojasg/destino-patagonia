import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://destino-patagonia.vercel.app/',
  output: 'static',
  integrations: [tailwind()],
});