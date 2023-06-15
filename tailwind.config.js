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
        'primary': '#383E54',
        'secondary': '#03C3D8',
      }
    },
  },
  plugins: [],
}

