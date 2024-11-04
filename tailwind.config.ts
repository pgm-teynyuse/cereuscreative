module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        website: 'rgba(236, 236, 236, 1)',
        darkgray: 'rgba(204, 204, 204, 1)',
        lightblack: 'rgba(40, 38, 43, 1)',
        maingreen: 'rgba(124, 132, 94, 1)',
        darkgreen: 'rgba(101, 109, 74, 1)',
        lightgreen: 'rgba(221, 229, 182, 1)',
      },
      variants: {},
      plugins: [],
    },
  },
};
