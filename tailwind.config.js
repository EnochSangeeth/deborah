/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0D0D1A',
        obsidian: '#0A0A0A',
        deep:     '#12122A',
        card:     '#1A1A35',
        violet:   '#6C63FF',
        'violet-light': '#8B85FF',
        rose:     '#E8A598',
        cream:    '#F5F0EB',
        muted:    '#8892A4',
        gold:     '#D4AF37',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        serif:   ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
