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
      },
    ],
  },
};
