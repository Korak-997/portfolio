module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#2E8B57",
          secondary: "#455D5C",
          accent: "#3c69f1",
          neutral: "#fcffff",
          "base-100": "#0d0e0c",
          info: "#576fd1",
          success: "#218770",
          warning: "#f0bf75",
          error: "#e92b54",
        },
        light: {
          primary: "#75d19d",
          secondary: "#A1BAB9",
          accent: "#7558da",
          neutral: "#130405",
          "base-100": "#e0e0e0",
          info: "#3c69f1",
          success: "#218770",
          warning: "#f0bf75",
          error: "#e92b54",
        },
      },
    ],
  },
};
