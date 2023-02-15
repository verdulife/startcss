import postcssPresetEnv from 'postcss-preset-env';
import postcssEach from 'postcss-each';

const config = {
	plugins: [
		postcssEach(),
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
