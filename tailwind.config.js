module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#4ca626",

          secondary: "#073046",

          accent: "#5943b1",

          neutral: "#defcde",

          "base-100": "#161816",

          info: "#576fd1",

          success: "#218770",

          warning: "#f0bf75",

          error: "#e92b54",
        },
        light: {
          primary: "#7fd959",

          secondary: "#b9e2f8",

          accent: "#644ebc",

          neutral: "#032103",

          "base-100": "#e7e9e7",

          info: "#576fd1",

          success: "#218770",

          warning: "#f0bf75",

          error: "#e92b54",
        },
      },
    ],
  },
};
