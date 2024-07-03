import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // black
        secondary: "#FFFFFF", // white
        tertiary: "#169B62", // Irish green
        quart: "#FF883E", // Irish orange
        cinco: "#333333", // dark gray for additional contrast if needed
      },
      fontFamily: {
        monoton: ["var(--font-monoton)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
