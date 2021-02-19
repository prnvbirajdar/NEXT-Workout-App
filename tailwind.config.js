const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
  
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
});
