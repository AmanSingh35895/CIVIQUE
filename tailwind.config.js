module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        amber: { a400: "#f8bd00" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_cc": "#000000cc",
          "900_d8": "#000000d8",
        },
        blue: {
          a400: "#1877f2",
          a700: "#136af3",
          a700_01: "#3668ff",
        },
        blue_gray: {
          300: "#9191a8",
          600: "#63637b",
          800: "#374957",
          900: "#292936",
          "700_19": "#41506519",
          "700_66": "#42506666",
          "800_01": "#2d415a",
          "800_b2": "#2d415ab2",
          "800_cc": "#2d415acc",
          "900_01": "#092547",
        },
        deep_orange: {
          a100: "#e5ab80",
          a100_01: "#ebb376",
          a700: "#d51f00",
        },
        deep_purple: { a200: "#9747ff" },
        gray :{
          50: "#f9f9f9",
          100: "#f6f6f6",
          200: "#ebebeb",
          300: "#e6e6e6",
          500: "#a19696",
          600: "#9f865d",
          700: "#666666",
          800: "#4e4646",
          900: "#630f0f",
          "100_01": "#f4f4fa",
          "100_02": "#f5f5f5",
          "200_01": "#f0f0f0",
          "300_01": "#e0e0e0",
          "400_3f": "#bababa3f",
          "500_01": "#a19797",
          "500_02": "#9a96a4",
          "50_01": "#faf9f8",
          "600_01": "#7a7a7a",
          "800_01": "#4f4646",
          "900_01": "#151b2f",
          "900_02": "#06163a",
          "900_03": "#171717",
          "900_99": "#06163a99",
          "900_b2": "#06163ab2",
          "900_cc": "#06163acc",
        },
        green: {
          600: "#319f43"
        },
        indigo: {
          50: "#e7e7ef",
          400: "#587dbd",
          600: "#423cb9"
        },
        pink: {
          100: "#e2b4c1"
        },
        red: {
          300: "#e4897b",
          600: "#e33629",
          800: "#aa473d"
        },
        teal: { 50: "#d7e5f0" },
        white: { a700: "#ffffff", a700_01: "#fcfcff", a700_33: "#ffffff33", a700_e5: "#ffffffe5" },
      },
      boxShadow: { xs: "0 48px 120px 0 #bababa3f", sm: "0 4px 4px 0 #0000003f" },
      backgroundImage: {
      },
      gradient: "linear-gradient(180deg, #ffffff33,#ffffff33)",
      gradient1: "linear-gradient(180deg, #9a96a4, #e2b4c1)",
      fontFamily: {
        inter: "Inter",
        mulish: "Mulish",
        roboto: "Roboto",
        lato: "Lato",
        merriweathersans: "Merriweather Sans",
        opensans: "Open Sans",
        plusjakartasans: "Plus Jakarta Sans",
        slackicons: "slack-icons",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};