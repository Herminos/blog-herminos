/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
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
      },
      colors: {
        'dark':'rgb(41,44,51)',
        
        'gray':'rgb(155,157,159)',

        'light-gray':'rgb(200,200,200)',
    },
  },
  plugins: [],
}
}
