import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f2e8ff",
          DEFAULT: "#7f56d9",
          dark: "#53389e"
        }
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
