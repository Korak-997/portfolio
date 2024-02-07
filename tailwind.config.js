module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#7ED957",
          secondary: "#6a9fff",
          accent: "#753efe",
          neutral: "#ebeeea",
          "base-100": "#060705",
          info: "#576fd1",
          success: "#218770",
          warning: "#f0bf75",
          error: "#e92b54",
        },
        light: {
          primary: "#7ED957",
          secondary: "#6a9fff",
          accent: "#753efe",
          neutral: "#0d2800",
          "base-100": "#fafff9",
          info: "#3c69f1",
          success: "#218770",
          warning: "#f0bf75",
          error: "#e92b54",
        },
      },
    ],
  },
};
