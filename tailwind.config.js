/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkorange: {
          "100": "#ff8a06",
          "200": "#ff8700",
        },
        midnightblue: {
          "100": "#180d68",
          "200": "#190037",
        },
        sandybrown: "#ffb867",
        gray: {
          "100": "#fafafa",
          "200": "#1a202c",
          "300": "rgba(255, 255, 255, 0.04)",
          "400": "rgba(255, 255, 255, 0.8)",
        },
        ghostwhite: "#f0f0f8",
        white: "#fff",
        darkslateblue: "#4b4194",
        gainsboro: "#d9d9d9",
        salmon: "#f56565",
        forestgreen: "#5eb53f",
        lavender: {
          "100": "#f0f0ff",
          "200": "#ececfe",
          "300": "#e4e2f2",
        },
        lightslategray: "#8c8cb1",
        darkgray: "#9b9b9b",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        mukta: "Mukta",
        roboto: "Roboto",
        inter: "Inter",
        athelas: "Athelas",
      },
      borderRadius: {
        "8xs": "5px",
        "9980xl": "9999px",
        "17xl": "36px",
      },
    },
    fontSize: {
      "lgi-7": "19.7px",
      smi: "13px",
      xs: "12px",
      lg: "18px",
      base: "16px",
      "21xl": "40px",
      "base-1": "15.1px",
      "11xl": "30px",
      "46xl": "65px",
      "26xl": "45px",
      sm: "14px",
      "36xl-4": "55.4px",
      xl: "20px",
      "19xl-1": "38.1px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
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
