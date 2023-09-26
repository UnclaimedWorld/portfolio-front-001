/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: 'Manrope, Helvetica, sans-serif',
      sub: 'SometypeMono, monospace, sans-serif'
    },
    extend: {
      colors: {
        cl_background: '#F5F5F5',
        cl_heading: '#263444',
        cl_subheading: '#626C78',
        cl_link: '#0044FF',
        cl_border: {
          dark: '#E0E0E0',
          DEFAULT: '#EBEBEB'
        },
      },
      spacing: {
        '7.5': '1.875rem',
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem'
      }
    },
  },
  plugins: [],
}

