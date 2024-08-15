import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        headerShadow: "rgb(0 0 0 / 8%) 0px 2.5px 1px",
      },
      colors: {
        card: "#f0f0f0",
        lightTags: "#7eabcf",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
