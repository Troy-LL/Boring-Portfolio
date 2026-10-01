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
        paper: "#F2EEE8",
        ink: "#141210",
        "warm-black": "#191512",
        charcoal: "#292623",
        amber: "#C9A36A",
      },
      fontFamily: {
        display: ["Boska", "Georgia", "serif"],
        body: ["Gambetta", "Georgia", "serif"],
        ui: ["Switzer", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "42rem",
        page: "48rem",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      transitionDuration: {
        apple: "420ms",
      },
    },
  },
  plugins: [],
};
export default config;
