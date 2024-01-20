import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-bg": "#191919",
        "dark-secondary": "#202020",
        "dark-text": "#9b9b9b",
        "dark-heading": "#f1f9f5",
        "dark-accent": "rgba(255, 255, 255, 0.05)",
        "light-bg": "#ffffff",
        "light-secondary": "#f1f1f0",
        "light-text": "#19171199",
        "light-heading": "#37352f",
        "light-accent": "rgba(55, 53, 47, 0.16)",
        "matcha": "#707c4f",
      },
    },
  },
  plugins: [],
};
export default config;
