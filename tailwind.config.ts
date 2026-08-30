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
        background: "#F2EEE8",
        foreground: "#141210",
        muted: {
          DEFAULT: "#292623",
          foreground: "#5C5752",
        },
        accent: {
          DEFAULT: "#C9A36A",
          foreground: "#141210",
        },
        ink: "#141210",
        obsidian: "#292623",
        gray: {
          cool: "#5C5752",
        },
        silver: "#292623",
        white: {
          paper: "#141210",
        },
      },
      fontFamily: {
        sans: ["var(--font-switzer)", "sans-serif"],
        serif: ["var(--font-gambetta)", "serif"],
        display: ["var(--font-boska)", "serif"],
        ui: ["var(--font-switzer)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
