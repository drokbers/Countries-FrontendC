/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)',
        lightText: 'hsl(200, 15%, 8%)',
        lightGray: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
      },
      screens: {
        'sm': '375px', // Mobil genişlik
        'md': '768px', // Tablet genişlik
        'lg': '1024px', // Laptop genişlik
        'xl': '1440px', // Masaüstü genişlik
      },
    },
  },
  plugins: [],
};
