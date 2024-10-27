import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    site: 'https://www.drwaseemandrabi.com/',
    integrations: [mdx(), sitemap(), tailwind(), react()],
    output: "server",
    adapter: vercel(),
});