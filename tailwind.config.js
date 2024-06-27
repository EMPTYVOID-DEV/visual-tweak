import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

function defaultStyles({ addBase, theme }) {
  addBase({
    h1: {
      fontSize: theme("fontSize.h1"),
      lineHeight: theme("lineHeight.lh1"),
    },
    h2: {
      fontSize: theme("fontSize.h2"),
      lineHeight: theme("lineHeight.lh2"),
    },
    h3: {
      fontSize: theme("fontSize.h3"),
      lineHeight: theme("lineHeight.lh3"),
    },
    h4: {
      fontSize: theme("fontSize.h4"),
      lineHeight: theme("lineHeight.lh4"),
    },
    "label, code, span, li, p, i,a": {
      fontFamily: theme("fontFamily.font"),
      fontSize: theme("fontSize.body"),
      lineHeight: theme("lineHeight.lhbody"),
      fontWeight: "400",
    },
    "h1,h2,h3,h4": {
      fontFamily: theme("fontFamily.font"),
      fontWeight: "700",
    },
  });
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
/**
 * @type {import("tailwindcss").Config}
 */
const config = {
  content: [
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: { max: "764px" },
    },
    extend: {
      colors: {
        primaryColor: "#ffa0c5",
        backgroundColor: "#030200",
        foregroundColor: "#fffbee",
        dangerColor: "#ff0000",
        successColor: "#27cf22",
        mutedColor: "#505050",
      },
      borderRadius: {
        bdr: "0.3rem",
      },
      fontFamily: {
        font: "Lora, sans-serif",
      },
      fontSize: {
        huge: "clamp(3.8rem, calc(3.8rem + ((1vw - 0.48rem) * 1.3889)), 4.8rem)",
        h1: "clamp(2.8rem, calc(2.8rem + ((1vw - 0.48rem) * 1.3889)), 3.8rem)",
        h2: "clamp(2rem, calc(2rem + ((1vw - 0.48rem) * 1.3889)), 3rem)",
        h3: "clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.5208)), 1.875rem)",
        h4: "clamp(1.125rem, calc(1.125rem + ((1vw - 0.48rem) * 0.3472)), 1.375rem)",
        body: "clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.1736)), 1.125rem)",
        small:
          "clamp(0.875rem, calc(0.875rem + ((1vw - 0.48rem) * 0.1736)), 1rem)",
      },
      lineHeight: {
        lh1: "1.3",
        lh2: "1.35",
        lh3: "1.4",
        lh4: "1.5",
        lhbody: "1.6",
      },
    },
  },
  plugins: [defaultStyles, addVariablesForColors],
};

export default config;
