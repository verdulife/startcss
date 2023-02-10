import postcssPresetEnv from 'postcss-preset-env';
import postcssFunctions from "postcss-functions";
import { fromString } from "css-color-converter";

function toHSLObject(hslString) {
	const [h, s, l] = hslString.match(/\d+/g).map(Number);
	return { h, s, l };
};

export function generatePalette(name, color) {
	const hslString = fromString(color).toHslString();
	const { h, s, l } = toHSLObject(hslString);

	let palette = [
		`--${name}: hsl(${h}, ${s}%, ${l}%);`,
		`--${name}-hsl: ${h}, ${s}%, ${l}%;`
	];

	for (let p = 0; p < 9; p++) {
		palette.push(`--${name}-${9 - p}00: hsl(${h}, ${s}%, ${11, 11 * (p + 1) - 1 * p}%);`);
		palette.push(`--${name}-${9 - p}00-hsl: ${h}, ${s}%, ${11, 11 * (p + 1) - 1 * p}%;`);
	}

	let css = ``;
	palette.forEach(p => {
		css += `\n\t${p}`;
	})

	return css;
}

const config = {
	plugins: [
		postcssFunctions({
			functions: { generatePalette }
		}),
		postcssPresetEnv({
			features: {
				'nesting-rules': true,
				'custom-properties': true,
				'custom-selectors': true
			}
		})
	]
};

export default config;
