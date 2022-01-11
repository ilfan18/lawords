const path = require('path');

module.exports = {
	outputDir: path.resolve(__dirname, '../static/frontend/dist/'), // Output to a directory in STATICFILES_DIRS
	assetsDir: 'static',
	filenameHashing: false,
	runtimeCompiler: true,
	devServer: {
		writeToDisk: true,
	},
};
