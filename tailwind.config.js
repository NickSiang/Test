/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))',
      },
      boxShadow: {
        'custom-shadow': '9px 9px 22px #b3b3b3, -9px -9px 22px #ffffff',
        'inset-soft': 'inset 7px 7px 44px #e8e8e8, inset -7px -7px 44px #ffffff',
        'custom-inset': 'inset 0px -2px 50px 0px rgba(10, 37, 64, 0.2)',
        'custom': '12.8px 12.8px 22.4px rgb(204, 204, 204), -3.2px -3.2px 28.8px rgb(255, 255, 255)',
      },
    },
    keyframes: {
      moveBackground: {
        '0%': { backgroundPosition: '0% 0%' },
        '100%': { backgroundPosition: '100% 100%' },
      },
    },
    animation: {
      moveBackground: 'moveBackground 60s linear infinite',
    },

    fontFamily: {
      noto: ['Noto Serif TC', 'serif'],
    },


    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  },
};
