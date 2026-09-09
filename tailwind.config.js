/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090D16',
          card: '#111827',
          cardHover: '#161F32',
          border: 'rgba(255, 255, 255, 0.08)',
          accentBorder: 'rgba(16, 185, 129, 0.25)',
        },
        brand: {
          teal: '#10B981',
          tealDark: '#059669',
          tealLight: '#34D399',
          indigo: '#6366F1',
          indigoDark: '#4F46E5',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'glow-combined': '0 0 35px -5px rgba(16, 185, 129, 0.2), 0 0 25px -5px rgba(99, 102, 241, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.08) 35%, rgba(9, 13, 22, 0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
