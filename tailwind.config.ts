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
        background: "#0F0F0F", // Ink Black
        foreground: "#FAFAFA", // Paper White
        muted: {
          DEFAULT: "#1C1C1C", // Obsidian
          foreground: "#8E8E93", // Cool Gray
        },
        accent: {
          DEFAULT: "#C0C0C0", // Silver
          foreground: "#0F0F0F",
        },
        ink: "#0F0F0F",
        obsidian: "#1C1C1C",
        gray: {
          cool: "#8E8E93",
        },
        silver: "#C0C0C0",
        white: {
          paper: "#FAFAFA",
        },
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
