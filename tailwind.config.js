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
        paper: {
          DEFAULT: '#FBFBFA',
          subtle: '#F7F6F3',
          card: '#FFFFFF',
          border: '#EAEAEA',
          borderStrong: '#DCDCD8',
        },
        ink: {
          DEFAULT: '#141413',
          secondary: '#3A3A38',
          muted: '#6E6E6A',
          faint: '#9E9E99',
        },
        carbon: {
          bg: '#0C0D0E',
          subtle: '#131416',
          card: '#181A1D',
          border: '#24272C',
          borderStrong: '#33373E',
          text: '#EDEDEC',
          muted: '#8E9094',
        },
        pastel: {
          green: '#EDF3EC',
          greenText: '#2B5230',
          darkGreen: '#142618',
          darkGreenText: '#86EFAC',
          blue: '#E8F1F5',
          blueText: '#23495C',
          darkBlue: '#152430',
          darkBlueText: '#93C5FD',
          amber: '#FDF4E6',
          amberText: '#7A5012',
          darkAmber: '#2D2214',
          darkAmberText: '#FCD34D',
          red: '#FDEBEC',
          redText: '#8F282B',
          darkRed: '#2D1618',
          darkRedText: '#FCA5A5',
        },
        brand: {
          emerald: '#10B981',
          emeraldDark: '#059669',
          cyan: '#06B6D4',
          cyanDark: '#0891B2',
          indigo: '#6366F1',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'fine': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'lift': '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
