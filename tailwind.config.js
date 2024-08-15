import formsPlugin from "@tailwindcss/forms"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#3662E3",
          light: "#7CA9F3",
        },
        neutral: {
          600: "#040711",
          500: "#121826cc",
          400: "#394150",
          300: "#212936cc",
          200: "#4D5562",
          100: "#CDD5E0",
          50: "#F9FAFB",
        },
      },
    },
  },
  plugins: [formsPlugin],
}
