module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#d25d5d',
        blk: '#000000',
        wht: '#ffffff',
        ltGry: '#D6D6D6',
        gry: '#5f6369',
        drGry: '#6b6b6b',
      },
    },
    screens: {
      xxs: '320px',
      xs: '367px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin')],
};
