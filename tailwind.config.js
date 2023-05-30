/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'light-purple': '#b369aa',
        'dark-purple': '#812eb5',
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(at right, var(--tw-gradient-stops))',
        'gradient-radial-at-tl': 'radial-gradient(at top left, var(--tw-gradient-stops))',
        'gradient-radial-at-tr': 'radial-gradient(at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-bl': 'radial-gradient(at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-br': 'radial-gradient(at bottom right, var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
      gradientColorStops: theme => theme('colors'),
    },
  },
  plugins: [],
};
