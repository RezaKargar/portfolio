import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dark-plus',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    remarkPlugins: [],
    syntaxHighlight: 'shiki',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    prefetch(),
    expressiveCode(),
    mdx(),
  ],
  site: 'https://rezakargar.ir/',
  output: 'static',
})
