module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
      },
      prefix: 'screen: ',
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens', '@tailwindcss/forms', '@tailwindcss/aspect-ratio', '@tailwindcss/typography'),
  ],
}
