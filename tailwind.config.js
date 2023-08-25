/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        75: "0.75",
      },
    },
    fontFamily: {
      VujahdayScript: "VujahdayScript",
      Halimun: "Halimun",
      Montserrat: "Montserrat",
      MrsSaintDelafield_Regular: "MrsSaintDelafield-Regular",
      Bit: "Bit",
    },
  },
  plugins: [],
};
