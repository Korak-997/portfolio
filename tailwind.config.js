module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#7ed957",

          secondary: "#00ffe4",

          accent: "#1de4c0",

          neutral: "#ffffff",

          "base-100": "#000000",

          info: "#576fd1",

          success: "#218770",

          warning: "#f0bf75",

          error: "#e92b54",
        },
      },
    ],
  },
};
