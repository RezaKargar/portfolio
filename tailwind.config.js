/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-purple': 'mediumpurple',
        'primary-orange': '#ff7e00',
        'primary-red': '#ef4056',
        'secondary-purple': 'rebeccapurple',
      },
      backgroundImage: {
        'blue-green-gradient':
          'linear-gradient(247.23deg, #4AF2C8 0%, #2F4CB3 100%)',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
