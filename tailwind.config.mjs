import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gotham', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-foreground': 'var(--color-primary-foreground)',
        'text-secondary': 'var(--color-text-secondary)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require('daisyui/src/theming/themes')['emerald'],
          primary: '#d19b41',
          'primary-content': '#fff',
          secondary: '#0b3522',
        },
      },
    ],
  },
};
