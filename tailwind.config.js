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
        command: ["command", "sans-serif"],
        upheavtt: ["upheavtt", "sans-serif"],
        pixelifySans: ["pixelifySans", "sans-serif"],
      },
      colors: {
        black: "#111111",
        darkBlue: "#120A44",
        lightBlue: "#597DFE",
        primary: "#0070f0",
      },
    },
  },
  plugins: [],
};
