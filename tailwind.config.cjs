/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        josefin: "'Josefin Sans', bold, regular",
      },
      colors: {
        primary: {
          Azul5: "#121726",
          AzulVerde4: "#12374d",
          AzulVerde3: "#14687e",
          AzulVerde2: "#1a99b9",
          AzulVerde1: "#20d7d8",

          azulCeleste5: "#176aa2",
          azulCeleste4: "#1a86b3",
          azulCeleste3: "#67abd1",
          azulCeleste2: "#acdaeb",
          azulCeleste1: "#e0efed",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
