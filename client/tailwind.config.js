/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1E1E1E',
        'primary-bg': '',
        primary: '#6600E8',
        secondary: '#DDC8F9',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/header-bg.png')",
        'gradient-blue-red': 'linear-gradient(to right, #1E40AF, #DC2626)',
        'gradient-hover':
          'linear-gradient(90deg, rgba(221, 200, 249, 1) 0%, rgba(221, 200, 249, 1) 100%)',
        'nav-gradient': 'linear-gradient(to right, #F327A1, #6600E8)',
      },
    },
  },
  plugins: [],
};
