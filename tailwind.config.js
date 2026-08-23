/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bauhaus: {
          red: '#D02020',
          blue: '#1040C0',
          yellow: '#F0C020',
          black: '#121212',
          canvas: '#F0F0F0',
          muted: '#E0E0E0',
          lightYellow: '#FFF9C4',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'bauhaus-sm': '3px 3px 0px 0px #121212',
        'bauhaus': '4px 4px 0px 0px #121212',
        'bauhaus-md': '6px 6px 0px 0px #121212',
        'bauhaus-lg': '8px 8px 0px 0px #121212',
        'bauhaus-red': '4px 4px 0px 0px #D02020',
        'bauhaus-blue': '4px 4px 0px 0px #1040C0',
        'bauhaus-yellow': '4px 4px 0px 0px #F0C020',
      }
    },
  },
  plugins: [],
}
