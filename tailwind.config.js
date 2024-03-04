module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        "primary-200": "#5fbb3a",
        "primary-300": "#007700",
        "accent-200": "#d8d8d8",
        "text-200": "#e0e0e0",
        "bg-200": "#292929",
        "bg-300": "#404040",
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#7ED957",
          secondary: "#6a9fff",
          accent: "#4C4C4C",
          neutral: "#FFFFFF",
          "base-100": "#1A1A1A",
          info: "#576fd1",
          success: "#218770",
          warning: "#f0bf75",
          error: "#e92b54",
        },
      },
    ],
  },
};
