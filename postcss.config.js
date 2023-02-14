import postcssPresetEnv from 'postcss-preset-env';
import postcssFor from 'postcss-for';

const config = {
	plugins: [
		postcssFor(),
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
