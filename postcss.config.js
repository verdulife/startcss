import postcssPresetEnv from 'postcss-preset-env';
import postcssFunctions from "postcss-functions";
import { fromString } from 'css-color-converter';

function toHSLObject(hslStr) {
	const [h, s, l] = hslStr.match(/\d+/g).map(Number);
	return { h, s, l };
};

export function pelettize(color, name, value) {
	console.log(color, name, value);
	const hsl = fromString(color).toHslString();
	const { h, s, l } = toHSLObject(hsl);


	return `--${name}-${value}00: hsl(${h}, ${s}%, ${l}%);`;
}

const config = {
	plugins: [
		postcssFunctions({
			functions: { palettize }
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
