/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jinitutorclass: {
          cobaltViolet: '#6366f1',
          violetGlow: '#8b5cf6',
          cobaltBlue: '#3b82f6',
          goldPoint: '#f59e0b',
          goldLight: '#fbbf24',
          background: '#090d16',
          surface: '#13192b',
          surfaceGlow: '#1e2942',
          textMain: '#f8fafc',
          textSub: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Chakra Petch"', 'monospace'],
      },
      boxShadow: {
        'glass-glow': '0 0 25px -5px rgba(99, 102, 241, 0.4), 0 0 10px -2px rgba(245, 158, 11, 0.3)',
        'neon-border': 'inset 0 0 15px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.3)',
        'gold-glow': '0 0 20px rgba(245, 158, 11, 0.4)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
