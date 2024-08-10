/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPrimaryBG: "#F9FAFB",
        lightPrimaryTxt: "#1E1E1E",
        lightSecondBG: "#D9D9D9",
        lightSecondaryTxt: "#E5E7EB",
        error: "#FFC3C3",
      },
      fontFamily: {
        primaryFont: ["IBM Plex Serif", "serif"],
        shareTechMono: ["Share Tech Mono", "monospace"],
      },
      backgroundImage: {
        card: "url('/src/assets/card.png')",
        iconGradient:
          "linear-gradient(to right, rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 1))",
      },
    },
  },
  plugins: [],
};
