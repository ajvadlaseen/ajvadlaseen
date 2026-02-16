// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.PROD
        ? 'https://ajvadlaseen.com' // Production URL
        : 'http://localhost:4321',

    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react(), sitemap(), icon()],
    trailingSlash: 'never',
});
