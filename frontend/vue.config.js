const path = require('path');

module.exports = {
	publicPath: '', // Should be STATIC_URL + path/to/build
	outputDir: path.resolve(__dirname, '/static/vue/dist/'), // Output to a directory in STATICFILES_DIRS
	filenameHashing: false,
	runtimeCompiler: true,
	devServer: {
		writeToDisk: true,
	},
};
