/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#008897',
        'light-grey': '#F5F5F5',
        'primary': '#383E54',
        'secondary': '#03C3D8',
        'accent-1': '#286090',
      }
    },
  },
  plugins: [],
}

