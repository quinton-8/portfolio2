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
        carbon: {
          950: '#05080E',
          900: '#0A0E17',
          850: '#0F1523',
          800: '#151E30',
          750: '#1C273E',
          700: '#243350',
          600: '#3B4D6E',
          500: '#52668B',
          400: '#8B9BB4',
          300: '#BAC6D8',
          200: '#DBE3EE',
          100: '#F0F4FA',
        },
        paper: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        brand: {
          emerald: '#10B981',
          emeraldDark: '#059669',
          cyan: '#06B6D4',
          cyanDark: '#0891B2',
          indigo: '#6366F1',
          amber: '#F59E0B',
          hazard: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.2), 0 0 10px rgba(16, 185, 129, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(16, 185, 129, 0.4), 0 0 25px rgba(6, 182, 212, 0.2)' },
        }
      }
    },
  },
  plugins: [],
}
