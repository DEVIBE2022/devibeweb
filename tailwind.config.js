/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#191F1E",
        "orange": "#F16854",
        "light-yellow": "#F8F6EF",
        "green": "#11D748",
        "gray": "#323332",
        "other-gray": "#819A96",
      },
      fontFamily: {
        heavy: "Avenir Heavy",
        regular: "Avenir Regular",
        serif: "Alike-Regular",
      },
    },
  },
  plugins: [],
};
