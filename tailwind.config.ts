import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        headerShadow: "rgb(0 0 0 / 8%) 0px 2.5px 1px",
        darkShadow: "rgb(128 128 128 / 8%) 0px 2.5px 1px",
      },
      keyframes: {
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      colors: {
        card: "#f0f0f0",
        lightTags: "#7eabcf",
        darkTags: "#2196F3",
        darkBg: "#1E1E1E",
        darkLine: "#2196F3",
      },
      animation: {
        underline: "underline 0.3s linear",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
