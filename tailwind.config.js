/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js}"], // Ensure all Vue and JS files are scanned
  theme: {
    extend: {
      fontFamily: {
        kumar: ['"Kumar One Outline"', "system-ui"], // Add Kumar One Outline font
      },
    },
  },
  plugins: [],
};
