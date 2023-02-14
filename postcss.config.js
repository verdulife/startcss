import postcssPresetEnv from 'postcss-preset-env';
import postcssFor from 'postcss-for';
import postcssEach from 'postcss-each';

const config = {
	plugins: [
		postcssFor(),
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
