/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Quét các file trong thư mục src
  ],
  theme: {
    extend: {
      colors: {
        main: "#49BBBD",
        bg: "#FAFCFF",
        new: "#FF0101",
        learning: "#FFB804",
        known: "#0EC122",
        marked: "FF6099",
      },
      spacing: {
        hheader: "72px",
        bigcard: "1056px",
      },
    },
  },
  plugins: [],
};
