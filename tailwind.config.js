module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "#f86c28",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
