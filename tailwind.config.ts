import type { Config } from 'tailwindcss'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.svg",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-moderno)'],
        mono: ['var(--font-chivo-mono)'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"), 
    require("@tailwindcss/forms")
  ],
  daisyui: {
    themes: [
      "light",
      "dim",
      {
        retro: {
          ...require("daisyui/src/theming/themes")["retro"],
          primary: "#9FC9A1",
          secondary: "#79729E",
          accent: "#FFC663",
          info: "#8FBB73",
          warning: "#E25242",
          baseDark: "#63429E",
          textDark: "#D3C6EE",
          textLight: "#130034",
          baseLight: "#C5BAC6"
        },
      },
    ],
  },
} satisfies Config;
