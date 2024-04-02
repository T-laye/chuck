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
        silkscreen: ["silkscreen", "sans-serif"],
        window: ["window", "sans-serif"],
        upheavtt: ["upheavtt", "sans-serif"],
        pixelifySans: ["pixelifySans", "sans-serif"],
      },
      colors: {
        primary: "#000060",
        secondary: "#ffdd8b",
        accent: "#ffdd8b",
      },
    },
  },
  plugins: [],
};
