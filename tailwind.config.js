module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#7ed957",

          secondary: "#00667A",

          accent: "#00A48C",

          neutral: "#201726",

          "base-100": "#181717",

          info: "#71bee5",

          success: "#79eca5",

          warning: "#a0590e",

          error: "#f45048",
        },
      },
    ],
  },
};