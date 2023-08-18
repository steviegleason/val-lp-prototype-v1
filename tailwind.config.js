/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f9",
        midnightblue: "#180d68",
        darkorange: "#ff8a06",
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.8)",
        ghostwhite: "#f0f0f8",
        black: "#000",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        mukta: "Mukta",
        inter: "Inter",
        athelas: "Athelas",
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
        "17xl": "36px",
      },
    },
    fontSize: {
      "46xl": "65px",
      "26xl": "45px",
      "base-1": "15.1px",
      "lgi-7": "19.7px",
      sm: "14px",
      "36xl-4": "55.4px",
      "21xl": "40px",
      "19xl-1": "38.1px",
      xs: "12px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      mq1024: {
        raw: "screen and (max-width: 1024px)",
      },
      mq744: {
        raw: "screen and (max-width: 744px)",
      },
      mq390: {
        raw: "screen and (max-width: 390px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
