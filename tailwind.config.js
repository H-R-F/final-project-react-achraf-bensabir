
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    ["./index.html"],
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
        'MY-Black': '#000000',
        'MY-Black1': '#111111',
        'MY-Gray1': '#666666',
        'MY-Gray2': '#888888',
        'MY-Gray3': '#909295',
        'MY-Gray4': '#999999',
        'MY-Gray5': '#cccccc',
        'MY-Gray6': '#e5e5e5',
        'MY-Red': '#ee3333',
        'MY-Red1': '#e65540',
        'MY-White': '#ffffff',
        'MY-White1': '#f5f5f5',
        'MY-White2': '#f0f0f0',
        'MY-dark': '#212529',
        'MY-dark2': '#222222',
        'MY-dark3': '#333333',
        'MY-dark4': '#42414f',
        'MY-dark5': '#555555',
      },
}) 

