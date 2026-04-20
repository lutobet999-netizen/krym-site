/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1360px' }
    },
    extend: {
      colors: {
        ink: {
          950: '#0B0F14',
          900: '#0F141B',
          800: '#161C25',
          700: '#1F2632'
        },
        sand: {
          50: '#F7F4EE',
          100: '#EFE9DD',
          200: '#E1D7C1'
        },
        gold: {
          400: '#D9B779',
          500: '#C49A5A',
          600: '#A77E3F'
        },
        sea: {
          500: '#2E7D8A',
          600: '#1F5F6B'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      letterSpacing: { tightest: '-0.04em' },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(0,0,0,.35)',
        card: '0 10px 40px -15px rgba(0,0,0,.25)'
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
      }
    }
  },
  plugins: []
};
