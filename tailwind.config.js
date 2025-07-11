/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clarika: ["Inter", "sans-serif"],
        garamond: ["EB Garamond", "Georgia", "serif"],
      },
      colors: {
        primary: {
          50: "#f8f7f4",
          100: "#f0ede5",
          200: "#e1dac7",
          300: "#cdc1a0",
          400: "#b8a375",
          500: "#a08a56",
          600: "#8f7548",
          700: "#775e3c",
          800: "#634e35",
          900: "#54422f",
        },
        gold: {
          50: "#fefdf7",
          100: "#fef9e7",
          200: "#fcf0c2",
          300: "#f9e187",
          400: "#f5cb4a",
          500: "#f1b520",
          600: "#e19713",
          700: "#ba7513",
          800: "#975e17",
          900: "#7c4e18",
        },
        navy: {
          50: "#f4f6f9",
          100: "#eaeef3",
          200: "#d9e1e9",
          300: "#bccbda",
          400: "#9aafe7",
          500: "#7e95bc",
          600: "#677fa7",
          700: "#586b96",
          800: "#4c5b7c",
          900: "#414c65",
        },
        marble: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
      backgroundImage: {
        "marble-texture": "url('/images/marble-texture.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "legal-pattern":
          "linear-gradient(135deg, rgba(16, 32, 64, 0.02) 0%, rgba(161, 138, 86, 0.05) 100%)",
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        card: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        glow: "0 0 20px rgba(241, 181, 32, 0.3)",
      },
      animation: {
        typewriter: "typewriter 4s steps(40) 1s 1 normal both",
        "fade-in-up": "fadeInUp 1s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
