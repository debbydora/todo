import type { Config } from "tailwindcss";

const config: Config = {
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

      boxShadow: {
        listShadow: "0px 6px 16px rgba(201,201,201)",
        cardColor: "0px 2px 16px rgba(192, 192, 192, 0.25)",
        navShadow: "0px 2px 16px rgba(45,73,144)",
      },
    },
  },
  plugins: [],
};
export default config;
