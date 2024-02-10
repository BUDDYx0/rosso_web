import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ain-hero-bg': "url('/img/ain-hero-bg.jpg')",
        'main-bg': "url('/img/background_3440.png')",
      },
      maxWidth: {
        'content': '1300px'
      },
      dropShadow: {
        'white-shadow': '0px 20px 25px rgba(255, 255, 255, 0.1)',
        'hero-text': '0 1px 10px rgba(14, 182, 139, 0.5)',
        'hero-avatar': '0 1px 300px rgba(255, 255, 255, 0.5)',
        'hero-avatar-hover': '0 1px 300px rgba(255, 255, 255, 1)',
      },
      colors: {
        "emerald-1000": '#01140f',
        "grey-800": '#141414',
        'grey-700': '#1F1F1F',
        "main": '#010202'
      }
    },
  },
  plugins: [],
}
export default config
