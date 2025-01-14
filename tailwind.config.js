/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fm-gradient': "linear-gradient(180deg, #EBE7DD 0%, #E8E4D8 30% ,#CBCCA8 100%)",
        'hd-gradient': "linear-gradient(180deg, #E7E5D4 -51.1%, #E7E5D4 2%, #AABEBA 46.06%, #64919B 90.55%)",
        'main-gradient': "linear-gradient(180deg, #64919B 10%, #CBCCA8 100%)",
      },
      keyframes: {
        moveBackground: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        rollBall: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        moveBackground: 'moveBackground 60s linear infinite',
        rollBall: 'rollBall 5s linear infinite',
      },
      fontFamily: {
        noto: ['Noto Serif TC, serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
