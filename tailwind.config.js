/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      md: "0.313rem",
      "2xl": "1rem",
      full: "9999px",
    },
    extend: {
      fontFamily: {
        // replace default with League Spartan
        sans: ["League Spartan", ...fontFamily.sans],
      },
      colors: {
        "primary-desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "neutral-light-grayish-cyan": "hsl(180, 52%, 96%)",
        "neutral-lighter-grayish-cyan": "hsl(180, 31%, 95%)",
        "neutral-dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "neutral-very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      screens: {
        "3xl": { min: "2000px" },
        xs: { min: "375px" },
      },
    },
  },
  plugins: [],
};
