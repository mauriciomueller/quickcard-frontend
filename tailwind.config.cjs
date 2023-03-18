/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './index.html',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fce9f3',
          100: '#f9cde7',
          200: '#f49fd1',
          300: '#ef70bb',
          400: '#e849a9',
          500: '#d53f8c',
          600: '#ad3271',
          700: '#822656',
          800: '#5c1940',
          900: '#3d112d',
        },
      },
    },
  },
  plugins: [
    
  ],
}
