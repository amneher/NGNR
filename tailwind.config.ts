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
      // "retro"
      {
        retro: {
          ...require("daisyui/src/theming/themes")["retro"],
          "primary": "#8364d3",
          "primary-content": "#251606",
          "secondary": "#8CAB9D",
          "accent": "#f3c745",
          "info": "#5cb1f1",
          "warning": "#E25242",
          "neutral": "#29033c",
          "neutral-content": "#e5cef8",
          "base-content": "#1b0e33",
          "base-100": "#f1ddba",
          // "base-200": "#c8aedf",
          "base-200": "#8395ce",
          "base-300": "#6f4b7a",
        },
      },
    ],
  },
} satisfies Config;
