import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      light: "#FAF1E4",
      green: {
        100: "#CEDEBD",
        200: "#9EB384",
        300: "#435334",
      },
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
