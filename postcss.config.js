import postcssPresetEnv from 'postcss-preset-env';

const config = {
	plugins: [
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
