module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#7fd959",

          secondary: "#0d013c",

          accent: "#4fbf9e",

          neutral: "#f5f4fb",

          "base-100": "#000000",

          info: "#576fd1",

          success: "#218770",

          warning: "#f0bf75",

          error: "#e92b54",
        },
        light: {
          primary: "#4ca626",

          secondary: "#cfc3fe",

          accent: "#40b08e",

          neutral: "#05040b",

          "base-100": "#ffffff",

          info: "#576fd1",

          success: "#218770",

          warning: "#f0bf75",

          error: "#e92b54",
        },
      },
    ],
  },
};
