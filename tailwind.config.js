module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#4ca626",

          secondary: "#e6995e",

          accent: "#bd41f2",

          neutral: "#defcde",

          "base-100": "#0e1316",

          info: "#576fd1",

          success: "#218770",

          warning: "#f0bf75",

          error: "#e92b54",
        },
        light: {
          primary: "#7fd959",
          secondary: "#E6995E",
          accent: "#A11ED9",
          neutral: "#032103",
          "base-100": "#FEFEFF",
          info: "#576fd1",

          success: "#218770",

          warning: "#f0bf75",

          error: "#e92b54",
        },
      },
    ],
  },
};
