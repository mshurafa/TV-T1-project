/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#4375FF",
          DEFAULT: "#0044FF",
          dark: "#002a9d",
        },
        gray: {
          dark: "#707070",
          DEFAULT: "#00000029", // better to be hexadecimal
          light: "#F3F4F6",
          new:"#9E9E9E",
          new2:"#8C8C8C"
        },
        red: {
          DEFAULT: "#EE404C",
        },
      },
      scale: {
        '-100': '-1',
    },
    fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
