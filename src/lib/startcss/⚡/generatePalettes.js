import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { fromString } from "css-color-converter";

const __dirname = dirname(fileURLToPath(import.meta.url));

function toHslObject(hslStr) {
  const strValues = hslStr.replace("hsl(", "").replace(")", "");
  const arrValues = strValues.split(',');

  return {
    h: parseInt(arrValues[0], 10),
    s: parseInt(arrValues[1].replace(/%+/, ''), 10),
    l: parseInt(arrValues[2].replace(/%+/, ''), 10)
  }
};

export function generatePalettes(colors) {
  let palettes = "";

  for (let key in colors) {
    const value = colors[key];
    const hsl = fromString(value).toHslString();
    const { h, s, l } = toHslObject(hsl);

    let palette = `\n\t--${key}: hsl(${h}, ${s}%, ${l}%);`;
    palette += `\n\t--${key}-hsl: ${h}, ${s}%, ${l}%;`;

    for (let p = 0; p < 9; p++) {
      const inc = p + 1;
      palette += `\n\t--${key}-${inc}00: hsl(${h}, ${s}%, ${100 - (11 * inc - 1 * inc)}%);`;
      palette += `\n\t--${key}-${inc}00-hsl: ${h}, ${s}%, ${100 - (11 * inc - 1 * inc)}%;`;
    }

    palettes += palette;
  }

  const css = `:root {${palettes}\n}`;

  try {
    writeFile(join(__dirname, "_colors.css"), css);
    console.log("success");
  } catch (error) {
    console.error(error);
  }
}