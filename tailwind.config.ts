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
          "primary": "#8364d3",
          "primary-content": "#362357",
          "secondary": "#938ae4",
          "accent": "#DDB663",
          "info": "#8FBB73",
          "warning": "#E25242",
          "neutral": "#281d49",
          "neutral-content": "#D3C6EE",
          "base-content": "#1b0e33",
          "base-100": "#d5c8f2",
          // "base-200": "#c8aedf",
          "base-200": "#a397cb",
          "base-300": "#36324d",
        },
      },
    ],
  },
} satisfies Config;
