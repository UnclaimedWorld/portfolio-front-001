/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif'
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
        13: '3.25rem',
        15: '3.75rem',
      }
    },
  },
  plugins: [],
}

