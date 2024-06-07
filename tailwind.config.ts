import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1070px',
        g: '872px',
        md: '769px',
        sm: '510px',
        m: '440px',
        ml: '418px',
        l: '363px',
      },
      backgroundColor: {
        darkOrange: '#e57700',
        lilac: '#a681a6',
      },
    },
  },
};

export default config;
