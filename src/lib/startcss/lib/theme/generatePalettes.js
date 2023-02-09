import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { hexToHSL } from "./utils.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function generatePalettes(colors) {
  let palettes = "/* Colors & Palettes */";

  for (let key in colors) {
    const value = colors[key];
    const { h, s, l } = hexToHSL(value)

    let palette = `--${key}: hsl(${h}, ${s}%, ${l}%);
  --${key}-hsl: ${h}, ${s}%, ${l}%;`;

    for (let p = 0; p < 9; p++) {
      palette = `${palette}
  --${key}-${9 - p}00: hsl(${h}, ${s}%, ${11, 11 * (p + 1) - 1 * p}%);
  --${key}-${9 - p}00-hsl: ${h}, ${s}%, ${11, 11 * (p + 1) - 1 * p}%;`;
    }

    palettes = `${palettes}
  ${palette}`;
  }

  const css = `:root {
    ${palettes}
  }`;

  try {
    writeFile(join(__dirname, "_colors.css"), css);
  } catch (error) {
    console.error(error);
  }
}