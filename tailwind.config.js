/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require('kutty')],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#7F56D9',
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '18px'],
        md: ['16px', '20px'],
        lg: ['18px', '22px'],
        xl: ['20px', '24px'],
      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};
