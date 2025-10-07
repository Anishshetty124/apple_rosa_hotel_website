// tailwind.config.js
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'off-white': '#F8F7F4',
        'deep-blue-gray': '#2C3E50',
        'azure-blue': '#007BFF',
        'sandy-beige': '#EADDC6',
        'dark-blue': '#1B2631',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        kenburns: 'kenburns 15s ease-out infinite alternate-reverse',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-2%, 2%)' },
        },
      },
    },
  },
  plugins: [],
}