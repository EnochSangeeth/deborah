/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a2e',
        slate:    '#16213e',
        panel:    '#0f3460',
        gold:     '#c9a84c',
        'gold-light': '#e8c97e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
