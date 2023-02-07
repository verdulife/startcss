import { generatePalettes } from "./generatePalettes.js";

// Add or modify colors as you like. Names will match definitions.
// Defined color will be accesible as var(--your-color).
// Ex. var(--accent-100);

// Autogenerate palettes from 100 to 900 as a CSS custom property.
// All colors and palettes generate a HSL value custom property for opacity aplication.
// Ex. hsl(var(--accent-100-hsl), 0.5);
const colors = {
  base: "#fafafa",
  accent: "#FFD55E",
  alt: "#041A40",
  info: "#1E4BCA",
  success: "#4BB543",
  warning: "#FF7900",
  error: "#CB0B44",
}

// Choose good contrast colors for texts
// Defined color will auto add a "t-" prefix and accesible as var(--t-your-color).
// Undefined colors will use base as default
// Ex. var(--t-accent);
const textColors = {
  base: "#1a1a1a",
  alt: "#fafafa",
}

generatePalettes(colors);