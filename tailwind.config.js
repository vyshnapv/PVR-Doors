/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          dark: '#222831',
          slate: '#2D3748',
          charcoal: '#1A1E24',
          gray: '#3A4750',
          light: '#EEEEEE',
          offwhite: '#F8F9FA',
        },
        safety: {
          orange: '#FF6B00',
          amber: '#E65100',
          yellow: '#F2A900',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'steel-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'steel': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'steel-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}

